"use client"

export default function SpaceAbout() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
      {/* Floating elements with better mobile positioning */}
      <div className="absolute top-10 md:top-20 right-4 md:right-20 animate-wiggle">
        <svg width="50" height="50" viewBox="0 0 60 60" className="drop-shadow-lg md:w-[60px] md:h-[60px]">
          <circle cx="30" cy="30" r="25" fill="#ff69b4" stroke="#000" strokeWidth="3" className="blob-1" />
          <circle cx="22" cy="22" r="6" fill="#000" />
          <circle cx="38" cy="22" r="6" fill="#000" />
          <circle cx="22" cy="20" r="2" fill="#fff" />
          <circle cx="38" cy="20" r="2" fill="#fff" />
          <path d="M 18 38 Q 30 50 42 38" stroke="#000" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-10 md:bottom-20 left-4 md:left-20 animate-drift">
        <svg width="30" height="30" viewBox="0 0 40 40" className="md:w-[40px] md:h-[40px]">
          <polygon
            points="20,3 23,15 35,15 26,22 29,34 20,27 11,34 14,22 5,15 17,15"
            fill="#ffff00"
            stroke="#000"
            strokeWidth="2"
            className="blob-2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-funky text-4xl md:text-7xl text-black mb-6 md:mb-8 transform -rotate-2 text-shadow-fun" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
              ABOUT THE
              <br />
              <span className="transform rotate-1 inline-block">EXPLORER</span>
            </h2>
            <div className="bg-white border-4 border-black p-6 md:p-8 mb-6 md:mb-8 transform rotate-1 hover:rotate-0 transition-transform shadow-xl blob-3 animate-float-gentle">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-bold">
               I&apos;m a full-stack developer who loves building simple, user-friendly web apps. I won the MSME Hackathon 4.0 for creative tech solutions. Beyond code, I enjoy music, gaming, and picking up new skills just for fun.
              </p>
            </div>
            <div className="bg-white border-4 border-black p-6 md:p-8 mb-6 md:mb-8 transform -rotate-1 hover:rotate-0 transition-transform shadow-xl blob-4 animate-float-gentle-delay">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-bold">
                My mission is to bridge the gap between design and technology, creating solutions that are both
                beautiful and functional. Every project is an opportunity to explore new territories in the digital
                cosmos!
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {["NextJs", "TypeScript", "Node.js", "Python", "FastApi", "Docker"].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 md:px-6 py-2 md:py-3 border-4 border-black font-black text-sm md:text-lg uppercase tracking-wider transform hover:scale-110 transition-all blob-${(index % 4) + 1} animate-jiggle tech-bounce-${(index % 3) + 1} ${
                    index % 4 === 0
                      ? "bg-yellow-300 rotate-2"
                      : index % 4 === 1
                        ? "bg-pink-300 -rotate-1"
                        : index % 4 === 2
                          ? "bg-blue-300 rotate-1"
                          : "bg-green-300 -rotate-2"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* White oval container with your image inside */}
            <div className="relative w-full max-w-xs md:max-w-sm mx-auto">
              <div className="bg-white border-4 border-black p-4 md:p-6 transform rotate-2 hover:rotate-0 transition-transform shadow-xl animate-wiggle-gentle oval-container">
                <div className="relative overflow-hidden oval-image">
                  <img
                    src="https://res.cloudinary.com/dwt633pc6/image/upload/v1753080603/Nanda_h3wkqc.png"
                    alt="Nanda Lal Das - Space Explorer Developer"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Fun floating space elements around the oval */}
              <div className="absolute -top-4 -right-4 animate-spin-slow">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <polygon
                    points="14,2 16,11 25,11 18,16 20,25 14,21 8,25 10,16 3,11 12,11"
                    fill="#ffff00"
                    stroke="#000"
                    strokeWidth="2"
                    className="blob-1 drop-shadow-lg"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="#4ecdc4"
                    stroke="#000"
                    strokeWidth="2"
                    className="blob-2 drop-shadow-lg"
                  />
                </svg>
              </div>

              <div className="absolute top-1/2 -left-6 animate-wiggle">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <rect
                    x="6"
                    y="6"
                    width="10"
                    height="10"
                    fill="#ff6b6b"
                    stroke="#000"
                    strokeWidth="2"
                    transform="rotate(45 11 11)"
                    className="blob-3 drop-shadow-lg"
                  />
                </svg>
              </div>

              <div className="absolute top-1/4 -right-6 animate-pulse">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <polygon
                    points="10,2 11,8 17,8 12,12 13,18 10,15 7,18 8,12 3,8 9,8"
                    fill="#ff69b4"
                    stroke="#000"
                    strokeWidth="2"
                    className="blob-4 drop-shadow-lg"
                  />
                </svg>
              </div>

              <div className="absolute bottom-1/4 -right-8 animate-drift">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    fill="#90EE90"
                    stroke="#000"
                    strokeWidth="2"
                    className="blob-1 drop-shadow-lg"
                  />
                </svg>
              </div>

              <div className="absolute top-8 -left-8 animate-jiggle">
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <polygon
                    points="8,1 9,6 14,6 10,9 11,14 8,12 5,14 6,9 2,6 7,6"
                    fill="#FFB6C1"
                    stroke="#000"
                    strokeWidth="2"
                    className="blob-2 drop-shadow-lg"
                  />
                </svg>
              </div>

              <div className="absolute bottom-8 right-4 animate-bounce">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <circle
                    cx="7"
                    cy="7"
                    r="5"
                    fill="#DDA0DD"
                    stroke="#000"
                    strokeWidth="1.5"
                    className="blob-3 drop-shadow-lg"
                  />
                </svg>
              </div>
            </div>
          </div>
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
        
        .oval-container {
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
        
        .oval-image {
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(0px) translateY(-10px); }
          75% { transform: translateX(-10px) translateY(-5px); }
        }
        @keyframes jiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes float-gentle-delay {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes wiggle-gentle {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }
        @keyframes tech-bounce-1 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes tech-bounce-2 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-7px) rotate(-1deg); }
        }
        @keyframes tech-bounce-3 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        @keyframes blob-alt-reverse {
          0% {
            border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%;
          }
          50% {
            border-radius: 40% 60% 60% 40% / 60% 30% 60% 40%;
          }
          100% {
            border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%;
          }
        }

        .animate-wiggle { animation: wiggle 4s ease-in-out infinite; }
        .animate-drift { animation: drift 6s ease-in-out infinite; }
        .animate-jiggle { animation: jiggle 3s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-float-gentle-delay { animation: float-gentle-delay 4.5s ease-in-out infinite; }
        .animate-wiggle-gentle { animation: wiggle-gentle 5s ease-in-out infinite; }
        .tech-bounce-1 { animation: tech-bounce-1 3s ease-in-out infinite; }
        .tech-bounce-2 { animation: tech-bounce-2 3.5s ease-in-out infinite; }
        .tech-bounce-3 { animation: tech-bounce-3 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        /* Add blob morphing animations */
        .blob-1 { animation: blob 7s ease-in-out infinite; }
        .blob-2 { animation: blob-reverse 8s ease-in-out infinite; }
        .blob-3 { animation: blob-alt 6s ease-in-out infinite; }
        .blob-4 { animation: blob-alt-reverse 9s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
