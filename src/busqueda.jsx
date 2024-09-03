// busqueda.jsx
import React from 'react';
import banner from './assets/banner.png';  // Importa la imagen

export function Busqueda() {
    return (<>
        <div id='div'>
                <img src={banner} alt="Banner" id='banner' />
            <ul id='busqueda'>
                <li><a href="#presentacion">sobre mim</a></li>
                <li><a href="#container">projetos</a></li>
                <li><a href="#contacto">contato</a></li>
            </ul>
        </div>
    <header>

            <div id='presentacion'>
                <div id='position'>
                    <h2>oi, sou</h2>
                    <h1>kliuvert figueroa</h1>
                    <h4 id='h4'>front end estagiario</h4>
                    <p>aprendendo a transformar ideias em realidade atraves de codigo limpo</p>

                    <div id='separador'>
                        <a href="./public/kliu-curriculo(js).docx" download='kliu-cSurriculo(js).docx' id='estilos'>baixar curriculo</a>

                        <a href="https://www.instagram.com/kliuvertt/" target="_blank" id='margin1'><img src="/icon-ig.png" alt="instagram kliuvert figueroa" className='tamaño' /></a>

                        <a href="https://github.com/" target="_blank" id='margin2'><img src="/icon-github.png" alt="github kliu" className='tamaño' /></a>
                    </div>
                </div>

                <img src="./public/kliu(prueba.jpg" alt="kliuvert" id='img' />
            </div>
    </header>
    </>
    );
}
