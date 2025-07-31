
import React from 'react';
import Card from './Card';
import { PROJECTS_DATA, GITHUB_ICON, EXTERNAL_LINK_ICON } from './constants';
import type { Project } from './types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="flex flex-col h-full group">
    <div className="relative">
      <img src={project.imageUrl} alt={project.title} className="rounded-lg w-full h-48 object-cover mb-4" />
      <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-end space-x-4">
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          {GITHUB_ICON}
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
          {EXTERNAL_LINK_ICON}
        </a>
      )}
    </div>
  </Card>
);


const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
