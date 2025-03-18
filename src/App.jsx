import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaWhatsapp } from 'react-icons/fa'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mensaje = `Olá! Meu nome é ${formData.nombre}.\nMeu email é: ${formData.email}.\nMensagem: ${formData.mensaje}`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const whatsappUrl = `https://wa.me/5511949749057?text=${mensajeCodificado}`;
    
    window.open(whatsappUrl, '_blank');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  const whatsappLink = `https://wa.me/5511949749057?text=Olá,%20tenho%20interesse%20em%20contactar`;

  const proyectos = [
    {
      id: 1,
      titulo: "Mini Rede Social",
      descripcion: "Rede social básica mas totalmente funcional que demonstra minhas habilidades em desenvolvimento web",
      imagen: "./imgs/mini-red-social.jpg",  // Modificado
      demo: "https://kliuvertsk.github.io/mini-red-social/#/",
      codigo: "https://github.com/kliuverTsk/mini-red-social" 
    },
    {
      id: 2,
      titulo: "Loja Virtual",
      descripcion: "E-commerce desenvolvido com React",
      imagen: "./imgs/tienda-online.png",  // Modificado
      demo: "https://kliuvertsk.github.io/tienda-online/#/",
      codigo: "https://github.com/kliuverTsk/tienda-online"
    },
    {
      id: 3,
      titulo: "App do Clima",
      descripcion: "Painel do clima interativo e dados em tempo real",
      imagen: "./imgs/ver-clima.png",  // Modificado
      demo: "https://kliuvertsk.github.io/clima/",
      codigo: "https://github.com/kliuverTsk/clima"
    }
  ];

  return (
    <main className="app">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre-mi">Sobre Mim</a></li>
            <li><a href="#proyectos">Projetos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Kliuvert Figueroa</h1>
          <h2>Desenvolvedor Frontend Junior</h2>
          <div className="social-links">
            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="sobre-mi" className="about">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Olá! Sou um desenvolvedor frontend apaixonado por criar experiências web únicas e atraentes. Me especializo em HTML5, CSS3, JavaScript e React.</p>
            <p>Meu objetivo é combinar design e funcionalidade para criar aplicações web modernas e eficientes.</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projetos Concluídos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="projects">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {proyectos.map(proyecto => (
            <article key={proyecto.id} className="project-card">
              <img 
                src={proyecto.imagen} 
                alt={proyecto.titulo} 
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{proyecto.titulo}</h3>
                <p className="project-description">{proyecto.descripcion}</p>
                <div className="project-links">
                  <a 
                    href={proyecto.demo} 
                    className="project-demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver Demo
                  </a>
                  <a 
                    href={proyecto.codigo} 
                    className="project-code" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="habilidades" className="skills">
        <h2>Minhas Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaHtml5 className="html-icon" />
            <span>HTML5</span>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="css-icon" />
            <span>CSS3</span>
          </div>
          <div className="skill-item">
            <FaJs className="js-icon" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <FaReact className="react-icon" />
            <span>React</span>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <h2>Contato</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="nombre" 
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nome" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="mensaje" 
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Mensagem" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensagem por WhatsApp</button>
          </form>
          <div className="whatsapp-container">
            <a 
              href={whatsappLink}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Contate-me por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
