'use client';

import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { portfolioConfig } from '@/config/portfolio';

export default function ResumePage() {
  const resumePdf = '/resume.pdf';

  return (
    <div className="resume-section min-h-screen">
      <div className="section-shell">
        {/* Top Download Button */}
        <div className="flex justify-center pb-8">
          <a
            href={resumePdf}
            download="Resume_NguyenHanhPhuc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary max-w-[250px] shadow-[0_4px_15px_rgba(98,54,134,0.4)]"
          >
            <AiOutlineDownload size={20} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Timeline (Experience & Education/Certificates) + PDF Preview Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start py-8 resume">
          {/* Timeline columns on the left */}
          <div className="col-span-12 lg:col-span-6 space-y-8 text-left">
            <div>
              <h2 className="resume-title text-2xl font-bold text-white mb-6">Experience</h2>
              <div className="space-y-6">
                {portfolioConfig.experience.map((exp) => (
                  <div key={exp.id} className="resume-item pl-6 border-l-2 border-[#8a49a8] relative">
                    <div className="resume-item-dot absolute w-4 h-4 rounded-full bg-white border-2 border-[#8a49a8] left-[-9px] top-0" />
                    <h3 className="resume-title text-sm font-semibold text-white bg-[#5234795d] px-4 py-2 inline-block rounded mb-2">
                      {exp.role} @ {exp.company}
                    </h3>
                    <p className="text-xs font-semibold text-[#c770f0] mb-3">{exp.period} | {exp.location}</p>
                    <ul className="list-disc pl-4 text-sm text-slate-300 space-y-1.5 text-justify">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="resume-title text-2xl font-bold text-white mb-6">Certificates</h2>
              <div className="space-y-6">
                {portfolioConfig.certificates.map((cert) => (
                  <div key={cert.id} className="resume-item pl-6 border-l-2 border-[#8a49a8] relative">
                    <div className="resume-item-dot absolute w-4 h-4 rounded-full bg-white border-2 border-[#8a49a8] left-[-9px] top-0" />
                    <h3 className="resume-title text-sm font-semibold text-white bg-[#5234795d] px-4 py-2 inline-block rounded mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#c770f0] mb-2">{cert.date} | {cert.issuer}</p>
                    <p className="text-xs text-slate-300">ID: {cert.credentialId}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive PDF Preview on the right */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center">
            <h2 className="resume-title text-2xl font-bold text-white mb-6 w-full text-left">Document Preview</h2>
            <div className="w-full h-[650px] border border-[rgba(197,115,230,0.25)] rounded-xl bg-[rgba(20,13,38,0.55)] p-2 backdrop-blur-md shadow-2xl">
              <iframe
                src={`${resumePdf}#toolbar=0`}
                className="w-full h-full rounded-lg border-none"
                title="Resume PDF Preview"
              />
            </div>
          </div>
        </div>

        {/* Bottom Download Button */}
        <div className="flex justify-center pt-8 pb-12">
          <a
            href={resumePdf}
            download="Resume_NguyenHanhPhuc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary max-w-[250px] shadow-[0_4px_15px_rgba(98,54,134,0.4)]"
          >
            <AiOutlineDownload size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}
