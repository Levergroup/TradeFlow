import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

type LeadPayload = {
  name?: string;
  email?: string;
  source?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server-side proxy that forwards captured leads to the GHL webhook. Keeping
 * the webhook URL server-side avoids exposing it in client bundles and gives
 * us a place to validate input.
 */
export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const email = (body.email ?? '').trim();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'A valid email is required' }, { status: 422 });
  }

  const payload = {
    name: (body.name ?? '').trim(),
    email,
    source: body.source ?? 'website',
    message: body.message ?? '',
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(site.webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Lead service unavailable' }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: 'Lead service unreachable' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
