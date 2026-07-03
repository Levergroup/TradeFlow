/**
 * Self-contained, theme-matched SVG mockups used on the homepage bento grid and
 * the /features modules. No external assets — all inline.
 */

export function BrowserMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-full" role="img" aria-label="Trade website preview">
      <rect x="0.5" y="0.5" width="319" height="179" rx="12" fill="#0F172A" stroke="#2D3F55" />
      <rect x="0.5" y="0.5" width="319" height="34" rx="12" fill="#1E2A3A" />
      <rect x="0.5" y="22" width="319" height="12" fill="#1E2A3A" />
      <circle cx="20" cy="17" r="4" fill="#F59E0B" />
      <circle cx="36" cy="17" r="4" fill="#2D3F55" />
      <circle cx="52" cy="17" r="4" fill="#2D3F55" />
      <rect x="72" y="10" width="220" height="14" rx="7" fill="#0F172A" stroke="#2D3F55" />
      <text x="84" y="20" fill="#94A3B8" fontSize="9" fontFamily="sans-serif">yourtrade.tradeflow.io</text>
      <rect x="16" y="50" width="180" height="16" rx="4" fill="#F8FAFC" opacity="0.9" />
      <rect x="16" y="74" width="130" height="10" rx="4" fill="#94A3B8" />
      <rect x="16" y="96" width="96" height="22" rx="6" fill="#F59E0B" />
      <text x="30" y="111" fill="#0F172A" fontSize="10" fontWeight="700" fontFamily="sans-serif">Book Now</text>
      <rect x="212" y="50" width="92" height="68" rx="8" fill="#1E3A5F" />
      <rect x="16" y="134" width="88" height="30" rx="6" fill="#1E2A3A" stroke="#2D3F55" />
      <rect x="116" y="134" width="88" height="30" rx="6" fill="#1E2A3A" stroke="#2D3F55" />
      <rect x="216" y="134" width="88" height="30" rx="6" fill="#1E2A3A" stroke="#2D3F55" />
    </svg>
  );
}

export function PhoneSmsMockup() {
  return (
    <svg viewBox="0 0 200 180" className="mx-auto w-full max-w-[220px]" role="img" aria-label="Text-to-pay message preview">
      <rect x="52" y="4" width="96" height="172" rx="16" fill="#0F172A" stroke="#2D3F55" strokeWidth="1.5" />
      <rect x="84" y="12" width="32" height="5" rx="2.5" fill="#2D3F55" />
      <rect x="60" y="28" width="70" height="24" rx="10" fill="#1E2A3A" />
      <text x="68" y="43" fill="#F8FAFC" fontSize="7" fontFamily="sans-serif">On my way! 🚚</text>
      <rect x="70" y="60" width="72" height="40" rx="10" fill="#1E3A5F" />
      <text x="78" y="74" fill="#F8FAFC" fontSize="6.5" fontFamily="sans-serif">Invoice #1042</text>
      <rect x="78" y="80" width="56" height="14" rx="7" fill="#F59E0B" />
      <text x="86" y="90" fill="#0F172A" fontSize="7" fontWeight="700" fontFamily="sans-serif">Pay $480</text>
      <rect x="66" y="108" width="64" height="22" rx="10" fill="#1E2A3A" />
      <text x="74" y="122" fill="#F59E0B" fontSize="7" fontWeight="700" fontFamily="sans-serif">Paid ✓</text>
      <text x="74" y="146" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">Same-day deposit</text>
    </svg>
  );
}

