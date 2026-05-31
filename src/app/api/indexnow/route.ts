import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

export const runtime = 'nodejs';

/**
 * IndexNow submission endpoint. Gated by the INDEXNOW_SECRET env var so only we
 * can trigger it. POST a JSON body { urls: string[] } with a matching secret in
 * the `x-indexnow-secret` header. Forwards to api.indexnow.org with our key.
 */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret || request.headers.get('x-indexnow-secret') !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let urls: string[];
  try {
    const body = (await request.json()) as { urls?: string[] };
    urls = Array.isArray(body.urls) ? body.urls : [];
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (urls.length === 0) {
    return NextResponse.json({ error: 'No URLs provided' }, { status: 422 });
  }

  const host = new URL(site.url).host;
  const payload = {
    host,
    key: site.indexNowKey,
    keyLocation: `${site.url}/${site.indexNowKey}.txt`,
    urlList: urls,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return NextResponse.json({ ok: res.ok, status: res.status });
  } catch {
    return NextResponse.json({ error: 'IndexNow unreachable' }, { status: 502 });
  }
}
