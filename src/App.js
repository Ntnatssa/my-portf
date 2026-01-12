import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Sun, Moon } from 'lucide-react';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    { title: "API de Agendamento", tech: "Node.js, TypeScript, PostgreSQL", desc: "Sistema de agendamento com validações de horário e envio de notificações", link: "#" },
    { title: "Plataforma de Cursos", tech: "React, Next.js, Styled Components", desc: "Interface moderna para consumo de aulas em vídeo com controle de progresso.", link: "#" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} font-sans`}>

      {/* Botão de Alternar Luz/Preto */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full shadow-lg transition-all hover:scale-110 ${darkMode ? 'bg-yellow-400 text-black' : 'bg-slate-900 text-white'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section */}
      <header className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
          Desenvolvedora Full Stack
        </h1>
        <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Especialista em construir soluções escaláveis com <strong>Node.js</strong> e interfaces de alta performance com <strong>React</strong>.
        </p>
        <div className='flex justify-center gap-6'>
          <a href="https://github.com/" target='_blank' rel='noreferrer' className='p-2 hover:text-blue-500 transition-colors'><Github size={28} /></a>
          <a href="https://linkedin.com/" target='_blank' rel='noreferrer' className='p-2 hover:text-blue-500 transition-colors'><Linkedin size={28} /></a>
          <a href="mailto:natssa.trindade@hotmail.com" className='p-2 hover:text-blue-500 transition-colors'><Mail size={28} /></a>
        </div>
      </header>

      {/* Skills Section */}
      <section className={`py-16 px-6 border-y ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-6 border rounded-xl hover:shadow-lg transition-all ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
            <Layout className='text-blue-500 mb-4' />
            <h3 className='font-bold text-lg mb-2'>Frontend</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>React.js, Next.js, Tailwind CSS, Redux e TypeScript para interfaces responsivas.</p>
          </div>
          <div className={`p-6 border rounded-xl hover:shadow-lg transition-all ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
            <Code2 className='text-blue-500 mb-4' />
            <h3 className='font-bold text-lg mb-2'>Backend</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Node.js, Express, NestJS, TypeScript, arquitetura de Microserviços e RESTful APIs.</p>
          </div>
          <div className={`p-6 border rounded-xl hover:shadow-lg transition-all ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
            <Database className='text-blue-500 mb-4' />
            <h3 className='font-bold text-lg mb-2'>Banco de Dados</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>PostgreSQL, MongoDB e modelagem de dados escalável.</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='py-20 px-6 max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12 text-center md:text-left'>Projetos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className='group bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden transition-all hover:-translate-y-2 hover:ring-2 hover:ring-blue-500'>
              <div className='relative z-10'>
                <span className='text-cyan-400 text-xs font-mono mb-2 block uppercase tracking-widest'>{project.tech}</span>
                <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                <p className='text-slate-400 mb-6 line-clamp-2 text-sm'>{project.desc}</p>
                <a href={project.link} className='inline-flex items-center gap-2 font-semibold text-cyan-400 hover:text-white transition-colors'>
                  Ver projeto <ExternalLink size={16} />
                </a>
              </div>
              <div className='absolute top-0 right-9 p-4 opacity-10 group-hover:opacity-20 transition-opacity'>
                <Code2 size={140} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 text-center text-sm border-t ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-400'}`}>
        © 2026 • Natssa Trindade • Full Stack Developer • Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
