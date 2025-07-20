"use client"

export default function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        {
          name: "React",
          color: "from-cyan-400 to-blue-500",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "TypeScript",
          color: "from-blue-400 to-blue-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Next.js",
          color: "from-green-400 to-green-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          color: "from-teal-400 to-cyan-500",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          name: "Node.js",
          color: "from-green-400 to-green-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          color: "from-gray-400 to-gray-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "FastAPI",
          color: "from-green-400 to-teal-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "PostgreSQL",
          color: "from-blue-400 to-indigo-500",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          color: "from-green-400 to-green-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      technologies: [
        {
          name: "Docker",
          color: "from-blue-400 to-blue-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
       {
          name: "Kubernetes",
          color: "from-blue-400 to-purple-500",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        }
      ],
    },
    {
      title: "Tools & Others",
      technologies: [
        {
          name: "Git",
          color: "from-red-400 to-red-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
         {
          name: "GitHub",
          color: "from-gray-400 to-gray-600",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Postman",
          color: "from-orange-400 to-orange-600",
          image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">{category.title}</h3>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 cursor-pointer animate-float animate-bounce-slow"
                    style={{
                      animationDelay: `${categoryIndex * 300 + techIndex * 150}ms`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-slow">
                        <img
                          src={tech.image || "/placeholder.svg"}
                          alt={`${tech.name} icon`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Prevent infinite loop by only setting fallback once
                            if (!e.currentTarget.dataset.fallback) {
                              e.currentTarget.dataset.fallback = 'true';
                              e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="32" height="32" fill="#6366f1"/>
                                  <text x="16" y="20" font-family="Arial" font-size="16" fill="white" text-anchor="middle">${tech.name.charAt(0)}</text>
                                </svg>
                              `)}`;
                            }
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                          {tech.name}
                        </h4>
                      </div>
                    </div>

                    {/* Animated gradient border */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-all duration-300 animate-gradient-shift`}
                    ></div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                      <div
                        className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute top-1/2 right-4 w-1 h-1 bg-green-400 rounded-full animate-ping"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced animated background elements */}
        <div className="relative mt-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-0 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/6 w-2 h-2 bg-red-400 rounded-full animate-ping"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
              style={{ animationDelay: "2.5s" }}
            ></div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s ease infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  )
}
