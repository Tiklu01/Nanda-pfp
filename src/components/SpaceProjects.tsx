import { useState } from 'react';
import { Github, ExternalLink, Play, Pause } from 'lucide-react';

export default function SpaceProjects() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [videoPaused, setVideoPaused] = useState<{ [key: number]: boolean }>({});
  
  const projects = [
    {
      id: 1,
      title: 'Deductly',
      description: 'A RAG based Tax saving Agent designed to save maximum taxes.',
      tags: ['React', 'FastApi', 'MongoDB', 'QuadrantDB', 'LangChain','Langgraph'],
      github: 'https://github.com/Tiklu01/Deductly',
      demo: undefined,
      video: 'https://res.cloudinary.com/dwt633pc6/video/upload/v1753042031/WhatsApp_Video_2025-07-13_at_19.17.25_oaaghu.mp4',
      image: 'https://res.cloudinary.com/dwt633pc6/image/upload/v1753042668/efea7adf-9e52-4d06-8976-1f14c26fc9df.png'
    },
    {
      id: 2,
      title: 'FitCircuit',
      description: 'FitCircuit, an innovative platform, revolutionizes fitness and nutrition with AI-driven personalized workout plans, tailored meal plans, and real-time nutritional insights.',
      tags: ['NextJs', 'TypeScript','Chart.js', 'MongoDB', 'Tailwind CSS', 'Gemini',"Mystral","OpenAI"],
      github: 'https://github.com/Tiklu01/FitCircuit',
      demo: 'https://fitcircuit.onrender.com/',
      video: 'https://res.cloudinary.com/dwt633pc6/video/upload/v1753043906/My_Movie_srxcef.mp4',
      image: 'https://res.cloudinary.com/dwt633pc6/image/upload/v1753044010/Screenshot_2025-02-23_at_1.12.10_PM_ongwxq.png'
    },
    {
      id: 3,
      title: 'Event Planner 360',
      description: 'An event management tool that provides CRUD operations and seamless integration with Stripe payment gateway.',
      tags: ['NextJs', 'Stripe', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/Tiklu01/CBTC',
      demo: 'https://eventplanner360.vercel.app/',
      video: "https://res.cloudinary.com/dwt633pc6/video/upload/v1753045495/1714494833485_rcbxup.mp4",
      image: 'https://res.cloudinary.com/dwt633pc6/image/upload/v1753043193/eventplanner360_urxtgb.png'
    },
    {
      id: 4,
      title: 'TechVerse 3.0',
      description: "Website for GNIT's Annual Technical Fest with Registration and Admin Dashboard capabilities.",
      tags: ['Next.js', 'R3F', 'Three.js', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/Tiklu01/Techverse3.0',
      demo: 'https://techverse-v3.vercel.app',
      video: 'https://res.cloudinary.com/dwt633pc6/video/upload/v1753043254/tv3_qd7pjt.mp4',
      image: 'https://res.cloudinary.com/dwt633pc6/image/upload/v1753045805/69ce8456-4fe3-4675-969b-a974a87271fc.png'
    },
    {
      id: 5,
      title: 'Car Price Regression Model',
      description: 'A custom made Regression model from scratch (gradient descent, normalization) for Learning purposes.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'jiupyter Notebook'],
      github: 'https://github.com/Tiklu01/carPricePredictionLinearRegression',
      demo: undefined,
      video: 'https://res.cloudinary.com/dwt633pc6/video/upload/v1753046368/1723813784909_icvsbk.mp4',
      image: 'https://res.cloudinary.com/dwt633pc6/image/upload/v1753046576/ml_j5kzk7.png'
    },{
      id: 6,
      title: '3D shirt Customizer',
      description: "A 3D shirt customizer made with OpenAI's DALL-E  and Three.js, allowing users to design and visualize custom shirts in real-time.",
      tags: ['R3F', 'Three.js', 'DALL-E', 'javaScript'],
      github: 'https://github.com/Tiklu01/Shirt-Customizer',
      demo: undefined,
      video: 'https://res.cloudinary.com/dwt633pc6/video/upload/v1753045663/1698475698990_j1abbh.mp4',
      image: 'https://res.cloudinary.com/dwt633pc6/image/upload/v1753046793/shirt_nmapst.png'
    }
    
  ];

  const toggleVideo = (projectId: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (playingVideo === projectId) {
      setPlayingVideo(null);
      setVideoPaused(prev => ({ ...prev, [projectId]: true }));
    } else {
      setPlayingVideo(projectId);
      setVideoPaused(prev => ({ ...prev, [projectId]: false }));
    }
  };

  const handleVideoClick = (event: React.MouseEvent) => {
    // Prevent the overlay from showing when clicking on video controls
    event.stopPropagation();
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
                    loop 
                    controls
                    className="w-full h-full object-cover"
                    onClick={handleVideoClick}
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                
                <div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  style={{ 
                    pointerEvents: playingVideo === project.id ? 'none' : 'auto'
                  }}
                >
                  <button 
                    onClick={(e) => toggleVideo(project.id, e)}
                    className="bg-white p-6 border-4 border-black hover:bg-yellow-300 transition-colors transform hover:scale-110"
                  >
                    {playingVideo === project.id && !videoPaused[project.id] ? 
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