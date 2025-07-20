import { useState } from 'react';
import { Github, ExternalLink, Play, Pause } from 'lucide-react';

export default function SpaceProjects() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: 'Deductly',
      description: 'A RAG based Tax saving Agent designed to save maximum taxes.',
      tags: ['React', 'FastApi', 'MongoDB', 'QuadrantDB', 'LangChain','Langgraph'],
      github: 'https://github.com/johndoe/galactic-ecommerce',
      demo: undefined,
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Mission Control Dashboard',
      description: 'Real-time project management tool with collaborative features and analytics.',
      tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/johndoe/mission-control',
      demo: 'https://mission-control.space',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Cosmic Weather Station',
      description: 'Beautiful weather application with data visualization and forecasting.',
      tags: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com/johndoe/cosmic-weather',
      demo: 'https://cosmic-weather.space',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Social Analytics Platform',
      description: 'Analytics dashboard for social media performance tracking and insights.',
      tags: ['Next.js', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com/johndoe/social-analytics',
      demo: 'https://analytics-demo.space',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const toggleVideo = (projectId: number) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100 to-pink-100 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-20 left-10 animate-orbit">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="#ff6b6b" stroke="#000" strokeWidth="3"/>
          <circle cx="25" cy="25" r="4" fill="#000"/>
          <circle cx="35" cy="25" r="4" fill="#000"/>
          <path d="M 20 35 Q 30 45 40 35" stroke="#000" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="absolute bottom-20 right-20 animate-drift">
        <svg width="80" height="50" viewBox="0 0 80 50">
          <ellipse cx="40" cy="25" rx="35" ry="12" fill="#4ecdc4" stroke="#000" strokeWidth="3"/>
          <circle cx="25" cy="28" r="3" fill="#ffff00" className="animate-pulse"/>
          <circle cx="40" cy="30" r="3" fill="#ffff00" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <circle cx="55" cy="28" r="3" fill="#ffff00" className="animate-pulse" style={{animationDelay: '1s'}}/>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-funky text-7xl text-black mb-8 transform -rotate-1 text-shadow-fun">
            SPACE MISSIONS
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-bold">
            Epic projects from across the digital universe!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-white border-4 border-black shadow-xl hover-lift transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
            >
              <div className="relative aspect-video bg-gray-900 overflow-hidden border-b-4 border-black">
                {playingVideo === project.id ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => toggleVideo(project.id)}
                    className="bg-white p-6 border-4 border-black hover:bg-yellow-300 transition-colors transform hover:scale-110"
                  >
                    {playingVideo === project.id ? 
                      <Pause className="w-8 h-8 text-black" /> : 
                      <Play className="w-8 h-8 text-black" />
                    }
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-funky text-3xl text-black mb-4 transform -rotate-1">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag} 
                      className={`px-4 py-2 border-3 border-black font-black text-sm uppercase tracking-wider transform hover:scale-110 transition-transform ${
                        tagIndex % 4 === 0 ? 'bg-yellow-300' :
                        tagIndex % 4 === 1 ? 'bg-pink-300' :
                        tagIndex % 4 === 2 ? 'bg-blue-300' : 'bg-green-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black text-white font-black uppercase tracking-wider hover:bg-gray-800 transition-all transform hover:scale-105 hover:rotate-2 border-4 border-black"
                  >
                    <Github className="w-5 h-5" />
                    CODE
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-yellow-300 text-black font-black uppercase tracking-wider hover:bg-yellow-400 transition-all transform hover:scale-105 hover:-rotate-2 border-4 border-black"
                    >
                      <ExternalLink className="w-5 h-5" />
                      DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}