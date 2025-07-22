import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, GraduationCap, Code, Database, Palette, Download, MapPin, Calendar, TrendingUp, Award, BookOpen, Target, Lightbulb } from 'lucide-react';
import NeuralBackground from './components/NeuralBackground';
import AnimatedBox from './components/AnimatedBox';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const projects = [
    {
      title: "Machine Learning-Driven Solar Panel Optimization",
      description: "Built an ML model to predict sun's azimuth & elevation for precise solar panel rotation. Real-time control of motor system for maximizing solar energy capture.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "Machine Learning", "Arduino", "IoT"],
      link: "#",
      sdg: "SDG 12: Responsible Consumption"
    },
    {
      title: "Emotion Recognition via GSR Signals",
      description: "Used WESAD dataset to classify emotions using Galvanic Skin Response. Applied ML techniques to reach improved classification accuracy (~29.21% → aiming 40-50%).",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      link: "#",
      sdg: "Healthcare Innovation"
    },
    {
      title: "Secure File Sharing System",
      description: "Developed a system using TCP protocol to sync and backup files in P2P format. Redundancy ensured by syncing files across all peers every 6 seconds.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "TCP", "AES Encryption", "P2P"],
      link: "#",
      sdg: "Data Security"
    },
    {
      title: "Student Database with CGPA Filtering",
      description: "Web-based tool showing student grades and CGPA. Includes search/filter for top and bottom CGPA holders.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      technologies: ["Django", "MySQL", "HTML", "CSS"],
      link: "#",
      sdg: "SDG 4: Quality Education"
    },
    {
      title: "Job Application Tracker",
      description: "A personal CRM for job applications: track company name, role, date, and status using Django and SQL.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
      technologies: ["Django", "SQL", "Bootstrap", "JavaScript"],
      link: "#",
      sdg: "Career Management"
    }
  ];

  const skills = [
    { name: "Python", icon: Code, category: "Programming" },
    { name: "C", icon: Code, category: "Programming" },
    { name: "Machine Learning", icon: Lightbulb, category: "AI/ML" },
    { name: "Scikit-learn", icon: Database, category: "AI/ML" },
    { name: "MySQL", icon: Database, category: "Database" },
  ];

  const achievements = [
    {
      title: "2nd Runner-Up – CodeHunt",
      organization: "NIT Puducherry",
      icon: Award,
      color: "text-yellow-400"
    },
    {
      title: "Participant – PortXFolio Hackathon 2025",
      organization: "Portfolio Challenge",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "Participant – GNEC Hackathon",
      organization: "SDG 5 & 10 based solution",
      icon: Lightbulb,
      color: "text-green-400"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6 flex-wrap">
            {['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
              <li key={section}>
                <button 
                  onClick={() => scrollToSection(section)}
                  className={`text-white transition-colors capitalize ${
                    activeSection === section ? 'text-blue-400' : 'hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <NeuralBackground />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <img 
            src="/sitharth.png"
            alt="Sitharth S"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-2xl"
          />
          <h1 className="text-6xl font-bold mb-6">Hi, I'm Sitharth S 👋</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A passionate Computer Science Engineering student | ML & Software Developer | 
            Final Year at Manakula Vinayagar Institute of Technology
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Sitharthsithu" className="hover:text-blue-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sithusitharth03@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
          <a 
            href="mailto:sithusitharth03@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold"
          >
            📩 Contact Me
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedBox delay={0.1}>
            <div className="flex items-center mb-12">
              <User className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold">About Me</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="text-blue-400 mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-300 leading-relaxed">
                    I'm currently pursuing B.Tech in Computer Science Engineering (CSE) from 
                    Manakula Vinayagar Institute of Technology, Pondicherry. With a strong foundation 
                    in software development, machine learning, and backend systems, I'm working on 
                    impactful academic and personal projects aimed at real-world problem-solving.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Code className="text-green-400 mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-300 leading-relaxed">
                    I enjoy building smart systems — from solar panel optimization using ML to 
                    secure file sharing systems and GSR-based emotion recognition. I also actively 
                    participate in hackathons and tech events to refine my skills.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                  <p className="text-gray-300 leading-relaxed">
                    My career goal is to join a tech-driven company like Infosys, Wipro, or HCL 
                    and grow as a full-stack or backend developer, with a long-term focus on AI/ML solutions.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/sitharth.png"
                  alt="Sitharth S"
                  className="w-80 h-80 rounded-2xl shadow-2xl border-4 border-blue-500/30"
                />
              </div>
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-800/50">
      <div>
          <div className="max-w-6xl mx-auto">
          <AnimatedBox delay={0.1}>
            <div className="flex items-center mb-12">
              <GraduationCap className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">SSLC and HSC</h3>
              <p className="text-blue-400 text-xl mb-4">Presidency Hr Sec School, Reddiyarpalayam, Pondicherry</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-green-400" size={20} />
                  <span className="text-gray-300">2022</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-yellow-400" size={20} />
                  <span className="text-gray-300">SSLC:92.7% , HSC:79.9%</span>
                </div>
              </div>
            </div>
          </AnimatedBox>
        </div>
        <div className="max-w-6xl mx-auto">
          <AnimatedBox delay={0.1}>
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold mb-4">B.Tech Computer Science Engineering</h3>
              <p className="text-blue-400 text-xl mb-4">Manakula Vinayagar Institute of Technology, Pondicherry</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-green-400" size={20} />
                  <span className="text-gray-300">2022 – 2026 (Expected)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-yellow-400" size={20} />
                  <span className="text-gray-300">CGPA: 8.1 (Current)</span>
                </div>
              </div>
            </div>
          </AnimatedBox>
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedBox delay={0.1}>
            <div className="flex items-center mb-12">
              <Code className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <AnimatedBox key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <skill.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.category}</p>
                  </div>
                </AnimatedBox>
              ))}
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedBox delay={0.1}>
            <div className="flex items-center mb-12">
              <Briefcase className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedBox key={index} delay={index * 0.1}>
                  <div className="h-full flex flex-col">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-green-400 font-medium">{project.sdg}</span>
                        <a href={project.link} className="text-blue-400 hover:text-blue-300 flex items-center text-sm">
                          View <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedBox>
              ))}
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedBox delay={0.1}>
            <div className="flex items-center mb-12">
              <Award className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold">Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <AnimatedBox key={index} delay={index * 0.2}>
                  <div className="text-center">
                    <achievement.icon className={`w-16 h-16 mx-auto mb-4 ${achievement.color}`} />
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.organization}</p>
                  </div>
                </AnimatedBox>
              ))}
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedBox delay={0.1}>
            <div className="flex items-center justify-center mb-12">
              <Mail className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold">Get In Touch</h2>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Mail className="text-blue-400 mb-4" size={24} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:sithusitharth03@gmail.com" className="text-gray-400 hover:text-blue-400">
                    sithusitharth03@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="text-green-400 mb-4" size={24} />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Pondicherry, India</p>
                </div>
                <div className="flex flex-col items-center">
                  <Download className="text-purple-400 mb-4" size={24} />
                  <h3 className="font-semibold mb-2">Resume</h3>
                  <a href="#" className="text-gray-400 hover:text-purple-400">Download PDF</a>
                </div>
              </div>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Sitharthsithu" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sitharth-sithu-2135382a4/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:sithusitharth03@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 mb-4">© 2025 Sitharth S. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            🌱 Projects aligned with UN Sustainable Development Goals: SDG 4, 11, 12
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;