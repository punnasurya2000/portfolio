import React from 'react';
import { FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Resume</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download my resume to learn more about my experience and skills
          </p>
          <a
            href="/portfolio/Surya_sde_resume.pdf" // Replace with your actual resume URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileText className="w-5 h-5 mr-2" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;