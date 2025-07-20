import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      year: '2023',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      description: 'Leading development of enterprise-level applications and mentoring junior developers.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'work'
    },
    {
      year: '2022',
      title: 'AWS Solutions Architect Certification',
      company: 'Amazon Web Services',
      location: 'Remote',
      description: 'Achieved AWS Solutions Architect Associate certification, enhancing cloud expertise.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'achievement'
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      description: 'Built scalable web applications from scratch, handling both frontend and backend development.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'work'
    },
    {
      year: '2020',
      title: 'React.js Specialist',
      company: 'Digital Agency Pro',
      location: 'Los Angeles, CA',
      description: 'Specialized in React.js development, creating modern and responsive user interfaces.',
      image: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'work'
    },
    {
      year: '2019',
      title: 'Computer Science Graduate',
      company: 'University of California',
      location: 'Berkeley, CA',
      description: 'Graduated with honors, specializing in software engineering and web technologies.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'education'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return <Award className="w-5 h-5" />;
      case 'education':
        return <Calendar className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'from-yellow-400 to-orange-500';
      case 'education':
        return 'from-green-400 to-blue-500';
      default:
        return 'from-blue-400 to-purple-500';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional growth and key achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${getColor(event.type)} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-2 bg-gradient-to-r ${getColor(event.type)} rounded-full text-white`}>
                        {getIcon(event.type)}
                      </div>
                      <span className="text-sm font-medium text-gray-500">{event.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{event.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{event.location}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Image */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}