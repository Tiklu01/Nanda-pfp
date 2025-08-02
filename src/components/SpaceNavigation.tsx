"use client"

import { useState, useEffect } from "react"

interface SpaceNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function SpaceNavigation({ activeSection, onSectionChange }: SpaceNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

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
      {/* Floating UFO Navigation (Mobile Only) */}
      <div className="fixed top-20 md:top-8 right-2 md:left-4 z-50 lg:hidden">
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
                <ellipse cx="30" cy="35" rx="25" ry="3" fill="#000" opacity="0.2" />
                <ellipse cx="30" cy="25" rx="25" ry="6" fill="#4ecdc4" stroke="#000" strokeWidth="2" className="blob-1 dark:fill-cyan-400" />
                <ellipse cx="30" cy="18" rx="15" ry="8" fill="#ff6b6b" stroke="#000" strokeWidth="2" className="blob-2 dark:fill-pink-400" />
                <ellipse cx="30" cy="15" rx="10" ry="6" fill="#ffff00" stroke="#000" strokeWidth="1.5" className="blob-3 dark:fill-yellow-300" />
                <circle cx="18" cy="27" r="2" fill="#ffff00" className="animate-pulse-slow" />
                <circle cx="30" cy="29" r="2" fill="#ffff00" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
                <circle cx="42" cy="27" r="2" fill="#ffff00" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
                <polygon points="22,31 38,31 35,40 25,40" fill="#ffff00" opacity="0.3" className="animate-pulse-slow" />
              </svg>
            </div>
          </button>

          {/* Navigation Menu */}
          {isMenuOpen && (
            <div
              className="absolute top-10 md:top-14 left-1/2 md:left-0 -translate-x-full md:translate-x-0 bg-white dark:bg-gray-800 border-4 border-black dark:border-white p-4 md:p-6 min-w-[180px] md:min-w-[200px] transform rotate-1 blob-4 animate-wiggle"
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
                    className={`block w-full text-left text-sm md:text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-2 md:px-3 py-1 md:py-2 transition-all transform hover:rotate-1 hover:scale-105 ${
                      activeSection === item.id 
                        ? "bg-black text-white dark:bg-white dark:text-black" 
                        : "text-black dark:text-white hover:bg-gray-800 dark:hover:bg-gray-200"
                    }`}
                    style={{ fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif' }}
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
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b-4 border-black dark:border-white"
        style={{ boxShadow: "0 4px 0px rgba(76,236,196,0.3), 0 8px 0px rgba(255,107,107,0.2)" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20 w-full">
            {/* Portfolio text - Leftmost end */}
            <div
              className="font-funky text-xl md:text-3xl text-black dark:text-white transform -rotate-2"
              style={{ textShadow: "2px 2px 0px #4ecdc4", fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif' }}
            >
              <span>PORTFOLIO</span>
            </div>

            {/* Navigation and toggle - Rightmost end */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-6 md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`text-sm md:text-lg hover:transform hover:rotate-2 hover:scale-110 transition-all duration-200 cursor-pointer ${
                    activeSection === item.id 
                      ? "text-black dark:text-white" 
                      : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  }`}
                  style={{ fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative w-12 h-12 md:w-16 md:h-16 bg-yellow-300 dark:bg-purple-600 border-4 border-black dark:border-white transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-300 shadow-xl"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {isDarkMode ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-yellow-300">
                      <circle cx="12" cy="12" r="5" fill="currentColor"/>
                      <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                      <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
                      <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-purple-800">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>      {/* Custom styles */}
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
