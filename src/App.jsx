import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaWhatsapp } from 'react-icons/fa'
import gerenciadorClientes from './assets/gerenciador-clientes.png'
import tiendaOnline from './assets/tienda-online.webp'
import verClima from './assets/clima.png'
import pizeeria from "./assets/pizzeria.png"
import { FaBars } from 'react-icons/fa';
import './App.css'

// Añade el estado para el menú
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      titulo: "pizzaria",
      descripcion: "Sistema de pizzaria online desenvolvido com React, permitindo aos clientes visualizar o cardápio e fazer reservas de mesas.",
      imagen: pizeeria,
      demo: "https://kliuvertsk.github.io/pizeria/",
      codigo: "https://github.com/kliuverTsk/pizeria" 
    },
    {
      id: 2,
      titulo: "Gerenciador de Clientes",
      descripcion: "Sistema completo de gestão de clientes com recursos de cadastro, edição e acompanhamento. Desenvolvido com React e integração de banco de dados, oferece interface intuitiva e relatórios detalhados.",
      imagen: gerenciadorClientes,
      demo: "https://kliuvertsk.github.io/gerenciador-clientes/",
      codigo: "https://github.com/kliuverTsk/gerenciador-clientes" 
    },
    {
      id: 3,
      titulo: "Loja Virtual",
      descripcion: "E-commerce completo desenvolvido com React, oferecendo experiência de compra intuitiva, carrinho de compras dinâmico, catálogo de produtos e sistema de contra-entrega integrado com whatsapp. Interface moderna e responsiva para todos dispositivos.",
      imagen: tiendaOnline,
      demo: "https://kliuvertsk.github.io/tienda-online/#/",
      codigo: "https://github.com/kliuverTsk/tienda-online"
    },
    {
      id: 4,
      titulo: "App do Clima",
      descripcion: "Aplicativo meteorológico que fornece informações precisas e atualizadas em tempo real. Desenvolvido com API de previsão do tempo, exibe temperatura, umidade, velocidade do vento e previsão para os próximos dias com interface moderna.",
      imagen: verClima,
      demo: "https://kliuvertsk.github.io/clima/",
      codigo: "https://github.com/kliuverTsk/clima"
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="app">
      <header className="header">
        <button className="menu-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
        <nav>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
            <li><a href="#sobre-mi" onClick={toggleMenu}>Meus Serviços</a></li>
            <li><a href="#proyectos" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#habilidades" onClick={toggleMenu}>Habilidades</a></li>
            <li><a href="#contacto" onClick={toggleMenu}>Contato</a></li>
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
          <h2>Desenvolvedor Web</h2>
          <div className="social-links">
            <a href="https://github.com/kliuverTsk" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kliuvert-figueroa-77b2ab292/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="sobre-mi" className="about">
        <h2>Meus Serviços</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Aumente suas conversões e atraia mais clientes com Landing Pages criadas sob medida para seu negócio. Ofereço designs modernos, responsivos e otimizados para resultados.</p>
            
            <div className="services-features">
              <h3>O que inclui no meu serviço:</h3>
              <div className="feature-grid">
                <div className="feature-item">
                  <h4>Design Personalizado</h4>
                  <p>Cada landing page é feita para atender a identidade visual da marca</p>
                </div>
                <div className="feature-item">
                  <h4>Estrutura Otimizada</h4>
                  <p>Foco na experiência do usuário para garantir que seus visitantes realizem a ação desejada</p>
                </div>
                <div className="feature-item">
                  <h4>Responsividade</h4>
                  <p>Garantia de que sua página será perfeitamente visualizada em qualquer dispositivo</p>
                </div>
                <div className="feature-item">
                  <h4>Integração Marketing</h4>
                  <p>Formulários de contato,Google Analytics e mais</p>
                </div>
                <div className="feature-item">
                  <h4>Velocidade e SEO</h4>
                  <p>Páginas rápidas e preparadas para ajudar no ranqueamento no Google</p>
                </div>
              </div>

              <div className="why-choose">
                <h3>Por que escolher minhas Landing Pages?</h3>
                <ul>
                  <li>✓ Foco em resultados: Cada página é construída para alcançar os objetivos específicos do seu negócio</li>
                  <li>✓ Design de alto impacto: Criamos páginas visuais e atraentes que engajam seus visitantes</li>
                  <li>✓ Suporte contínuo: Estou à disposição para realizar ajustes e otimizações pós-lançamento</li>
                </ul>
              </div>

              <div className="ideal-for">
                <h3>Ideal para:</h3>
                <ul>
                  <li>• Lançamentos de produtos</li>
                  <li>• Captação de leads</li>
                  <li>• Promoções e eventos</li>
                  <li>• Campanhas de marketing digital</li>
                </ul>
              </div>

              <div className="pricing">
                <h3>Preços</h3>
                <div className="pricing-options">
                  <div className="price-card">
                    <h4>Landing Page Simples</h4>
                    <p>R$200</p>
                    <span>Ideal para campanhas de um único produto/serviço</span>
                  </div>
                  <div className="price-card">
                    <h4>Landing Page Completa</h4>
                    <p>R$500</p>
                    <span>Inclui integração com formulários, integraçao de ferramentas de marketing basica e otimização para SEO</span>
                  </div>
                </div>
                <div className="whatsapp-container">
                  <a 
                    href={whatsappLink}
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp /> Fale comigo no WhatsApp!
                  </a>
                </div>
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
      <a 
        href={whatsappLink}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </main>
  )
}

export default App
