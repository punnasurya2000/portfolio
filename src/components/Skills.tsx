import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Web Development', items: ['Html','CSS','Javascript','Jquery','React', 'TypeScript','Node.js', 'Express','Bootstrap', 'Tailwind CSS', 'Angular','Postman','Nodejs','Django',"Flask","FastAPI"] },
    { category: 'Programming & Databases', items: [ 'Python','C#','java','C++','R','Mysql','Oracle','Microsoft SQLServer','PostgreSQL', 'MongoDB','DynamoDB'] },
    { category: 'Tools & Frameworks', items: ['Git', 'Docker', 'AWS', 'CI/CD','Kubernetes','Microsoft Azure','DotNET Framework','DotNET Core'] },
    { category: 'AI & Machine Learning', items: ['Pandas','TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'NLTK', 'OpenCV','Generative AI','NLP','LLMs','Recommender Systems','Machine learning','Feature Engineering'] },
    { category: 'Data Analysis & Visualizations', items: ['Matplotlib','Tableau','PowerBI','Seaborn','Plotly', 'SAS','Excel'] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
          <div className="mt-4 text-xl text-gray-600">
            Technologies and tools I work with
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;