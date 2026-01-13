import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Sun, Moon, Download, MessageCircle } from 'lucide-react';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    { title: "API RESTful de Gestão", tech: "Node.js • PostgreSQL • Sequelize • JWT", desc: "Desenvolvimento de arquitetura escalável com rotas protegidas por Middlewares, autenticação JWT e modelagem de dados com Sequelize ORM.", link: "https://github.com/Ntnatssa" },
    { title: "Dashboard Full Stack", tech: "React • Next.js • React Hooks • Axios • Bootstrap", desc: "Interface reativa para monitoramento de dados em tempo real, utilizando Axios para consumo de APIs e Bootstrap para design responsivo.", link: "https://github.com/Ntnatssa" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} font-sans`}>

      {/* Botão de Alternar Luz/Preto */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full shadow-lg transition-all hover:scale-110 ${darkMode ? 'bg-white-400 text-black' : 'bg-slate-900 text-white'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section */}
      <header className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
          Natssa Trindade
        </h1>
        <h2 className='text-xl md:text-2xl font-medium mb-6 opacity-80'>Desenvolvedora Full Stack</h2>
        <p className={`text-lg mb-10 max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Especialista em ecossistemas JavaScript, criando APIs robustas com <strong>Node.js (Koa, Hapi, Express)</strong> e interfaces modernas com <strong>React, Angular e Vue</strong>.
        </p>

        {/* Redes Sociais e Botão de CV */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          <div className='flex gap-6'>
            <a href="https://github.com/Ntnatssa" target='_blank' rel='noreferrer' className='p-2 hover:text-blue-500 transition-colors'><Github size={28} /></a>
            <a href="https://linkedin.com/" target='_blank' rel='noreferrer' className='p-2 hover:text-blue-500 transition-colors'><Linkedin size={28} /></a>
            <a href="mailto:natssa.trindade@hotmail.com" className='p-2 hover:text-blue-500 transition-colors'><Mail size={28} /></a>
            <a href="https://wa.me/5565996970212?text=Olá%20Natssa,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!" target='_blank' rel='noreferrer' className='p-2 hover:text-green-500 transition-colors'>
              <MessageCircle size={28} />
            </a>
          </div>

          {/* <a
            href="/Curriculo_Natssa.pdf"
            download
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
          >
            <Download size={20} /> Baixar Currículo
          </a> */}
        </div>
      </header>

      {/* Skills Section */}
      <section className={`py-16 px-6 border-y ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-6 border rounded-xl hover:shadow-lg transition-all ${darkMode ? 'border-slate-700' : 'border-slate-100'}`}>
            <Layout className='text-blue-500 mb-4' />
            <h3 className='font-bold text-lg mb-2'>Frontend</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Domínio de <strong>React (Hooks)</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>TypeScript</strong>, <strong>Angular</strong> e <strong>Vue</strong>. Estilização com <strong>Bootstrap/Tailwindcss</strong> e consumo de dados com <strong>Axios</strong>.
            </p>
          </div>
          <div className={`p-8 border rounded-2xl hover:shadow-xl transition-all ${darkMode ? 'border-slate-700 bg-slate-900/40' : 'bg-white border-slate-100 shadow-sm'}`}>
            <Code2 className='text-blue-500 mb-4' size={32} />
            <h3 className='font-bold text-lg mb-3'>Backend</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Construção de APIs com <strong>Express, Koa e Hapi</strong>. Segurança avançada com <strong>JWT</strong>, <strong>Middleware</strong> e gestão de <strong>Routes</strong>.
            </p>
          </div>
          <div className={`p-8 border rounded-2xl hover:shadow-xl transition-all ${darkMode ? 'border-slate-700 bg-slate-900/40' : 'bg-white border-slate-100 shadow-sm'}`}>
            <Database className='text-blue-500 mb-4' size={32} />
            <h3 className='font-bold text-lg mb-3'>Dados & Ferramentas</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Modelagem com <strong>Sequelize ORM</strong> em <strong>PostgreSQL</strong>. Testes de ambiente com <strong>Insomnia</strong> e variáveis com <strong>Dotenv</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">

          {/* Coluna da Imagem em Círculo */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-1 shadow-2xl transition-transform hover:scale-105">
              <div className={`w-full h-full rounded-full overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center relative`}>
                <img src="/perfil.jpg" alt="Natssa Trindade" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>

            <p className={`text-lg leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Sou uma desenvolvedora apaixonada por transformar problemas complexos em soluções digitais elegantes. <strong>Eu amo o desafio de codificar</strong> e encontro verdadeira satisfação em ver uma aplicação ganhando vida através das minhas mãos.
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <strong>Focada em resultados</strong> e busco constantemente a excelência técnica. Atualmente, curso Análise e Desenvolvimento de Sistemas e realizo uma Pós-Graduação em Governança de TI, unindo minha paixão pelo desenvolvimento Full Stack (Node.js, React e Angular) com uma visão estratégica de processos.
            </p>
            <p className={`text-lg leading-relaxed mb-8 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              🚀 Estou em busca da minha próxima grande oportunidade profissional, onde eu possa aplicar minha dedicação total, aprender e contribuir com o crescimento da equipe.
            </p>

            {/* Tags de destaque */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium border border-blue-500/20">
                📍 Cuiabá, MT
              </span>
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium border border-cyan-500/20">
                🚀 Disponível para Remoto
              </span>
              {/* Destaques de Atitude */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 text-sm font-bold">
                ● Aberta a Oportunidades
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-bold">
                ❤️ Alta Dedicação
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-500 text-sm font-bold">
                🎯 Perfil Focado
              </div>
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className='py-24 px-6 max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12 text-center md:text-left'>Projetos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className={`group p-8 rounded-3xl border transition-all hover:-translate-y-2 ${darkMode ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:shadow-2xl hover:border-blue-500'}`}>
              <span className='text-blue-500 text-xs font-mono mb-2 block uppercase tracking-widest'>{project.tech}</span>
              <h3 className='text-2xl font-bold mb-4'>{project.title}</h3>
              <p className={`mb-6 text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className='inline-flex items-center gap-2 font-bold text-blue-500 hover:gap-3 transition-all'>
                Ver código no GitHub <ExternalLink size={16} />
              </a>
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
