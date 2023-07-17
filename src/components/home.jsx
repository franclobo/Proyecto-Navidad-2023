import React from 'react';
import ColorSchemesExample from './navbar';
import Cards from './cards';
import Carousel from './carousel';
import Colaboradores from './colaboradores';
import Form from './form';
import Logo from '../assets/design/logo-negro.png';

function Home() {
  return (
    <>
      <header className="App-header">
        <ColorSchemesExample />
      </header>
      <main className="App-main">
        <section className="info">
          <article>
            <h1>Proyecto Navidad</h1>
            <p>
              Proyecto Navidad tiene por objetivo brindar un agasajo navideño a
              las familias de escasos recursos residentes en parroquias rurales
              de la provincia de Pichincha, labor que realiza desde el año 2018.
              Este proyecto es una iniciativa de jóvenes que a través de
              donaciones propias y otros colaboradores hacen posible compartir
              momentos de alegría en esta fecha tan especial.
            </p>
          </article>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100080703520947%2Fvideos%2F814721992868577%2F&show_text=false&width=560&t=0"
            width="560"
            height="314"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
            title="promo"
            autoplay="true"
          ></iframe>
        </section>
        <section className="actividades">
          <Cards />
        </section>
        <section className="carrousel">
          <p className="mision">
            Nos hemos propuesto ayudar cada año a 50 familias, entregando ropa,
            alimentos y juguetes a adultos, jóvenes y niños. Esperamos poder
            continuar cada año realizando esta actividad con la colaboración de
            nuestros socios y patrocinadores.
          </p>
          <Carousel />
        </section>
        <section className="colaboradores" id="colaboradores">
          <h2>Colaboradores</h2>
          <Colaboradores />
        </section>
        <section className="contact-form" id="donar">
          <img src={Logo} className="App-logo" alt="logo" />
          <div className="line">
            <h2>Contáctanos</h2>
            <p>
              <strong>Whatsapp:</strong> 0981939711
            </p>
            <p>
              <strong>Correo:</strong> proyectonavidad@outlook.com
            </p>
            <p>
              <strong>Donaciones:</strong> Banco Pichincha <br />
              <strong>Cuenta de Ahorros:</strong> 2204188183 <br />
              <strong>Nombre:</strong> Joselyn Quispillo
            </p>
          </div>
          <Form />
        </section>
      </main>
      <footer className="App-footer">
        <small>Francisco Borja © 2023</small>
      </footer>
    </>
  );
}

export default Home
