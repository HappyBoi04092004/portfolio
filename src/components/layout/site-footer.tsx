'use client';

import React from 'react';
import { portfolioConfig } from '@/config/portfolio';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function SiteFooter() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer relative z-10 w-full pointer-events-auto border-t border-[rgba(197,115,230,0.2)]">
      <div className="section-shell">
        <div className="grid md:grid-cols-3 items-center gap-4 py-3">
          {/* Developed By */}
          <div className="footer-copywright text-center md:text-left">
            <h3 className="text-white text-base">
              Designed and Developed by {portfolioConfig.owner.name}
            </h3>
          </div>

          {/* Copyright */}
          <div className="footer-copywright text-center">
            <h3 className="text-white text-base">
              Copyright © {year} HP
            </h3>
          </div>

          {/* Social Icons */}
          <div className="footer-body text-center md:text-right">
            <ul className="footer-icons flex justify-center md:justify-end gap-4 m-0 p-0">
              <li className="social-icons inline-block">
                <a
                  href={portfolioConfig.owner.github}
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c770f0] transition-colors"
                  aria-label="GitHub"
                >
                  <AiFillGithub size={20} />
                </a>
              </li>
              <li className="social-icons inline-block">
                <a
                  href={portfolioConfig.owner.facebook}
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c770f0] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
              </li>
              <li className="social-icons inline-block">
                <a
                  href={portfolioConfig.owner.linkedin}
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c770f0] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </li>
              <li className="social-icons inline-block">
                <a
                  href={`mailto:${portfolioConfig.owner.email}`}
                  style={{ color: 'white' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c770f0] transition-colors"
                  aria-label="Email"
                >
                  <AiFillMail size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
