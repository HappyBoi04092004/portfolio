'use client';

import React from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import { portfolioConfig } from '@/config/portfolio';
import { AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function HomePage() {
  return (
    <section>
      {/* Home Main Section */}
      <div className="home-section" id="home">
        <div className="section-shell home-content">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="col-span-12 md:col-span-7 home-header text-left">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> {portfolioConfig.owner.name.toUpperCase()}</strong>
              </h1>

              <div style={{ padding: '50px 0', textAlign: 'left' }} className="min-h-[160px]">
                <Typewriter
                  options={{
                    strings: portfolioConfig.owner.roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: 'Typewriter__wrapper',
                    cursorClassName: 'Typewriter__cursor',
                  }}
                />
              </div>
            </div>

            {/* Right Illustration */}
            <div className="col-span-12 md:col-span-5 flex justify-center" style={{ paddingBottom: 20 }}>
              <div className="relative w-full max-w-[450px] aspect-square select-none">
                <Image
                  src="/Assets/home-main.svg"
                  alt="home pic"
                  fill
                  className="object-contain img-fluid animate-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home2 (Introduce Myself) Section */}
      <div className="home-about-section" id="about">
        <div className="section-shell">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Biography Description */}
            <div className="col-span-12 md:col-span-8 home-about-description text-left">
              <h1 style={{ fontSize: '2.6em' }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <div className="home-about-body text-slate-200">
                <p>
                  I’m a Software Engineer who loves transforming ideas into
                  reliable, scalable products. Over time, I’ve explored several
                  technologies and found my passion in building high-performance
                  systems and intuitive user experiences.
                  <br />
                  <br />
                  I’m proficient in
                  <i>
                    <b className="purple"> Go (Golang), Node.js, TypeScript, and Flutter (Dart) </b>
                  </i>
                  — and I enjoy working across both backend and frontend stacks.
                  <br />
                  <br />
                  My key areas of interest include developing&nbsp;
                  <i>
                    <b className="purple">Web & Mobile Technologies and Products </b> and
                    also in areas related to{' '}
                    <b className="purple">
                      High-Performance Backend Microservices & Cloud Infrastructure.
                    </b>
                  </i>
                  <br />
                  <br />
                  Whenever possible, I also apply my passion for developing products
                  with <b className="purple">Go</b> and
                  <i>
                    <b className="purple">
                      {' '}
                      modern backend frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="purple"> NestJS</b>
                  </i>
                  &nbsp; and mobile frameworks like
                  <i>
                    <b className="purple"> Flutter</b>
                  </i>.
                </p>
              </div>
            </div>

            {/* Avatar Tilted */}
            <div className="col-span-12 md:col-span-4 flex justify-center myAvtar">
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1500}
              >
                <div className="relative w-[250px] h-[250px] select-none">
                  <Image
                    src="/Assets/avatar.svg"
                    alt="avatar"
                    fill
                    className="object-contain img-fluid animate-float"
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="section-shell">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="col-span-12 home-about-social text-center" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
            <h1 className="text-3xl font-bold">FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links flex justify-center gap-4 mt-4 p-0">
              <li className="social-icons">
                <a
                  href={portfolioConfig.owner.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={portfolioConfig.owner.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={portfolioConfig.owner.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`mailto:${portfolioConfig.owner.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons flex items-center justify-center"
                  aria-label="Email"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
