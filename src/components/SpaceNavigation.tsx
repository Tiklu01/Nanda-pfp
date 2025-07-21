"use client"

import { useState } from "react"

interface SpaceNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function SpaceNavigation({ activeSection, onSectionChange }: SpaceNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT ME" },
    { id: "projects", label: "PROJECTS" },
    { id: "timeline", label: "TIMELINE" },
    { id: "tech", label: "TECH STACK" },
    { id: "contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Floating UFO Navigation */}
      <div className="fixed top-4 md:top-8 left-2 md:left-4 z-50">
        <div className="relative">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="group relative">
            {/* UFO Body */}
            <div className="relative animate-float">
              <svg
                width="50"
                height="35"
                viewBox="0 0 60 40"
                className="md:w-[70px] md:h-[45px]"
                style={{ filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.3))" }}
              >
                {/* UFO Shadow */}
                <ellipse cx="30" cy="35" rx="25" ry="3" fill="#000" opacity="0.2" />

                {/* UFO Base */}
                <ellipse
                  cx="30"
                  cy="25"
                  rx="25"
                  ry="6"
                  fill="#4ecdc4"
                  stroke="#000"
                  strokeWidth="2"
                  className="blob-1"
                />

                {/* UFO Top */}
                <ellipse
                  cx="30"
                  cy="18"
                  rx="15"
                  ry="8"
                  fill="#ff6b6b"
                  stroke="#000"
                  strokeWidth="2"
                  className="blob-2"
                />

                {/* UFO Dome */}
                <ellipse
                  cx="30"
                  cy="15"
                  rx="10"
                  ry="6"
                  fill="#ffff00"
                  stroke="#000"
                  strokeWidth="1.5"
                  className="blob-3"
                />

                {/* Lights */}
                <circle cx="18" cy="27" r="2" fill="#ffff00" className="animate-pulse-slow" />
                <circle
                  cx="30"
                  cy="29"
                  r="2"
                  fill="#ffff00"
                  className="animate-pulse-slow"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle
                  cx="42"
                  cy="27"
                  r="2"
                  fill="#ffff00"
                  className="animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                />

                {/* Beam */}
                <polygon points="22,31 38,31 35,40 25,40" fill="#ffff00" opacity="0.3" className="animate-pulse-slow" />
              </svg>
            </div>
          </button>

          {/* Navigation Menu */}
          {isMenuOpen && (
            <div
              className="absolute top-10 md:top-14 left-0 bg-white border-4 border-black p-4 md:p-6 min-w-[180px] md:min-w-[200px] transform rotate-1 blob-4 animate-wiggle"
              style={{ boxShadow: "6px 6px 0px rgba(255,107,107,0.4), 12px 12px 0px rgba(255,255,0,0.2)" }}
            >
              <div className="space-y-2 md:space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id)
                      setIsMenuOpen(false)
                    }}
                    className={`block w-full text-left text-sm md:text-lg hover:bg-black hover:text-white px-2 md:px-3 py-1 md:py-2 transition-all transform hover:rotate-1 hover:scale-105 ${
                      activeSection === item.id ? "bg-black text-white" : "text-black hover:bg-gray-800"
                    }`}
                    style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Top Navigation Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b-4 border-black"
        style={{ boxShadow: "0 4px 0px rgba(76,236,196,0.3), 0 8px 0px rgba(255,107,107,0.2)" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div
              className="font-funky text-xl md:text-3xl text-black transform -rotate-2"
              style={{ textShadow: "2px 2px 0px #4ecdc4", fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif' }}
            >
              <span>PORTFOLIO</span>
            </div>

            <div className="hidden lg:flex items-center space-x-6 md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`text-sm md:text-lg hover:transform hover:rotate-2 hover:scale-110 transition-all duration-200 ${
                    activeSection === item.id ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                  style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        .font-funky {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-weight: 900 !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .text-shadow-fun {
          text-shadow: 2px 2px 0px #ff6b6b, 4px 4px 0px rgba(255,107,107,0.3);
          font-weight: 900 !important;
        }
        .blob-1 {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
        .blob-2 {
          border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        }
        .blob-3 {
          border-radius: 40% 60% 60% 40% / 60% 30% 60% 40%;
        }
        .blob-4 {
          border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(1deg); }
          50% { transform: rotate(-1deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes blob {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
        @keyframes blob-reverse {
          0% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          100% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }
        @keyframes blob-alt {
          0% {
            border-radius: 40% 60% 60% 40% / 60% 30% 60% 40%;
          }
          50% {
            border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%;
          }
          100% {
            border-radius: 40% 60% 60% 40% / 60% 30% 60% 40%;
          }
        }

        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .blob-1 { animation: blob 6s ease-in-out infinite; }
        .blob-2 { animation: blob-reverse 7s ease-in-out infinite; }
        .blob-3 { animation: blob-alt 5s ease-in-out infinite; }
        .blob-4 { animation: blob 8s ease-in-out infinite; }
      `}</style>
    </>
  )
}
