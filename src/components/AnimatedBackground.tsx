import { useEffect, useRef, memo } from "react";

export const AnimatedBackground = memo(function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    let lastTime = 0;
    const FPS = 30;
    const frameInterval = 1000 / FPS;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Инициализация частиц
    const particleCount = Math.min(50, Math.floor((width * height) / 25000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
      });
    }

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);

      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      lastTime = currentTime - (delta % frameInterval);

      ctx.clearRect(0, 0, width, height);

      // Рисуем частицы
      ctx.fillStyle = "rgba(99, 102, 241, 0.5)";
      ctx.beginPath();
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();

      // Связи
      ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      const maxDistSq = 120 * 120;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < Math.min(i + 10, particles.length); j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          if (dx * dx + dy * dy < maxDistSq) {
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
    </div>
  );
});
