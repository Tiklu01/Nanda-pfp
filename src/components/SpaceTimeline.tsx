"use client"
import { Calendar, MapPin, Award, Briefcase } from "lucide-react"

export default function SpaceTimeline() {
  const timelineEvents = [
    {
      year: "2025",
      title: "MSME Hackathon 4.0 Winner",
      company: "MSME",
      location: "Remote",
      description:
        "Won MSME hackathon 4.0 securing ₹5L funding from the Govt. to make a prototype.",
      image: "/msme.JPG",
      type: "achievement",
      color: "bg-blue-300",
    },
    {
      year: "2025",
      title: "HexaFalls Hackathon",
      company: "JIS",
      location: "JIS University, Kolkata",
      description:
        "participated in HexaFalls Hackathon, building a healthcare app with specialised reminders.",
      image: "/hexafalls.jpeg",
      type: "achievement",
      color: "bg-blue-300",
    },
    {
      year: "2025",
      title: "Hack{O}Lution Hackathon winner",
      company: "IEM",
      location: "IEM Ashram, Kolkata",
      description:
        "Won one of the Tracks in Hack{O}Lution Hackathon, creating a RAG pipeline AI agent for tax savings.",
      image: "/hackolution.jpg",
      type: "achievement",
      color: "bg-yellow-300",
    },
    {
      year: "2024",
      title: "Started a Tech Community",
      company: "B2B",
      location: "GNIT, Kolkata",
      description:
        "Revived the B2B tech community at GNIT, organizing events and workshops to foster learning and collaboration.",
      image: "/b2b.JPG",
      type: "education",
      color: "bg-green-300",
    },
    {
      year: "2024",
      title: "Techverse 3.0",
      company: "GNIT",
      location: "GNIT, Kolkata",
      description: "Operated as Tech Lead for GNIT's annual technical fest, overseeing end-to-end tech execution and coordination.",
      image: "/tv1.JPG",
      type: "work",
      color: "bg-pink-300",
    },
    {
      year: "2022",
      title: "Computer Science Student",
      company: "Guru Nanak Institute of Technology",
      location: "Kolkata, WB",
      description:
        "Started my journey in computer science & Engineering, learning programming fundamentals and exploring development.",
      image: "/NIGHT-VIEW-COLLEG.jpg",
      type: "education",
      color: "bg-purple-300",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "achievement":
        return <Award className="w-6 h-6 md:w-8 md:h-8" />
      case "education":
        return <Calendar className="w-6 h-6 md:w-8 md:h-8" />
      default:
        return <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
    }
  }

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Floating rocket - hidden on mobile, positioned better on larger screens */}
      <div className="hidden lg:block absolute top-20 right-4 xl:right-20 animate-float">
        <svg width="40" height="60" viewBox="0 0 60 100" className="drop-shadow-lg lg:w-[60px] lg:h-[100px]">
          {/* Rocket body */}
          <ellipse cx="30" cy="60" rx="15" ry="30" fill="#ff6b6b" stroke="#000" strokeWidth="3" />

          {/* Rocket nose */}
          <polygon points="30,10 15,30 45,30" fill="#ffff00" stroke="#000" strokeWidth="3" />

          {/* Rocket fins */}
          <polygon points="15,75 5,95 15,90" fill="#4ecdc4" stroke="#000" strokeWidth="2" />
          <polygon points="45,75 55,95 45,90" fill="#4ecdc4" stroke="#000" strokeWidth="2" />

          {/* Rocket window */}
          <circle cx="30" cy="45" r="8" fill="#87ceeb" stroke="#000" strokeWidth="2" />
          <circle cx="30" cy="45" r="5" fill="#fff" opacity="0.7" />

          {/* Flames */}
          <polygon points="20,90 30,95 40,90 35,100 25,100" fill="#ff4500" className="animate-pulse" />
          <polygon
            points="22,95 30,98 38,95 36,105 24,105"
            fill="#ffff00"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-funky text-4xl md:text-6xl lg:text-7xl text-black dark:text-white mb-4 md:mb-8 transform rotate-1 text-shadow-fun" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
            JOURNEY LOG
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto font-bold px-4">
            My adventure through the cosmos of development!
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto min-h-full">
          {/* Timeline line - dynamically sized */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 md:w-2 top-0 bottom-0">
            {/* Mobile straight line */}
            <div className="w-full h-full bg-black dark:bg-white md:hidden"></div>

            {/* Desktop wavy line */}
            <div className="hidden md:block w-full h-full">
              <svg width="8" height="100%" className="absolute" preserveAspectRatio="none">
                <defs>
                  <pattern id="wavyLine" x="0" y="0" width="8" height="200" patternUnits="userSpaceOnUse">
                    <path d="M4,0 Q8,50 4,100 Q0,150 4,200" stroke="#000" strokeWidth="4" fill="none" className="dark:stroke-white" />
                  </pattern>
                </defs>
                <rect width="8" height="100%" fill="url(#wavyLine)" />
              </svg>
            </div>
          </div>

          <div className="space-y-8 md:space-y-20">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 md:w-16 md:h-16 ${event.color} border-2 md:border-4 border-black dark:border-white shadow-xl z-20 flex items-center justify-center rounded-full md:rounded-none hover:scale-125 transition-transform`}
                >
                  <div className="text-black dark:text-black">{getIcon(event.type)}</div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden ml-16 space-y-4">
                  <div className="bg-white dark:bg-gray-800 border-4 border-black dark:border-white p-4 shadow-xl hover-lift transform rotate-1 hover:rotate-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`px-4 py-2 ${event.color} border-2 border-black dark:border-white font-black text-lg transform -rotate-2`}
                      >
                        {event.year}
                      </div>
                    </div>

                    <h3 className="font-funky text-xl md:text-2xl text-black dark:text-white mb-2 transform rotate-1" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>{event.title}</h3>
                    <p className="text-black dark:text-white font-black text-lg mb-2">{event.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 flex items-center gap-2 font-bold">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-semibold text-sm">{event.description}</p>
                  </div>

                  <div className="aspect-video overflow-hidden border-4 border-black dark:border-white shadow-xl hover-lift transform -rotate-1 hover:rotate-0">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Desktop layout */}
                <div
                  className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                >
                  <div
                    className={`bg-white dark:bg-gray-800 border-4 border-black dark:border-white p-6 lg:p-8 shadow-xl hover-lift transform ${index % 2 === 0 ? "rotate-2" : "-rotate-2"} hover:rotate-0`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`px-4 lg:px-6 py-2 lg:py-3 ${event.color} border-3 border-black dark:border-white font-black text-lg lg:text-xl transform -rotate-3`}
                      >
                        {event.year}
                      </div>
                    </div>

                    <h3 className="font-funky text-xl md:text-2xl lg:text-3xl text-black dark:text-white mb-3 transform rotate-1" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                      {event.title}
                    </h3>
                    <p className="text-black dark:text-white font-black text-lg lg:text-xl mb-2">{event.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex items-center gap-2 font-bold">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-semibold">{event.description}</p>
                  </div>
                </div>

                {/* Desktop Image */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <div
                    className={`aspect-video overflow-hidden border-4 border-black dark:border-white shadow-xl hover-lift transform ${index % 2 === 0 ? "-rotate-2" : "rotate-2"} hover:rotate-0`}
                  >
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style >{`
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
        .hover-lift:hover {
          transform: translateY(-5px) rotate(0deg);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
