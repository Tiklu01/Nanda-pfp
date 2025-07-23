"use client"

export default function SpaceTechStack() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        {
          name: "React",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Three.Js",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
        },
        {
          name: "Next.js",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          name: "Node.js",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "FastAPI",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Express",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
         {
          name: "Next.js",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      ],
    },
    {
      title: "Languages",
      technologies: [
        {
          name: "JavaScript",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "C++",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Java",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
    },
    {
      title: "Database",
      technologies: [
        {
          name: "PostgreSQL",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        {
          name: "Docker",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        }
      ],
    },
    {
      title: "Tools & Others",
      technologies: [
        {
          name: "Git",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Postman",
          image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute top-20 right-20 animate-orbit">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <polygon points="30,5 35,20 50,20 38,30 43,45 30,37 17,45 22,30 10,20 25,20" fill="#ffff00" stroke="#000" strokeWidth="3"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 animate-drift">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="#ff6b6b" stroke="#000" strokeWidth="3"/>
          <circle cx="20" cy="20" r="3" fill="#000"/>
          <circle cx="30" cy="20" r="3" fill="#000"/>
          <path d="M 15 30 Q 25 40 35 30" stroke="#000" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-funky text-4xl md:text-7xl text-black mb-8 transform -rotate-1 text-shadow-fun" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
            TECH ARSENAL
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-bold">
            My cosmic toolkit for building digital universes!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white border-4 border-black p-6 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <h3 className="font-funky text-xl md:text-2xl text-black text-center mb-6 pb-4 border-b-2 border-black" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group flex flex-col items-center p-4 bg-gray-50 border-2 border-gray-200 hover:border-black hover:bg-white transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={tech.image || "/placeholder.svg"}
                        alt={`${tech.name} icon`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          if (!e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = 'true';
                            e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="#6366f1" rx="8"/>
                                <text x="24" y="30" font-family="Arial" font-size="20" fill="white" text-anchor="middle" font-weight="bold">${tech.name.charAt(0)}</text>
                              </svg>
                            `)}`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-800 text-center group-hover:text-black transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .font-funky {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-weight: 900 !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .text-shadow-fun {
          text-shadow: 3px 3px 0px #000;
          font-weight: 900 !important;
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(-10px); }
          50% { transform: translateX(-15px) translateY(-20px); }
          75% { transform: translateX(10px) translateY(-5px); }
        }
        
        .animate-orbit {
          animation: orbit 25s linear infinite;
        }
        .animate-drift {
          animation: drift 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}