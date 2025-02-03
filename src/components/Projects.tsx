import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Emotion-Aware Chatbot',
      description: 'An AI-driven chatbot leveraging RoBERTa for emotion classification and Seq2Seq LSTM for empathetic response generation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'NLP', 'Machine Learning','Pretrained Models'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Ride Easy Taxi Management',
      description: 'A full-stack taxi management system built with Node.js and React, integrating Express.js APIs for optimized communication, improving booking efficiency, and reducing server response times by 25%.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      technologies: ['Node.js', 'React','Express.js', 'MySQL', 'REST APIs', 'JWT Authentication', 'AWS RDS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Construction Accident Severity Predictor',
      description: 'Built a machine learning model using XGBoost, LightGBM, and Random Forest to classify construction accidents, achieving 92% accuracy for proactive risk assessment.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Data Preprocessing', 'Machine Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Online Store Sales Analysis',
      description: 'Built an interactive dashboard processing 500K+ transactions, identifying top-performing regions, customer spending habits, and sales trends, driving 20% better inventory planning and targeted marketing strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['Tableau', 'Data Visualization', 'Data Analytics'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Airbnb Market Trends Analysis',
      description: 'Developed a Tableau dashboard analyzing 10,000+ listings in NYC, uncovering seasonal pricing shifts, occupancy trends, and high-demand neighborhoods, leading to 15% improved revenue predictions for hosts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      technologies: ['Tableau', 'Data Visualization', 'Data Analysis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Machine Utilization Monitoring System',
      description: 'Built a CPU and RAM monitoring system, automating weekly reports and enhancing performance on Windows IIS, reducing manual reporting time by 30%',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', '.Net Core', 'PowerShell'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Team Dashboard',
      description: 'Designed a real-time automation dashboard, cutting data retrieval time by 30 seconds per query. Integrated CI/CD pipelines on AWS, optimizing deployments and boosting efficiency by 20%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['HTML', 'CSS', 'Javascript','Bootstrap','TypeScript','Angular','Node.js','AWS',"Microsoft SQL Server"],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      title: 'Movie Recommendation System',
      description: "Built a hybrid recommendation system with collaborative and content-based filtering, boosting accuracy by 15%. Developed an R-based backend with a Streamlit web app, reducing response time by 30% and optimizing 100K+ movie ratings for personalized suggestions.",
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      technologies: ['Python', 'Streamlit','R', 'Machine Learning'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          <div className="mt-4 text-xl text-gray-600">
            Some of my recent work
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-black-700 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;