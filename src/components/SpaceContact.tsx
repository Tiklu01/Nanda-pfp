import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function SpaceContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Real-time validation
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.trim().length < 2) return 'First name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'First name can only contain letters';
        break;
      
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.trim().length < 2) return 'Last name must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Last name can only contain letters';
        break;
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        break;
      
      case 'subject':
        if (value.trim().length > 100) return 'Subject must be less than 100 characters';
        break;
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        break;
      
      default:
        return undefined;
    }
    return undefined;
  };

  // Handle input changes with real-time validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Handle field blur (when user leaves the field)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      subject: true,
      message: true
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate form
    if (!validateForm()) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    // Create mailto link with form data
    const mailtoSubject = encodeURIComponent(`Portfolio Contact: ${formData.subject || 'New Message'}`);
    const mailtoBody = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Subject: ${formData.subject || 'No subject provided'}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
    `);

    const mailtoLink = `mailto:tikludas01@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    try {
      // Open default email client
      window.location.href = mailtoLink;
      
      // Simulate success after a short delay
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error opening email client:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-4xl md:text-7xl text-black mb-8 transform rotate-1 text-shadow-fun" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
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
              <h3 className="text-2xl md:text-4xl text-black mb-6 transform rotate-1" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>Get In Touch</h3>
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
                  <p className="text-gray-700 font-bold">Ain&apos;t Giving 🙂‍↔️</p>
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
              <h4 className="text-xl md:text-2xl text-black mb-6 transform -rotate-1" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>Follow My Journey</h4>
              <div className="flex gap-4">
                <a href="https://github.com/tiklu01" className="w-16 h-16 bg-black border-4 border-gray-300 flex items-center justify-center hover:bg-gray-800 transition-all transform hover:scale-125 hover:rotate-12">
                  <Github className="w-8 h-8 text-white" />
                </a>
                <a href="https://www.linkedin.com/in/nanda-das-7b2242243/" className="w-16 h-16 bg-blue-600 border-4 border-blue-300 flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-125 hover:rotate-12">
                  <Linkedin className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-4 border-black p-8 transform rotate-2 hover:rotate-0 transition-transform shadow-xl">
            <div className="text-center mb-8">
              <h4 className="text-2xl md:text-4xl text-black mb-4 transform -rotate-1" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                Send Transmission
              </h4>
              <p className="text-gray-700 font-bold">Launch your message into the digital cosmos!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-3 text-black uppercase tracking-wider" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-6 py-4 border-4 focus:outline-none font-bold text-lg transition-colors ${
                      errors.firstName ? 'border-red-500 bg-red-50' : 'border-black'
                    }`}
                    placeholder="Space Explorer"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-2 font-bold">⚠️ {errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm mb-3 text-black uppercase tracking-wider" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-6 py-4 border-4 focus:outline-none font-bold text-lg transition-colors ${
                      errors.lastName ? 'border-red-500 bg-red-50' : 'border-black'
                    }`}
                    placeholder="Commander"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-2 font-bold">⚠️ {errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-3 text-black uppercase tracking-wider" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                  Quantum Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-6 py-4 border-4 focus:outline-none font-bold text-lg transition-colors ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-black'
                  }`}
                  placeholder="explorer@galaxy.space"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-2 font-bold">⚠️ {errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-3 text-black uppercase tracking-wider" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                  Mission Type
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-6 py-4 border-4 focus:outline-none font-bold text-lg transition-colors ${
                    errors.subject ? 'border-red-500 bg-red-50' : 'border-black'
                  }`}
                  placeholder="Epic Space Collaboration"
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-2 font-bold">⚠️ {errors.subject}</p>
                )}
                <p className="text-gray-500 text-xs mt-1">Optional - Max 100 characters</p>
              </div>

              <div>
                <label className="block text-sm mb-3 text-black uppercase tracking-wider" style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}>
                  Transmission Message *
                </label>
                <textarea 
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full px-6 py-4 border-4 focus:outline-none resize-none font-bold text-lg transition-colors ${
                    errors.message ? 'border-red-500 bg-red-50' : 'border-black'
                  }`}
                  placeholder="Tell me about your cosmic project ideas..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-2 font-bold">⚠️ {errors.message}</p>
                )}
                <p className="text-gray-500 text-xs mt-1">
                  {formData.message.length}/1000 characters (min 10 required)
                </p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full px-8 py-6 text-xl uppercase tracking-wider transition-all transform hover:scale-105 hover:rotate-2 flex items-center justify-center gap-3 border-4 border-black shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
                style={{fontWeight: '900', fontFamily: 'Bungee, Arial Black, sans-serif'}}
              >
                <Send className="w-6 h-6" />
                {isSubmitting 
                  ? 'Launching...' 
                  : submitStatus === 'success'
                  ? 'Message Sent! 🚀'
                  : submitStatus === 'error'
                  ? 'Fix Errors Above ⚠️'
                  : 'Launch Message! 🚀'
                }
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border-4 border-green-500 p-4 text-center transform rotate-1">
                  <p className="text-green-800 font-bold">🎉 Email client opened! Please send the message from your email app.</p>
                </div>
              )}

              {submitStatus === 'error' && Object.keys(errors).length > 0 && (
                <div className="bg-red-100 border-4 border-red-500 p-4 text-center transform -rotate-1">
                  <p className="text-red-800 font-bold">❌ Please fix the errors above before launching your message!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}