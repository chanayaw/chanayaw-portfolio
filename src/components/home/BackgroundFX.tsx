'use client';
import { useEffect, useRef } from 'react';

type Props = {
  /** use opacity-08 | opacity-10 | opacity-12 etc. */
  opacityClass?: string;
  showParticles?: boolean;
};

export default function BackgroundFX({ opacityClass = 'opacity-12', showParticles = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dprRef = useRef<number>(1);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!showParticles || reduceMotion) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      const { offsetWidth, offsetHeight } = canvas;
      canvas.width = Math.max(1, Math.round(offsetWidth * dpr));
      canvas.height = Math.max(1, Math.round(offsetHeight * dpr));
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset first
      ctx.scale(dpr, dpr); // scale drawing to CSS pixels
    };

    setSize();
    window.addEventListener('resize', setSize);

    const wCss = () => canvas.offsetWidth;
    const hCss = () => canvas.offsetHeight;
    const COUNT = Math.max(24, Math.floor((wCss() * hCss()) / 12000)); // scale by viewport CSS px

    const getVar = (name: string, fallback: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

    const DOT = getVar('--color-secondary', '#4b9a9a');
    const LINE = getVar('--color-accent', '#d85c8a');

    const particles = Array.from({ length: COUNT }).map(() => ({
      x: Math.random() * wCss(),
      y: Math.random() * hCss(),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() * 1.5 + 0.5,
    }));

    const maxDist = 120;
    function tick() {
      // Clear in device pixels without compounding transforms (GPU artifact guard)
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dprRef.current, dprRef.current);

      // lines
      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = LINE;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = DOT;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > wCss()) p.vx *= -1;
        if (p.y < 0 || p.y > hCss()) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', setSize);
    };
  }, [showParticles]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 isolate -z-10">
      {/* gradient blur layer (no inline styles) */}
      <div className={`fx-gradient fx-blur fx-blend-screen absolute inset-0 ${opacityClass}`} />

      {/* particle canvas (no inline styles) */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
