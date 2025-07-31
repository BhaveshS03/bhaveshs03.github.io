
import React from 'react';
import { SOCIAL_LINKS } from './constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="text-center py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <img
          src="https://picsum.photos/seed/profile/128/128"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-slate-800"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hi, I'm John Doe
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium">
          Senior Frontend Engineer & UI/UX Enthusiast
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          I specialize in building exceptional digital experiences with React and modern web technologies. Passionate about clean code, intuitive design, and creating impactful applications.
        </p>
        <div className="mt-8 flex justify-center items-center space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
