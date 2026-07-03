'use client';

import { motion } from 'framer-motion';

/**
 * Animated gradient-mesh hero background: three slowly drifting blurred blobs
 * (navy, amber, teal) under the existing dot-grid, with a radial fade at the
 * bottom to blend into the next section. Client-only (Framer Motion).
 */
export function HeroBackground() {
  const blobs = [
    {
      color: 'rgba(30,58,95,0.55)',
      size: 600,
      style: { top: '-8%', left: '-6%' },
      animate: { x: [0, 40, 0], y: [0, 30, 0] },
      duration: 20,
    },
    {
      color: 'rgba(245,158,11,0.08)',
      size: 400,
      style: { top: '-4%', right: '-4%' },
      animate: { x: [0, -40, 0], y: [0, 30, 0] },
      duration: 25,
    },
    {
      color: 'rgba(13,148,136,0.10)',
      size: 500,
      style: { bottom: '-14%', left: '50%' },
      animate: { x: [-40, 40, -40], y: [0, -30, 0] },
      duration: 30,
    },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: blob.size,
            height: blob.size,
            borderRadius: '50%',
            filter: 'blur(80px)',
            background: blob.color,
            ...blob.style,
          }}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Bottom fade to blend into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--color-bg))',
        }}
      />
    </div>
  );
}
