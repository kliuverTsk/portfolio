import { useState } from "react";
import banner from './assets/banner1.png';
export function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      
      const whatsappUrl = `https://wa.me/5511940743720?text=${encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`)}`;
      
      window.open(whatsappUrl, '_blank');
    };
    
    
    return(
        <footer id="contacto">
          <h1>contato</h1>
          <div id="bloc">
            <div id="pr">
                   <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="block" >Nome</label>

                        <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} required className="block" placeholder="escreve teu nome aqui" />

                        <label htmlFor="email" className="block" >Email</label>

                        <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required className="block" placeholder="teu email ou o email da empresa aqui" />

                        <label htmlFor="mensagem" className="block" >mensagem</label>
                        
                        <textarea name="mensagem" id="mensagem" onChange={(e) => setMessage(e.target.value)} required className="block" placeholder="mensagem aqui" ></textarea>
            
                        <button type="submit" className="block" >enviar</button>
                   </form>
              </div>
            
               <img src="./public/redes1.jpg" alt="redes sociales " id="redes" />
          </div>
            <dir>
              <div id="ban" >
                <img src={banner} alt="Banner" id='banner'/>
                <p>aprendendo a transformar ideias em realidade atraves de codigo limpo</p>
              </div>
              <div>
                <h4>navegação</h4>
                <ol>
                  <li><a href="#presentacion">sobre mim</a></li>
                  <li><a href="#container">projetos</a></li>
                  <li><a href="#contacto">contato</a></li>
                </ol>
              </div>
          
            </dir>
        </footer>
    )
}