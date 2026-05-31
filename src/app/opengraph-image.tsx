import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default Open Graph / Twitter card image, generated at the edge. Applied
 * site-wide via the Next file convention so every page gets a branded card.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
          color: '#F8FAFC',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700 }}>
          Trade<span style={{ color: '#F59E0B' }}>Flow</span>
        </div>
        <div style={{ marginTop: 32, fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
          Get found. Get booked. Get paid.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: '#94A3B8', maxWidth: 900 }}>
          All-in-one field service management software for small business.
        </div>
      </div>
    ),
    { ...size },
  );
}
