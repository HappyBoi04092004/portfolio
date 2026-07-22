'use client';

import React from 'react';
import Image from 'next/image';
import { GitHubCalendar } from 'react-github-calendar';
import { SiNextdotjs, SiSolidity, SiFlutter } from 'react-icons/si';
import { FaRust } from 'react-icons/fa';
import { ImPointRight } from 'react-icons/im';
import { portfolioConfig } from '@/config/portfolio';

// AboutCard Component
function AboutCard() {
  return (
    <div className="quote-card-view p-4">
      <div className="blockquote mb-0 text-slate-200">
        <p style={{ textAlign: 'justify' }} className="text-base sm:text-lg leading-relaxed">
          Hi everyone! I’m <span className="purple font-semibold">{portfolioConfig.owner.name}</span>{' '}
          from <span className="purple font-semibold">Ho Chi Minh City, Vietnam</span>.
          <br />
          I’m currently working as a <span className="purple font-semibold">Senior Software Engineer</span>.
          <br />
          I hold a Bachelor&apos;s degree in <span className="purple font-semibold">Computer Science</span>.
          <br />
          <br />
          Outside of coding, I love engaging in activities that keep me
          creative and inspired:
        </p>

        <ul className="space-y-2 mt-4 pl-4">
          <li className="about-activity flex items-center gap-2">
            <ImPointRight className="text-[#c770f0]" /> <span>Designing distributed cloud networks ☁️</span>
          </li>
          <li className="about-activity flex items-center gap-2">
            <ImPointRight className="text-[#c770f0]" /> <span>Exploring 3D web experiences (Three.js) 🌐</span>
          </li>
          <li className="about-activity flex items-center gap-2">
            <ImPointRight className="text-[#c770f0]" /> <span>Playing online tactical video games 🎮</span>
          </li>
          <li className="about-activity flex items-center gap-2">
            <ImPointRight className="text-[#c770f0]" /> <span>Reading systems engineering blogs ✍️</span>
          </li>
        </ul>

        <p className="mt-6 text-[#a588c0] italic">
          &quot;Devote yourself to writing clean code, modular architecture, and high throughput backend systems. The engineering is in the details.&quot;
        </p>
        <footer className="blockquote-footer mt-2 text-[#c770f0] font-bold">— HP</footer>
      </div>
    </div>
  );
}

// Techstack Component
function Techstack() {
  const techList = [
    { name: 'C++', path: '/Assets/TechIcons/C++.svg' },
    { name: 'JavaScript', path: '/Assets/TechIcons/Javascript.svg' },
    { name: 'TypeScript', path: '/Assets/TechIcons/Typescript.svg' },
    { name: 'Go', path: '/Assets/TechIcons/go.svg' },
    { name: 'Node.js', path: '/Assets/TechIcons/Node.svg' },
    { name: 'React', path: '/Assets/TechIcons/React.svg' },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'MongoDB', path: '/Assets/TechIcons/Mongo.svg' },
    { name: 'Redux', path: '/Assets/TechIcons/Redux.svg' },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Git', path: '/Assets/TechIcons/Git.svg' },
    { name: 'Firebase', path: '/Assets/TechIcons/Firebase.svg' },
    { name: 'Redis', path: '/Assets/TechIcons/Redis.svg' },
    { name: 'Docker', path: '/Assets/TechIcons/Docker.svg' },
    { name: 'Kubernetes', path: '/Assets/TechIcons/Kubernates.svg' },
    { name: 'Postgres', path: '/Assets/TechIcons/SQL.svg' },
    { name: 'Python', path: '/Assets/TechIcons/Python.svg' },
    { name: 'Java', path: '/Assets/TechIcons/Java.svg' },
    { name: 'Tailwind CSS', path: '/Assets/TechIcons/Tailwind.svg' },
    { name: 'Material UI', path: '/Assets/TechIcons/MUI.svg' },
    { name: 'Postman', path: '/Assets/TechIcons/Postman.svg' },
    { name: 'Rust', icon: FaRust },
    { name: 'AWS', path: '/Assets/TechIcons/AWS.svg' },
    { name: 'Kafka', path: '/Assets/TechIcons/Kafka.svg' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 pb-[50px]">
      {techList.map((tech, idx) => {
        const IconComponent = tech.icon;
        return (
          <div key={idx} className="tech-icons flex items-center justify-center p-4">
            {IconComponent ? (
              <IconComponent size={28} className="text-white" />
            ) : (
              <div className="relative w-8 h-8 select-none">
                <Image src={tech.path!} alt={tech.name} fill className="object-contain" />
              </div>
            )}
            <span className="tech-icons-text font-semibold text-white ml-2">{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}

// Toolstack Component
function Toolstack() {
  const toolList = [
    { name: 'macOS', path: '/Assets/TechIcons/Apple MacOSX.svg' },
    { name: 'Chrome', path: '/Assets/TechIcons/Google Chrome.svg' },
    { name: 'VS Code', path: '/Assets/TechIcons/vscode.svg' },
    { name: 'IntelliJ', path: '/Assets/TechIcons/intellij-idea.svg' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 pb-[50px]">
      {toolList.map((tool, idx) => (
        <div key={idx} className="tech-icons flex items-center justify-center p-4">
          <div className="relative w-8 h-8 select-none">
            <Image src={tool.path} alt={tool.name} fill className="object-contain" />
          </div>
          <span className="tech-icons-text font-semibold text-white ml-2">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

// Main About Page Component
export default function AboutPage() {
  return (
    <div className="about-section min-h-screen">
      <div className="section-shell">
        {/* Intro Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-center py-[10px]">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center py-[30px] md:pb-[50px] text-left">
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }} className="font-bold">
              Know Who <strong className="purple">I&apos;M</strong>
            </h1>
            <AboutCard />
          </div>

          <div className="col-span-12 md:col-span-5 flex justify-center py-[50px] md:pt-[120px] about-img">
            <div className="relative w-full max-w-[400px] aspect-square select-none">
              <Image
                src="/Assets/about.png"
                alt="about laptop graphic"
                fill
                className="object-contain img-fluid"
                priority
              />
            </div>
          </div>
        </div>

        {/* Techstack Grid */}
        <h1 className="project-heading text-center font-bold text-3xl mt-12 mb-8">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        {/* Toolstack Grid */}
        <h1 className="project-heading text-center font-bold text-3xl mt-8 mb-8">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* GitHub Contribution Calendar */}
        <div className="flex flex-col items-center justify-center py-[10px] pb-12 text-white">
          <h1 className="project-heading text-center font-bold text-3xl mb-8">
            Days I <strong className="purple">Code</strong>
          </h1>
          <div className="p-4 border border-[rgba(197,115,230,0.2)] bg-[rgba(20,13,38,0.55)] rounded-xl backdrop-blur-md">
            <GitHubCalendar
              username="HappyBoi04092004"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
