
import React from 'react';
import type { Internship, Project } from './types';

export const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export const LINKEDIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const EXTERNAL_LINK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);


export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: GITHUB_ICON },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: LINKEDIN_ICON },
];

export const INTERNSHIPS_DATA: Internship[] = [
  {
    role: 'Frontend Engineer Intern',
    company: 'Innovate Inc.',
    duration: 'May 2023 - Aug 2023',
    logoUrl: 'https://picsum.photos/seed/innovate/40/40',
    description: [
      'Developed and maintained responsive user interfaces for a client-facing dashboard using React and TypeScript.',
      'Collaborated with UX/UI designers to translate Figma mockups into pixel-perfect, interactive components.',
      'Improved application performance by 15% by identifying and refactoring inefficient rendering cycles.',
      'Wrote comprehensive unit tests with Jest and React Testing Library, increasing code coverage by 25%.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Tech Solutions LLC',
    duration: 'May 2022 - Aug 2022',
    logoUrl: 'https://picsum.photos/seed/tech/40/40',
    description: [
      'Contributed to a full-stack web application using the MERN stack (MongoDB, Express, React, Node.js).',
      'Implemented new API endpoints for user data management and integrated them with the frontend.',
      'Participated in agile ceremonies, including daily stand-ups, sprint planning, and retrospectives.',
      'Fixed over 50 bugs and implemented several minor features based on user feedback.',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'AI Story Generator',
    description: 'A web app that uses the Gemini API to generate short stories for children based on user prompts. Features streaming responses for a real-time typing effect.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    imageUrl: 'https://picsum.photos/seed/ai-story/400/250',
    repoUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce site with product listings, a shopping cart, and a checkout process. Built with a focus on component-based architecture.',
    tags: ['React', 'Redux', 'Node.js', 'Stripe API'],
    imageUrl: 'https://picsum.photos/seed/ecommerce/400/250',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js and Recharts. Allows users to filter and explore data in real-time.',
    tags: ['React', 'D3.js', 'Recharts', 'Styled Components'],
    imageUrl: 'https://picsum.photos/seed/dataviz/400/250',
    repoUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A simple and intuitive task management application with drag-and-drop functionality to organize tasks into different statuses.',
    tags: ['Svelte', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/task-app/400/250',
    repoUrl: 'https://github.com',
  },
];
