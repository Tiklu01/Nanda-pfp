import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function SpaceContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-100 to-blue-100 relative overflow-hidden">
      {/* Floating planet */}
      <div className="absolute top-20 right-20 animate-spin-slow">
        <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-lg">
          <circle cx="50" cy="50" r="40" fill="#8B4513" stroke="#000" strokeWidth="4"/>
          <ellipse cx="50" cy="50" rx="60" ry="20" fill="none" stroke="#000" strokeWidth="4"/>
          <ellipse cx="50" cy="50" rx="55" ry="17" fill="none" stroke="#000" strokeWidth="2"/>
          <circle cx="40" cy="40" r="8" fill="#654321" opacity="0.7"/>
          <circle cx="60" cy="55" r="6" fill="#654321" opacity="0.7"/>
          <circle cx="45" cy="60" r="4" fill="#654321" opacity="0.7"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 animate-float">
        <svg width="80" height="60" viewBox="0 0 80 60">
          <ellipse cx="40" cy="30" rx="35" ry="15" fill="#4ecdc4" stroke="#000" strokeWidth="3"/>
          <circle cx="25" cy="33" r="4" fill="#ffff00" className="animate-pulse"/>
          <circle cx="40" cy="35" r="4" fill="#ffff00" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
          <circle cx="55" cy="33" r="4" fill="#ffff00" className="animate-pulse" style={{ animationDelay: '1s' }}/>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-funky text-7xl text-black mb-8 transform rotate-1 text-shadow-fun">
            MISSION CONTROL
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-bold">
            Ready to launch your next digital adventure? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white border-4 border-black p-8 transform -rotate-1 hover:rotate-0 transition-transform shadow-xl">
              <h3 className="font-funky text-4xl text-black mb-6 transform rotate-1">Get In Touch</h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-bold">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always open to discussing new opportunities and cosmic adventures!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 bg-yellow-300 border-4 border-black p-6 transform rotate-1 hover:rotate-0 transition-transform shadow-xl">
                <div className="w-16 h-16 bg-black flex items-center justify-center border-2 border-white">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-black text-black text-xl">Space Mail</p>
                  <p className="text-gray-700 font-bold">tikludas01@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-pink-300 border-4 border-black p-6 transform -rotate-1 hover:rotate-0 transition-transform shadow-xl">
                <div className="w-16 h-16 bg-black flex items-center justify-center border-2 border-white">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-black text-black text-xl">Quantum Phone</p>
                  <p className="text-gray-700 font-bold">+91 (7044) 992-445</p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-green-300 border-4 border-black p-6 transform rotate-2 hover:rotate-0 transition-transform shadow-xl">
                <div className="w-16 h-16 bg-black flex items-center justify-center border-2 border-white">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-black text-black text-xl">Home Base</p>
                  <p className="text-gray-700 font-bold">Kolkata, WB</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-8 transform rotate-1 hover:rotate-0 transition-transform shadow-xl">
              <h4 className="font-funky text-2xl text-black mb-6 transform -rotate-1">Follow My Journey</h4>
              <div className="flex gap-4">
                <a href="https://github.com/tiklu01" className="w-16 h-16 bg-black border-4 border-gray-300 flex items-center justify-center hover:bg-gray-800 transition-all transform hover:scale-125 hover:rotate-12">
                  <Github className="w-8 h-8 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/nanda-das-7b2242243/" className="w-16 h-16 bg-blue-600 border-4 border-blue-300 flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-125 hover:rotate-12">
                  <Linkedin className="w-8 h-8 text-white" />
                </a>
                <a href="#" className="w-16 h-16 bg-cyan-500 border-4 border-cyan-300 flex items-center justify-center hover:bg-cyan-600 transition-all transform hover:scale-125 hover:rotate-12">
                  <Twitter className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-4 border-black p-8 transform rotate-2 hover:rotate-0 transition-transform shadow-xl">
            <div className="text-center mb-8">
              <h4 className="font-funky text-4xl text-black mb-4 transform -rotate-1">
                Send Transmission
              </h4>
              <p className="text-gray-700 font-bold">Launch your message into the digital cosmos!</p>
            </div>

            <form 
              action="https://formsubmit.co/nandadas0123@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black mb-3 text-black uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    name="First Name"
                    required
                    className="w-full px-6 py-4 border-4 border-black focus:outline-none font-bold text-lg"
                    placeholder="Space Explorer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black mb-3 text-black uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    name="Last Name"
                    required
                    className="w-full px-6 py-4 border-4 border-black focus:outline-none font-bold text-lg"
                    placeholder="Commander"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black mb-3 text-black uppercase tracking-wider">Quantum Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full px-6 py-4 border-4 border-black focus:outline-none font-bold text-lg"
                  placeholder="explorer@galaxy.space"
                />
              </div>

              <div>
                <label className="block text-sm font-black mb-3 text-black uppercase tracking-wider">Mission Type</label>
                <input 
                  type="text" 
                  name="Subject"
                  className="w-full px-6 py-4 border-4 border-black focus:outline-none font-bold text-lg"
                  placeholder="Epic Space Collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-black mb-3 text-black uppercase tracking-wider">Transmission Message</label>
                <textarea 
                  name="Message"
                  rows={5}
                  required
                  className="w-full px-6 py-4 border-4 border-black focus:outline-none resize-none font-bold text-lg"
                  placeholder="Tell me about your cosmic project ideas..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-black text-white px-8 py-6 font-black text-xl uppercase tracking-wider hover:bg-gray-800 transition-all transform hover:scale-105 hover:rotate-2 flex items-center justify-center gap-3 border-4 border-black shadow-xl btn-funky"
              >
                <Send className="w-6 h-6" />
                Launch Message! 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
