'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 160;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.3, // Size between 0.3 and 1.5
        speedX: Math.random() * 0.15 + 0.05, // Speed between 0.05 and 0.2
        speedY: (Math.random() - 0.5) * 0.02,
        opacity: Math.random(),
        opacitySpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update opacity
        p.opacity += p.opacitySpeed;
        if (p.opacity > 1 || p.opacity < 0.05) {
          p.opacitySpeed = -p.opacitySpeed;
        }
        // Clip opacity
        p.opacity = Math.max(0.05, Math.min(1, p.opacity));

        // Move particle rightwards
        p.x += p.speedX;
        p.y += p.speedY;

        // Reset if offscreen
        if (p.x > canvas.width) {
          p.x = 0;
          p.y = Math.random() * canvas.height;
        }
        if (p.y > canvas.height) {
          p.y = 0;
        } else if (p.y < 0) {
          p.y = canvas.height;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 100, 240, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    // Click behavior to push a particle
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Add a few particles at the click location
      for (let j = 0; j < 3; j++) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 10,
          y: mouseY + (Math.random() - 0.5) * 10,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.3 + 0.1,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: 1,
          opacitySpeed: -(Math.random() * 0.01 + 0.005),
        });
      }

      // Keep array size reasonable by shifting oldest if too many
      if (particles.length > 250) {
        particles.splice(0, particles.length - 250);
      }
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="tsparticles"
      className="fixed inset-0 pointer-events-auto z-0 animate-fade-in"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
