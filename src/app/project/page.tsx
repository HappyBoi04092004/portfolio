'use client';

import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { portfolioConfig } from '@/config/portfolio';

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

function ProjectCard({ imgPath, title, description, ghLink, demoLink, isBlog = false }: ProjectCardProps) {
  return (
    <div className="project-card-view card p-4 flex flex-col justify-between h-full card-interactive">
      <div>
        <div className="relative w-full aspect-[16/10] select-none rounded-lg overflow-hidden border border-purple-500/10 mb-4">
          <Image
            src={imgPath}
            alt={title}
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="card-body">
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <p className="text-sm text-slate-300 text-justify mb-6 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        <a
          href={ghLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary text-xs py-2 px-4 shadow-[0_4px_15px_rgba(98,54,134,0.4)]"
        >
          <BsGithub size={14} />
          <span>{isBlog ? 'Blog' : 'GitHub'}</span>
        </a>

        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary text-xs py-2 px-4 shadow-[0_4px_15px_rgba(98,54,134,0.4)]"
          >
            <CgWebsite size={14} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const projectImages: Record<string, string> = {
    skyroute: '/Assets/Projects/chatify.png',       // mobile + dashboard style
    paypulse: '/Assets/Projects/codeEditor.png',    // system/editor style
    mediconnect: '/Assets/Projects/emotion.png',    // webrtc interface style
    cloudguard: '/Assets/Projects/suicide.png',     // terminal/threat monitoring style
  };

  const projects = portfolioConfig.projects;

  return (
    <div className="project-section min-h-screen">
      <div className="section-shell">
        <h1 className="project-heading text-center font-bold text-4xl mb-4 text-white">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="text-center text-slate-300 text-lg mb-12">
          Here are a few projects I&apos;ve worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center pb-[50px]">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <ProjectCard
                imgPath={projectImages[proj.id] || '/Assets/Projects/blog.png'}
                title={proj.title}
                description={proj.description}
                ghLink={proj.githubUrl}
                demoLink={proj.liveUrl !== '#' ? proj.liveUrl : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
