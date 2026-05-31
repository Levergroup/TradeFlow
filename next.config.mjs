/** @type {import('next').NextConfig} */

// ───────────────────────────────────────────────────────────────────────────
// CRITICAL REDIRECT RULE (from Verado Ventures SOP / TubeScribed learnings):
// NEVER add `has: [{ type: 'host' }]` redirects here. The www <-> non-www
// redirect is handled in the Vercel Dashboard ONLY. Mixing both creates an
// infinite redirect loop and Google indexing errors. Only path-based redirects
// belong in this file.
// ───────────────────────────────────────────────────────────────────────────

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // Path-based redirects only. No host-based redirects.
    return [];
  },
};

export default nextConfig;
