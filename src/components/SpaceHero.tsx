"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function SpaceHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 relative overflow-hidden pt-20">
      {/* Floating UFO with love Animation - Top Right */}
      <div className="absolute top-16 md:top-20 right-1 md:right-8 animate-float">
        <div className="w-[120px] h-[100px] md:w-[180px] md:h-[150px]">
          <DotLottieReact
            src="https://lottie.host/edb2c059-24eb-4f94-b4df-88717090a27b/75LONZA8gp.lottie"
            loop
            autoplay
            className="w-full h-full drop-shadow-2xl"
          />
        </div>
      </div>

      {/* UFO with bomb - Top Left */}
      <div className="absolute top-20 md:top-24 left-1 md:left-8 animate-wiggle">
        <div className="w-[100px] h-[130px] md:w-[150px] md:h-[200px]">
          <DotLottieReact
            src="https://lottie.host/6377263d-c4bb-47f7-a102-3bee449c3b58/Q8YL7KqiMx.lottie"
            loop
            autoplay
            className="w-full h-full drop-shadow-xl"
          />
        </div>
      </div>

      {/* Running alien - Bottom Right (pulled up for full visibility) */}
      <div className="absolute bottom-12 md:bottom-16 right-1 md:right-8 animate-bounce-slow">
        <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px]">
          <DotLottieReact
            src="https://lottie.host/28035c44-9455-4fc7-b151-35a57c8f59e4/XHhkxilwez.lottie"
            loop
            autoplay
            className="w-full h-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Static astronaut - Bottom Left */}
      <div className="absolute bottom-8 md:bottom-12 left-1 md:left-8 animate-wiggle">
        <div className="w-[90px] h-[120px] md:w-[130px] md:h-[180px]">
          <DotLottieReact
            src="https://lottie.host/d812dcfd-7d3a-4a10-b7af-3b758f917af4/7VoAkJcfeD.lottie"
            loop
            autoplay
            className="w-full h-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Scattered organic stars */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" className="blob-1 md:w-5 md:h-5">
              <polygon points="7.5,1 9,5 13,5 10,8 11.5,12 7.5,10 3.5,12 5,8 2,5 6,5" fill="#000" opacity="0.4" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8 md:mb-12">
          <h1 className="font-funky text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black mb-2 md:mb-4 transform -rotate-2 text-shadow-fun blob-1 font-black">
            EXPLORE
          </h1>
          <h2 className="font-funky text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black transform rotate-1 text-shadow-fun blob-2 font-black">
            THE SPACE
          </h2>
        </div>

        <div className="bg-white border-4 border-black p-4 md:p-6 lg:p-8 mb-6 md:mb-8 lg:mb-12 transform rotate-1 hover:rotate-0 transition-transform shadow-xl blob-3 max-w-xl md:max-w-2xl mx-4">
          <p className="text-base md:text-lg lg:text-xl text-gray-700 font-bold leading-relaxed">
            Many people sign up for affiliate programs with the hope of making some serious money. Join me on this
            cosmic journey through code and creativity!
          </p>
        </div>

        <div className="relative">
          <button className="bg-black text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-base md:text-lg lg:text-xl font-black uppercase tracking-wider hover:bg-gray-800 transition-all transform hover:scale-105 hover:rotate-2 btn-funky border-4 border-black blob-4 font-extrabold">
            Nanda Lal Das
          </button>

          {/* Button decorations */}
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-red-400 rounded-full animate-pulse"></div>
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
          text-shadow: 2px 2px 0px #000, 4px 4px 0px rgba(0,0,0,0.2);
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
        .btn-funky {
          position: relative;
          overflow: hidden;
          transform: perspective(1px) translateZ(0);
        }
        .btn-funky:before {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000;
          transform: scaleX(0);
          transform-origin: 0 50%;
          transition: transform 0.3s ease-out;
        }
        .btn-funky:hover:before {
          transform: scaleX(1);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg) translateX(-50%); }
          to { transform: rotate(360deg) translateX(-50%); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        
        @media (max-width: 640px) {
          .text-shadow-fun {
            text-shadow: 1px 1px 0px #000, 2px 2px 0px rgba(0,0,0,0.2);
          }
        }
      `}</style>
    </section>
  )
}
