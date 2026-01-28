
import React, { useEffect, useRef } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  ExternalLink, 
  ChevronRight,
  Mail,
  MapPin,
  ArrowRight,
  Bot
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import Layout from './components/Layout';
import AIChat from './components/AIChat';
import { SKILLS, PROJECTS, ICON_MAP } from './constants';
import emailjs from "@emailjs/browser";


const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="bg-slate-950 p-8 lg:p-10 rounded-[2.5rem] shadow-2xl">
      <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 text-white"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell me about your project..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 text-white resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 text-slate-950 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};


const App: React.FC = () => {
  const scrollRevealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    scrollRevealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !scrollRevealRefs.current.includes(el)) {
      scrollRevealRefs.current.push(el);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Available for Fresher Roles
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Architecting the <span className="text-emerald-400">Digital</span> Future.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
              I'm Kesav Deepak Sridharan, a Data Scientist | Data Analyst | AI Engineer focused on exploring the hidden secrets of data to drive innovation and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className = "bg-emerald-500 text-slate-950 px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-emerald-400 transition-all hover:-translate-y-1">View My Projects <ChevronRight size={20} /></a>
              <div className="flex gap-4 items-center pl-4">
                <a href="https://github.com/KesavDeepak" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/kesav-deepak-sridharan-90572a273/  " className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border border-slate-800 relative group">
              <img 
                src="/images/image copy.png" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">Located in</p>
                    <p className="text-lg font-bold">Mahabalipuram, Chen</p>
                  </div>
                  <MapPin className="text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/30" ref={addToRefs}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold">About <span className="text-emerald-400">Me</span></h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              With over a 3 years adventourous journey in Data Science and AI, I've honed my skills in transforming complex datasets into actionable insights.
              I also like to face challenges that push the boundaries of conventional data analysis, leveraging cutting-edge AI techniques to solve real-world problems.
              I am very much eager to contribute my expertise to innovative projects that drive meaningful impact.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I believe that technology should be an invisible enabler, providing seamless 
              solutions to real-world problems. When I'm not coding, you'll find me exploring 
              generative art or contributing to open-source developer tooling.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-3xl font-display font-bold text-emerald-400">10+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-emerald-400">5</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Certifications</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
             <div className="absolute top-0 right-0 p-4 bg-emerald-500 text-slate-950 font-bold text-xs rounded-bl-3xl">Techie</div>
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               {/* Added Bot to imports above to fix: Cannot find name 'Bot' */}
               <Bot size={24} className="text-emerald-400" /> Kesav Deepak Sridharan
             </h3>
             <div className="flex justify-center">
  <img
    src="/images/image.png"
    alt="Features illustration"
    className="w-full max-w-md"
  />
</div>


          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Core <span className="text-emerald-400">Skills</span></h2>
              
            </div>
            <div className="text-right">
              <span className="text-emerald-400 font-bold text-5xl">07</span>
              <p className="text-slate-500 uppercase tracking-widest text-xs">Total Proficiencies</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
                      {ICON_MAP[skill.icon]}
                    </div>
                    <span className="text-slate-500 font-bold text-sm">{skill.level}%</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{skill.description}</p>
                  <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center">
               <h4 className="text-lg font-bold mb-8 text-center uppercase tracking-widest text-slate-500">Skill Distribution</h4>
               <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                    <Radar
                      name="Expertise"
                      dataKey="level"
                      stroke="#34d399"
                      fill="#34d399"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
               </div>
               <p className="mt-8 text-sm text-center text-slate-500 leading-relaxed italic">
                 "Mastery is not about knowing everything, but knowing how everything connects."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-950" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Project <span className="text-emerald-400">Works</span></h2>
            <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:translate-y-[-10px] transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="bg-emerald-500 text-slate-950 p-3 rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-slate-950 p-3 rounded-full hover:scale-110 transition-transform">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:gap-4 transition-all">
                    Know More <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden" ref={addToRefs}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-500 rounded-[3rem] p-12 lg:p-20 grid lg:grid-cols-2 gap-12 items-center shadow-[0_0_100px_rgba(16,185,129,0.2)]">
            <div className="text-slate-950">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Let's build something <br /> legendary together.</h2>
              <p className="text-slate-900/70 text-lg mb-12 max-w-md">
                Have a project in mind or just want to chat? My inbox is always open for interesting discussions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-950 text-emerald-500 p-3 rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-950/60">Email Me</p>
                    <p className="text-xl font-bold">kesavdeepak007@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-950 text-emerald-500 p-3 rounded-2xl">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-950/60">Socials</p>
                    <p className="text-xl font-bold">https://www.linkedin.com/in/kesav-deepak-sridharan-90572a273/</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />


          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default App;
