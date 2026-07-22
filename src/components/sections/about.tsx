'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ChevronRight, Compass } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/ui/brand-icons';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';
import Image from 'next/image';
import MagneticWrapper from '@/components/ui/magnetic-wrapper';

function Counter({
  value,
  duration = 1.6,
  suffix = '',
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-extrabold text-[#c770f0] tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto space-y-20">
        
        {/* BLOCK 1: LET ME INTRODUCE MYSELF */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            className="lg:col-span-8 space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              <p>
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              </p>
              <p>
                I am fluent in classics like <b className="purple">Go (Golang), Node.js, TypeScript</b> and <b className="purple">Flutter (Dart)</b>.
              </p>
              <p>
                My field of Interest&apos;s are building new <b className="purple">Web & Mobile Technologies and Products</b> and also in areas related to <b className="purple">High-Performance Backend Microservices & Cloud Infrastructure</b>.
              </p>
              <p>
                Whenever possible, I also apply my passion for developing products with <b className="purple">Go, NestJS, PostgreSQL</b> and Modern Mobile Frameworks like <b className="purple">Flutter</b>.
              </p>
            </div>
          </motion.div>

          {/* Right Avatar with Purple Glow */}
          <motion.div
            className="lg:col-span-4 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative w-64 h-64 rounded-full border border-purple-500/30 overflow-hidden shadow-[0_0_30px_rgba(199,112,240,0.3)] bg-purple-950/20">
              <Image
                src="/avatar.png"
                alt="avatar logo"
                fill
                className="object-cover scale-[0.9] hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* BLOCK 2: KNOW WHO I'M */}
        <div className="grid lg:grid-cols-12 gap-12 items-center pt-8">
          
          {/* Left Biography Info Card */}
          <motion.div
            className="lg:col-span-8 space-y-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Know Who <span className="purple">I&apos;M</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed">
              <p>
                Hi Everyone, I am <span className="purple">{portfolioConfig.owner.name}</span> from <span className="purple">Ho Chi Minh City, Vietnam</span>.
                <br />
                I am currently working as a <span className="purple">Senior Software Engineer</span>.
                <br />
                I focus on architecting secure, scalable server systems and constructing high-fidelity mobile clients.
              </p>

              <p className="text-muted-dark font-semibold uppercase tracking-wider text-xs font-mono pt-2">
                Apart from coding, some other activities that I love to do!
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 pl-2">
                {[
                  'Designing distributed cloud networks',
                  'Exploring 3D web experiences (Three.js)',
                  'Playing online tactical video games',
                  'Reading systems engineering blogs'
                ].map((hobby) => (
                  <li key={hobby} className="flex items-center gap-2 text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-[#c770f0] shrink-0" />
                    <span>{hobby}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-purple-500/20">
                <blockquote className="border-l-4 border-purple-500 pl-4 py-1 italic font-serif text-slate-400 text-sm sm:text-base bg-purple-500/5 rounded-r-xl">
                  &quot;Devote yourself to writing clean code, modular architecture, and high throughput backend systems. The engineering is in the details.&quot;
                  <footer className="text-right text-xs font-mono font-bold text-[#c770f0] mt-1.5">— HP</footer>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Right illustration image */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <div className="relative w-full max-w-sm aspect-square select-none pointer-events-none mx-auto">
              <Image
                src="/about-main.png"
                alt="about computer illustration"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(199,112,240,0.25)]"
              />
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioConfig.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="card p-4 flex flex-col justify-between gap-1 border-purple-500/20"
                >
                  <span className="text-[10px] font-mono text-muted uppercase tracking-wider">{stat.label}</span>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOCK 3: FIND ME ON social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center space-y-4 pt-10 border-t border-purple-500/20"
        >
          <h3 className="text-3xl font-extrabold uppercase tracking-tight text-white">
            FIND ME ON
          </h3>
          <p className="text-sm text-slate-300">
            Feel free to <span className="purple font-bold">connect</span> with me
          </p>

          <div className="flex justify-center items-center gap-4 pt-2">
            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(199,112,240,0.6)] flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(199,112,240,0.6)] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(199,112,240,0.6)] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </MagneticWrapper>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
