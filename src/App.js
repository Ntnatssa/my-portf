import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Sun, Moon, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const projects = [
    { title: "API RESTful de Gestão", tech: "Node.js • PostgreSQL • Sequelize • JWT", desc: "Desenvolvimento de arquitetura escalável com rotas protegidas por Middlewares, autenticação JWT e modelagem de dados com Sequelize ORM.", link: "https://github.com/Ntnatssa" },
    { title: "Dashboard Full Stack", tech: "React • Next.js • React Hooks • Axios • Bootstrap", desc: "Interface reativa para monitoramento de dados em tempo real, utilizando Axios para consumo de APIs e Bootstrap para design responsivo.", link: "https://github.com/Ntnatssa" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} font-sans overflow-x-hidden`}>

      {/* Botão de Alternar Luz/Preto */}
      <div className="fixed top-6 right-6 z-50 flex flex-row items-end gap-3">
        <AnimatePresence>
          {showTooltip && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className={`text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg bg-blue-600 text-white shadow-xl relative whitespace-nowrap`}
            >
              <div className='absolute top-1/2 right-1 -translate-y-1/2 w-2 h-2 bg-blue-600 rotate-45'></div>
              {darkMode ? "Mudar para modo Light" : "Altere para o modo Dark"}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => { setDarkMode(!darkMode); setShowTooltip(false) }}
          className={`p-4 rounded-full shadow-2xl transition-colors ${darkMode ? 'bg-white text-slate-950' : 'bg-slate-900 text-white'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.header initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent' animate={{ backgroundPosition: ["0%", "100%", "0%"] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
          Natssa Trindade
        </motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 0.5 }} className='text-xl md:text-2xl font-medium mb-6'>Desenvolvedora Full Stack</motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className={`text-lg mb-10 max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Especialista em ecossistemas JavaScript, criando APIs robustas com <strong>Node.js (Koa, Hapi, Express)</strong> e interfaces modernas com <strong>React, Angular e Vue</strong>.
        </motion.p>

        {/* Redes Sociais e Botão de CV */}
        <motion.div variants={container} initial="hidden" animate="show" className='flex justify-center gap-6'>
          {[
            { icon: <Github size={24} />, href: "https://github.com/Ntnatssa" },
            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/natssa-trindade/" },
            { icon: <Mail size={24} />, href: "mailto:natssa.trindade@hotmail.com" },
            { icon: <MessageCircle size={24} />, href: "https://wa.me/5565996970212" },
          ].map((social, i) => (
            <motion.a key={i} variants={item} href={social.href} target='_blank' rel='noreferrer' whileHover={{ y: -5, color: "#2563eb" }} className='p-2 transition-colors'
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.header>

      {/* Skills Section */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className={`py-20 px-6 border-y ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Frontend", icon: <Layout className='text-blue-500 mb-4' />, desc: "React, Next.js, Tailwind CSS, TypeScript, Angular e Vue." },
            { title: "Backend", icon: <Code2 className='text-blue-500 mb-4' size={32} />, desc: "Node.js, Express, Koa e Hapi. Segurança com JWT, Middleware e Routes." },
            { title: "Dados & Ferramentas", icon: <Database className='text-blue-500 mb-4' size={32} />, desc: "Sequelize ORM, PostgreSQL, MongoDB e Insomnia REST" }
          ].map((skill, i) => (
            <motion.div
              key={i} variants={item}
              whileHover={{ scale: 1.03 }}
              className={`p-8 border rounded-2xl ${darkMode ? 'border-slate-700 bg-slate-900/40' : 'bg-white border-slate-100 shadow-sm'}`}
            >
              {skill.icon}
              <h3 className='font-bold text-lg mb-3'>{skill.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sobre Mim Section */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className={`py-20 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-1 shadow-2xl overflow-hidden">
              <img src="/perfil.jpg" alt="Natssa" className="w-full h-full object-cover rounded-full" />
            </div>
          </motion.div>

          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>

            <p className={`text-lg leading-relaxed mb-4 font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Sou uma desenvolvedora apaixonada por transformar problemas complexos em soluções digitais elegantes. <strong>Eu amo o desafio de codificar</strong> e encontro verdadeira satisfação em ver uma aplicação ganhando vida através das minhas mãos.
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <strong>Focada em resultados</strong> e busco constantemente a excelência técnica. Atualmente, curso Análise e Desenvolvimento de Sistemas e realizo uma Pós-Graduação em Governança de TI, unindo minha paixão pelo desenvolvimento Full Stack (Node.js, React e Angular) com uma visão estratégica de processos.
            </p>

            <p className={`text-lg leading-relaxed mb-8 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              🚀 Estou em busca da minha próxima grande oportunidade profissional, onde eu possa aplicar minha dedicação total, aprender e contribuir com o crescimento da equipe.
            </p>

            <motion.div variants={container} initial="hidden" whileInView="show" className="flex flex-wrap justify-center md:justify-start gap-3">
              {["● Aberta a Oportunidades", "❤️ Alta Dedicação", "🎯 Perfil Focado"].map((tag, i) => (
                <motion.span key={i} variants={item} className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-bold">
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className='py-24 px-6 max-w-5xl mx-auto'>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='text-3xl font-bold mb-12 text-center md:text-left'>Projetos Recentes</motion.h2>
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index} variants={item}
              whileHover={{ y: -10 }}
              className={`group p-8 rounded-3xl border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:shadow-2xl'}`}
            >
              <span className='text-blue-500 text-xs font-mono mb-2 block uppercase tracking-widest'>{project.tech}</span>
              <h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
              <p className="mb-6 text-sm opacity-70 leading-relaxed">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className='inline-flex items-center gap-2 font-bold text-blue-500 hover:gap-4 transition-all'>
                Ver código no GitHub <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm opacity-50 border-t border-slate-800">
        © 2026 • Natssa Trindade • Criado com React & Framer Motion
      </footer>
    </div>
  );
}

export default App;
