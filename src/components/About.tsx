import React from 'react';
import { Code2, Palette, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <div className="mt-4 text-xl text-gray-600">
           
  <p>
    A highly skilled and versatile professional with expertise spanning 
    <strong> Web Development</strong>, <strong>Programming</strong>, <strong>Databases</strong>, and 
    <strong> AI & Machine Learning</strong>. Proficient in building robust web applications using modern frameworks like 
    <strong> React</strong>, <strong>Angular</strong>, and <strong>Node.js</strong>, with strong experience in backend technologies such as 
    <strong> Express</strong>, <strong>Django</strong>, and <strong>FastAPI</strong>. Adept in handling databases, including 
    <strong> MySQL</strong>, <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>, and leveraging cloud platforms like 
    <strong> AWS</strong> and <strong>Azure</strong> for scalable solutions.
  </p>
  <p>
    Specialized in <strong>AI/ML</strong> with a deep understanding of frameworks like <strong>TensorFlow</strong>, 
    <strong> PyTorch</strong>, and <strong>Scikit-learn</strong>, alongside advanced data analysis and visualization tools such as 
    <strong> Tableau</strong>, <strong>Power BI</strong>, and <strong>Excel</strong>. Passionate about creating innovative solutions 
    through a blend of <strong>machine learning</strong>, <strong>feature engineering</strong>, and cutting-edge technologies.
  </p>
  <p>
    Seeking opportunities to leverage my diverse technical expertise and analytical skills in delivering impactful solutions.
  </p>


          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
            <p className="text-gray-600">
            Expert in developing scalable, efficient applications with a strong command of frontend technologies (React, Angular, Tailwind CSS) and backend frameworks (Node.js, Django, FastAPI). Proficient in building seamless integrations between client-side and server-side systems while delivering optimal performance.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AWS Cloud Solution Architect</h3>
            <p className="text-gray-600">
            Experienced in designing and implementing cloud-native solutions on AWS, focusing on scalability, reliability, and cost-efficiency. Skilled in using AWS services such as EC2, S3, Lambda, RDS, and CloudFormation to build secure and optimized cloud infrastructures. Adept at integrating DevOps practices like CI/CD and containerization using Docker and Kubernetes.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Machine Learning & AI Expert</h3>
            <p className="text-gray-600">
            Proficient in data analysis, machine learning, and AI technologies, leveraging tools like Pandas, TensorFlow, PyTorch, and Scikit-learn to derive actionable insights and build predictive models. Skilled in working with large datasets, performing feature engineering, and applying NLP techniques for text mining. Experienced in visualization tools like Tableau, Power BI, and Matplotlib to present data-driven solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;