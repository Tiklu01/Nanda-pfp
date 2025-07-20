import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
            <span className="text-4xl font-bold text-white">JD</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
          Full Stack Developer & UI/UX Designer
        </p>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-80 animate-fade-in-up delay-300">
          Crafting beautiful, functional experiences that bridge the gap between design and technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-400">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
            View My Work
          </button>
          <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 backdrop-blur-sm">
            Contact Me
          </button>
        </div>
        
        <div className="flex gap-6 mb-12 animate-fade-in-up delay-500">
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 backdrop-blur-sm">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 backdrop-blur-sm">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 backdrop-blur-sm">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 backdrop-blur-sm">
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 opacity-60" />
        </div>
      </div>
    </section>
  );
}