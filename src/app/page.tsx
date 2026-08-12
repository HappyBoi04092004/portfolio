'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ArrowRight,
  Server, 
  Smartphone, 
  Database, 
  Cloud,
  Phone
} from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const servicesThemes = [
  { color: 'cyan', dot: 'bg-cyan', arrow: 'text-cyan', hover: 'hover:border-cyan/60' },
  { color: 'magenta', dot: 'bg-magenta', arrow: 'text-magenta', hover: 'hover:border-magenta/60' },
  { color: 'lime', dot: 'bg-lime', arrow: 'text-lime', hover: 'hover:border-lime/60' },
  { color: 'violet', dot: 'bg-violet', arrow: 'text-violet', hover: 'hover:border-violet/60' }
];

export default function HomePage() {
  const { portfolioData, t } = useLanguage();
  const owner = portfolioData.owner;
  const projects = portfolioData.projects;
  const experience = portfolioData.experience;
  const certificates = portfolioData.certificates;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 72; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-bg">
      {/* HOME/HERO SECTION */}
      <section id="home" className="section-anchor relative overflow-hidden pt-40 pb-24 outline-none">
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10"></div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-bg/50 via-bg/30 to-bg"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-5">
          {/* Header Roles tags */}
          <div className="mb-8 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
            {t.hero.roles.map((role, idx) => (
              <span key={role} className="flex items-center gap-3">
                {idx > 0 && <span className="text-line">·</span>}
                <span>{role}</span>
              </span>
            ))}
          </div>

          {/* Big Hero Title */}
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            {t.hero.title1}<br/>
            <span className="text-gradient">{t.hero.title2}</span>
          </h1>

          {/* Headline description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {owner.subHeadline}
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="rounded-full bg-cyan px-6 py-3 font-medium text-bg transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
            >
              {t.hero.ctaHire}
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="rounded-full border border-line bg-white/[0.02] px-6 py-3 text-fg transition-colors hover:border-fg/40 hover:bg-white/[0.05]"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_NguyenHanhPhuc.pdf"
              className="rounded-full border border-line bg-white/[0.02] px-6 py-3 text-fg transition-colors hover:border-fg/40 hover:bg-white/[0.05]"
            >
              {t.hero.ctaCv}
            </a>
          </div>

          {/* Hero Bottom Stats grid */}
          <dl className="mt-20 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-bg-soft p-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{t.hero.location}</dt>
              <dd className="mt-1 text-sm font-medium">Hanoi / Remote / Hybrid</dd>
            </div>
            <div className="bg-bg-soft p-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{t.hero.techStack}</dt>
              <dd className="mt-1 text-sm font-medium">Go, NestJS, Flutter, AWS</dd>
            </div>
            <div className="bg-bg-soft p-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{t.hero.status}</dt>
              <dd className="mt-1 text-sm font-medium">{t.hero.statusValue}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section-anchor border-t border-line py-24 outline-none">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-wider text-cyan">{t.services.badge}</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.services.title}</h2>
          <p className="mt-4 max-w-xl text-muted">
            {t.services.subtitle}
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {t.services.list.map((service, index) => {
              const theme = servicesThemes[index % servicesThemes.length];
              return (
                <div key={index} className={`group h-full rounded-2xl border border-line bg-bg-soft p-7 transition-colors ${theme.hover}`}>
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${theme.dot}`}></span>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {service.desc}
                  </p>
                  <ul className="mt-6 space-y-2 font-mono text-xs text-muted">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className={theme.arrow}>→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="inline-block font-mono text-sm text-cyan underline-offset-4 hover:underline"
            >
              {t.services.contactNow}
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-anchor border-t border-line py-24 outline-none">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-wider text-cyan">{t.experience.badge}</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.experience.title}</h2>
          <p className="mt-4 max-w-xl text-muted">
            {t.experience.subtitle}
          </p>

          <ol className="relative mt-14 space-y-5 before:absolute before:bottom-6 before:left-[7px] before:top-6 before:w-px before:bg-line">
            {experience.map((exp, index) => {
              // Cycle through primary colors
              const colors = ['bg-cyan border-cyan/40', 'bg-magenta border-magenta/40', 'bg-violet border-violet/40'];
              const hoverBorders = ['hover:border-cyan/60', 'hover:border-magenta/60', 'hover:border-violet/60'];
              const textColors = ['text-cyan', 'text-magenta', 'text-violet'];
              
              const colorClass = colors[index % colors.length];
              const hoverBorderClass = hoverBorders[index % hoverBorders.length];
              const textColorClass = textColors[index % textColors.length];

              return (
                <li key={exp.id} className="relative pl-8 sm:pl-10">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-9 h-3.5 w-3.5 rounded-full border-2 border-bg ${colorClass}`}
                  ></span>
                  
                  <article className={`rounded-2xl border border-line bg-bg-soft p-7 transition-colors ${hoverBorderClass}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                      <h3 className="text-xl font-semibold text-fg">{exp.role}</h3>
                      <span className="font-mono text-xs text-muted">{exp.period}</span>
                    </div>
                    
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
                      <span className={textColorClass}>{exp.company}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.location}</span>
                    </p>
                    
                    <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex gap-2">
                          <span className={textColorClass}>→</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <li key={skill}>
                          <span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1 font-mono text-xs text-fg/80">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="stack" className="section-anchor border-t border-line py-24 outline-none">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-wider text-lime">{t.stack.badge}</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.stack.title}</h2>
          <p className="mt-4 max-w-xl text-muted">
            {t.stack.subtitle}
          </p>

          <div className="mt-14 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-2">
            {/* Backend Engineering */}
            <div className="h-full rounded-2xl border border-line bg-bg-soft p-7 transition-colors hover:border-cyan/60">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-cyan">
                  <Server className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-fg">Backend Engineering</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Go (Golang)</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Node.js</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">NestJS</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Python / FastAPI</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Java / Spring Boot</span></li>
              </ul>
            </div>

            {/* Mobile Dev */}
            <div className="h-full rounded-2xl border border-line bg-bg-soft p-7 transition-colors hover:border-magenta/60">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-magenta">
                  <Smartphone className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-fg">Mobile Development</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Flutter & Dart</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">React Native</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">iOS & Android Natives</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">BLoC Pattern</span></li>
              </ul>
            </div>

            {/* DB & Caching */}
            <div className="h-full rounded-2xl border border-line bg-bg-soft p-7 transition-colors hover:border-lime/60">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-lime">
                  <Database className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-fg">Database & Caching</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">PostgreSQL</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">MongoDB</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Redis</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Elasticsearch</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Prisma / TypeORM</span></li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="h-full rounded-2xl border border-line bg-bg-soft p-7 transition-colors hover:border-violet/60">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white/[0.02] text-violet">
                  <Cloud className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-fg">Cloud & DevOps</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Docker & Kubernetes</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">AWS services</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">CI/CD Pipelines</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">GitHub Actions</span></li>
                <li><span className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-fg/80">Linux / Bash</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION/CERTIFICATES SECTION */}
      <section id="education" className="section-anchor border-t border-line py-24 outline-none">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-wider text-violet">{t.education.badge}</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.education.title}</h2>
          <p className="mt-4 max-w-xl text-muted">
            {t.education.subtitle}
          </p>

          <div className="mt-14 grid items-start gap-5 md:grid-cols-2">
            {certificates.map((cert, index) => {
              const borderGlows = ['hover:border-cyan/60', 'hover:border-violet/60', 'hover:border-magenta/60'];
              const glowClass = borderGlows[index % borderGlows.length];

              return (
                <div key={cert.id} className="h-full">
                  <article className={`h-full rounded-2xl border border-line bg-bg-soft p-7 transition-colors ${glowClass}`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 font-mono text-xs text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan"></span>
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-xs text-muted">{cert.date}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-fg">{cert.title}</h3>
                    <p className="mt-2 font-mono text-xs text-muted/60">ID: {cert.credentialId}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:underline"
                      >
                        {t.education.verify} <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-anchor border-t border-line py-24 outline-none">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-wider text-magenta">{t.projects.badge}</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{t.projects.title}</h2>
          <p className="mt-4 max-w-xl text-muted">
            {t.projects.subtitle}
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {projects.map((proj, index) => {
              const borderGlows = ['hover:border-cyan/60', 'hover:border-magenta/60', 'hover:border-violet/60', 'hover:border-lime/60'];
              const tagColors = ['bg-cyan/10 border-cyan/30 text-cyan', 'bg-magenta/10 border-magenta/30 text-magenta', 'bg-violet/10 border-violet/30 text-violet', 'bg-lime/10 border-lime/30 text-lime'];
              
              const glowClass = borderGlows[index % borderGlows.length];
              const tagColorClass = tagColors[index % tagColors.length];

              return (
                <div key={proj.id} style={{ opacity: 1 }}>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex h-full flex-col rounded-2xl border border-line bg-bg-soft p-7 transition-colors ${glowClass}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-muted">{proj.subtitle}</span>
                      <span className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${tagColorClass}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {proj.category.toUpperCase()}
                      </span>
                    </div>
                    
                    <h3 className="mt-4 text-2xl font-semibold text-fg">{proj.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{proj.description}</p>
                    
                    <div className="mt-6 flex items-center justify-between border-t border-line/40 pt-4">
                      <span className="font-mono text-xs text-fg/60 max-w-[80%] truncate">
                        {proj.techStack.join(' · ')}
                      </span>
                      <span className="font-mono text-sm text-cyan transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section id="manifesto" className="section-anchor relative overflow-hidden border-t border-line py-24 outline-none">
        <div className="grid-bg pointer-events-none absolute inset-0 -z-10"></div>
        <div className="mx-auto max-w-3xl px-5">
          <p className="font-mono text-xs uppercase tracking-wider text-lime">{t.manifesto.badge}</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-gradient">{t.manifesto.title1}<br/>{t.manifesto.title2}</span>
          </h2>
          
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            {t.manifesto.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-anchor border-t border-line py-28 outline-none">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-soft">
            {/* Gooey Liquid SVG Filter */}
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-0 h-0">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            
            {/* Glowing animated floating blobs */}
            <div className="absolute inset-0 opacity-40 md:opacity-55" style={{ filter: 'url(#goo) blur(40px)' }}>
              <div className="absolute rounded-full w-72 h-72 bg-cyan/30 top-[10%] left-[10%] bubble-animate-1" />
              <div className="absolute rounded-full w-80 h-80 bg-magenta/25 top-[30%] right-[10%] bubble-animate-2" />
              <div className="absolute rounded-full w-96 h-96 bg-violet/30 bottom-[10%] left-[30%] bubble-animate-1" />
              <div className="absolute rounded-full w-80 h-80 bg-lime/25 bottom-[20%] right-[20%] bubble-animate-2" />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-bg/30"></div>

            <div className="relative z-10 p-10 sm:p-16">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan">{t.contact.badge}</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                <span className="text-gradient">{t.contact.title}</span>
              </h2>
              <p className="mt-5 max-w-lg text-muted">
                {t.contact.subtitle}
              </p>
              
              <a
                href={`mailto:${owner.email}`}
                className="mt-8 inline-block rounded-full bg-cyan px-7 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
              >
                {t.contact.cta}
              </a>
              
              <p className="mt-4 font-mono text-sm text-muted">
                <a href={`mailto:${owner.email}`} className="hover:text-cyan transition-colors">
                  {owner.email}
                </a>
              </p>

              {/* Social links grid */}
              <div className="mt-12 flex flex-wrap gap-5 border-t border-line pt-8 font-mono text-sm text-muted">
                <a
                  href={owner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-fg"
                >
                  <FaGithub className="w-4 h-4" /> GitHub ↗
                </a>
                <a
                  href={owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-fg"
                >
                  <FaLinkedinIn className="w-4 h-4" /> LinkedIn ↗
                </a>
                <a
                  href={owner.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-fg"
                >
                  <FaFacebookF className="w-4 h-4" /> Facebook ↗
                </a>
                <a
                  href="tel:+84900000000"
                  className="flex items-center gap-1.5 transition-colors hover:text-fg"
                >
                  <Phone className="w-4 h-4" /> (+84) Phone ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
