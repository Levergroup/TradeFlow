const items = [
  '5M+ solo tradespeople in the US',
  'From lead to paid in 4 taps',
  'Set up in 20 minutes',
  'No credit card required',
  'Free trade website included',
  'Cancel anytime',
];

/**
 * Infinite horizontal proof ticker. The track is duplicated and translated
 * -50% over a 30s linear loop (seamless), pausing on hover. Pure CSS marquee —
 * no JS needed, so it can render on the server.
 */
export function Ticker() {
  const loop = [...items, ...items];

  return (
    <div className="ticker-mask group relative overflow-hidden py-1" aria-label="Why tradespeople choose TradeFlow">
      <div className="ticker-track flex w-max items-center gap-8">
        {loop.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span>
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
