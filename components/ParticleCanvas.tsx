"use client";

import { useEffect, useRef } from "react";

interface Props {
  color?: string;
  opacity?: number;
  count?: number;
}

export default function ParticleCanvas({ color = "67,56,202", opacity = 1, count = 55 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    interface P { x: number; y: number; vx: number; vy: number; r: number }
    let pts: P[] = [];

    const init = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2 + 1.2,
      }));
    };

    init();
    window.addEventListener("resize", init);

    const MAX_DIST = 130;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color},${((1 - d / MAX_DIST) * 0.18 * opacity).toFixed(3)})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${(0.28 * opacity).toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    };

    tick();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, [color, opacity, count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