export function CalendarMockup() {
  const jobs = [
    { x: 20, y: 70, w: 60, fill: '#F59E0B' },
    { x: 96, y: 70, w: 60, fill: '#1E3A5F' },
    { x: 172, y: 96, w: 60, fill: '#1E3A5F' },
    { x: 248, y: 70, w: 56, fill: '#2D3F55' },
    { x: 20, y: 120, w: 60, fill: '#1E3A5F' },
    { x: 172, y: 120, w: 60, fill: '#F59E0B' },
  ];
  return (
    <svg viewBox="0 0 320 180" className="w-full" role="img" aria-label="Weekly schedule preview">
      <rect x="0.5" y="0.5" width="319" height="179" rx="12" fill="#0F172A" stroke="#2D3F55" />
      {[20, 96, 172, 248].map((x) => (
        <text key={x} x={x} y="30" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
          {['Mon', 'Tue', 'Wed', 'Thu'][[20, 96, 172, 248].indexOf(x)]}
        </text>
      ))}
      <line x1="16" y1="42" x2="304" y2="42" stroke="#2D3F55" />
      {jobs.map((j, i) => (
        <rect key={i} x={j.x} y={j.y} width={j.w} height="30" rx="6" fill={j.fill} opacity="0.9" />
      ))}
    </svg>
  );
}

export function QuoteMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-full" role="img" aria-label="Digital quote preview">
      <rect x="80" y="0.5" width="160" height="179" rx="12" fill="#0F172A" stroke="#2D3F55" />
      <rect x="96" y="18" width="80" height="12" rx="4" fill="#F8FAFC" opacity="0.9" />
      <text x="96" y="52" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Quote #Q-208</text>
      {[70, 90, 110].map((y) => (
        <g key={y}>
          <rect x="96" y={y} width="90" height="8" rx="4" fill="#2D3F55" />
          <rect x="196" y={y} width="28" height="8" rx="4" fill="#94A3B8" />
        </g>
      ))}
      <line x1="96" y1="128" x2="224" y2="128" stroke="#2D3F55" />
      <text x="96" y="144" fill="#F8FAFC" fontSize="9" fontWeight="700" fontFamily="sans-serif">Total $480</text>
      <rect x="96" y="152" width="128" height="18" rx="6" fill="#F59E0B" />
      <text x="120" y="164" fill="#0F172A" fontSize="8" fontWeight="700" fontFamily="sans-serif">Approve &amp; Sign</text>
    </svg>
  );
}

export function CrewMockup() {
  const rows = [
    { name: 'Job #1 — Panel upgrade', status: 'In progress', c: '#F59E0B' },
    { name: 'Job #2 — Water heater', status: 'Scheduled', c: '#1E3A5F' },
    { name: 'Job #3 — AC service', status: 'Complete', c: '#2D3F55' },
  ];
  return (
    <svg viewBox="0 0 320 180" className="w-full" role="img" aria-label="Crew field app preview">
      <rect x="0.5" y="0.5" width="319" height="179" rx="12" fill="#0F172A" stroke="#2D3F55" />
      <text x="20" y="28" fill="#F8FAFC" fontSize="11" fontWeight="700" fontFamily="sans-serif">Today&apos;s jobs</text>
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="16" y={44 + i * 40} width="288" height="32" rx="8" fill="#1E2A3A" stroke="#2D3F55" />
          <circle cx="34" cy={60 + i * 40} r="5" fill={r.c} />
          <text x="48" y={64 + i * 40} fill="#F8FAFC" fontSize="9" fontFamily="sans-serif">{r.name}</text>
          <text x="230" y={64 + i * 40} fill="#94A3B8" fontSize="8" fontFamily="sans-serif">{r.status}</text>
        </g>
      ))}
    </svg>
  );
}

export function ReviewMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-full" role="img" aria-label="Review request preview">
      <rect x="0.5" y="0.5" width="319" height="179" rx="12" fill="#0F172A" stroke="#2D3F55" />
      <text x="160" y="46" textAnchor="middle" fill="#F59E0B" fontSize="26" fontFamily="sans-serif">★★★★★</text>
      <text x="160" y="78" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="sans-serif">How did we do?</text>
      <rect x="60" y="96" width="200" height="26" rx="8" fill="#1E2A3A" stroke="#2D3F55" />
      <text x="160" y="113" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="sans-serif">Leave a Google review →</text>
      <rect x="96" y="134" width="128" height="24" rx="8" fill="#F59E0B" />
      <text x="160" y="150" textAnchor="middle" fill="#0F172A" fontSize="9" fontWeight="700" fontFamily="sans-serif">Post review</text>
    </svg>
  );
}
