
import React from 'react';
import Card from './Card';
import { INTERNSHIPS_DATA } from './constants';
import type { Internship } from './types';

const InternshipCard: React.FC<{ internship: Internship }> = ({ internship }) => (
  <Card className="mb-8 flex flex-col sm:flex-row items-start gap-6">
    <img src={internship.logoUrl} alt={`${internship.company} logo`} className="w-12 h-12 rounded-lg object-cover" />
    <div className="flex-1">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{internship.role}</h3>
      <p className="font-semibold text-blue-600 dark:text-blue-400">{internship.company}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{internship.duration}</p>
      <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
        {internship.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </Card>
);

const InternshipsSection: React.FC = () => {
  return (
    <section id="internships" className="py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
        Internship Experience
      </h2>
      <div className="max-w-4xl mx-auto">
        {INTERNSHIPS_DATA.map((internship, index) => (
          <InternshipCard key={index} internship={internship} />
        ))}
      </div>
    </section>
  );
};

export default InternshipsSection;
