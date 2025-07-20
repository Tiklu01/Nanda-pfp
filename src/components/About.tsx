import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Code, title: 'Development', description: 'Full-stack development with modern frameworks' },
    { icon: Palette, title: 'Design', description: 'UI/UX design and visual aesthetics' },
    { icon: Lightbulb, title: 'Innovation', description: 'Creative problem-solving and ideation' },
    { icon: Users, title: 'Collaboration', description: 'Team leadership and project management' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with a keen eye for design, dedicated to creating 
            exceptional digital experiences that make a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 5 years of experience in web development, I've worked with startups 
              and established companies to bring innovative ideas to life. My passion lies 
              in the intersection of design and technology, creating solutions that are both 
              beautiful and functional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest 
              technologies and design trends. Every project is an opportunity to push 
              boundaries and create something extraordinary.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white text-2xl font-bold">👨‍💻</span>
                </div>
                <p className="text-gray-700 font-medium">Crafting Digital Experiences</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}