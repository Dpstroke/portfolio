import React, { useState, useEffect } from 'react';
import { Code, Briefcase, User, Mail, Github, Linkedin, ExternalLink, Terminal } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        const sections = document.querySelectorAll('section');
        let current = '';

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - 300) {
            current = section.getAttribute('id') || '';
          }
        });

        setActiveSection(current);
        setTimeout(() => setIsScrolling(false), 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const projects = [
    {
      title: "Personal To-Do list",
      description: "A personal to-do list application helps individuals organize, prioritize, and track tasks efficiently to enhance productivity and time management.",
      image: "https://i.ytimg.com/vi/cOUNOi297Mw/maxresdefault.jpg",
      tags: ["React", "Three.js", "TypeScript", "Node.js"]
    },
    {
      title: "Personal Finance Manager",
      description: "A personal finance manager application that empowers users to effortlessly track expenses, set budgets, and achieve financial goals with clarity and control.",
      image: "https://tse3.mm.bing.net/th?id=OIP.k-p278kCxKnfSRiF_4ZrSwHaFj&pid=Api&P=0&h=180",
      tags: ["React", "Node.js", "tyscript"]
    },
    {
      title: "E-pharma Website",
      description: "I built an E-pharma website that enables users to conveniently order medicines, schedule consultations, and access healthcare services online with ease and reliability.",
      image: "https://themewagon.com/wp-content/uploads/2020/07/pharma.png",
      tags: ["HTML", "CSS", "java Script"]
    }
  ];

  const skills = [
    { name: "Full Stack Development", level: 90 },
    { name: "Machine Learning", level: 20 },
    { name: "UI/UX Design", level: 80 },
    { name: "Cloud Architecture", level: 30 },
    { name: "C++", level: 85 }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gradient">Darshan Pawar</span>
            <div className="space-x-8">
              {['home', 'about', 'projects', 'skills'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`nav-link text-lg capitalize ${
                    activeSection === section ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-7xl font-bold mb-6 slide-in">
              Creative
              <span className="text-gradient"> Developer</span>
              <br />& Designer
            </h1>
            <p className="text-xl text-gray-400 mb-12 slide-in" style={{ animationDelay: '0.2s' }}>
              Crafting digital experiences that merge technology with creativity
            </p>
            <div className="flex space-x-6 slide-in" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition-all duration-300 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>
              <a href="#projects" className="border border-purple-600 px-8 py-3 rounded-full hover:bg-purple-600/20 transition-all duration-300">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <User className="text-purple-400 w-8 h-8 mr-4" />
              <h2 className="text-4xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a full-stack developer with a passion for creating innovative digital solutions. 
                  With expertise in both front-end and back-end development, I bring ideas to life 
                  through clean code and creative problem-solving.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg card-glow">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-purple-400" />
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>🚀 Quick Learner</li>
                  <li>💻 Full-stack developer & UI/UX designer</li>
                  <li>🎓 Persuing B.E in Information Technology</li>
                  <li>🌍 Remote work enthusiast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Briefcase className="text-purple-400 w-8 h-8 mr-4" />
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="project-card bg-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Code className="text-purple-400 w-8 h-8 mr-4" />
              <h2 className="text-4xl font-bold">Skills & Expertise</h2>
            </div>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00dbde] to-[#fc00ff] skill-bar"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Mail className="text-purple-400 w-8 h-8 mr-4" />
              <h2 className="text-4xl font-bold">Contact Me</h2>
            </div>
            <form className="space-y-6 bg-gray-900 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="Email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your E-mail"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="Subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="Subject"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Subject (optional)"
                  />
                </div>
              </div>
              
              <div>
                  <label className="block text-gray-300 mb-2" htmlFor="Message">
                    Message
                  </label>
                  <input
                    type="text"
                    id="Message"
                    className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Your Message"
                  />
                </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

