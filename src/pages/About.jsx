import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div class="container-fluid mt-4">
        <h1 class="mb-4">Sobre nosotros</h1>
        <h4>Nuestra misión</h4>
        <p>
        Nuestro objetivo es simple: crear un espacio para interactuar con los demás de forma libre y segura.
        Aquí puedes ser tu mismo y disfrutar cada interacción, sin que un algoritmo dicte lo que ves o con quién conectas.
        </p>
        <h4>Nuestro equipo</h4>
        <p>
        Somos un equipo con pasión por la tecnología y las conexiones, ya sean personales o virtuales.
        Por eso, trabajamos juntos para crear una plataforma pensada para la gente, no para los números.
        </p>
        <h4>Agradecimientos</h4>
        <p>
        Construir esta plataforma ha sido un viaje increíble, lleno de aprendizajes y desafíos.
        No podríamos haberlo hecho sin todas las personas que nos han apoyado.
        De parte de todo el equipo, queremos agradecer a los organizadores del CodeXcellence.
        Gracias por creer, por compartir y por ser parte de esta historia.
        </p>
        <footer id="contacto">
        <div class="contenedor footer-content">
            <div class="contact-us">
                <h2 class="brand">Mi Lab</h2>
                <p>Espacio para profesionales, entusiastas de las tecnologías, innovación y el trabajo colaborativo</p>
                <p>Tel: 0984 083200</p>
                <p>Email: milabhubcolaborativo@gmail.com</p>
            </div>
            
        <div class="line">  </div>
            <div class="social-media">
                <a href="https://www.facebook.com/milabhub" target="_blank" class="social-media-icon">
                    <i class='bx bxl-facebook'></i>
                </a>
                <a href="https://www.instagram.com/milabhub" target="_blank" class="social-media-icon">
                    <i class='bx bxl-instagram'></i>
                </a>
                    <a href="https://x.com/milabhub" target="_blank" class="social-media-icon">
                        <i class='bx bxl-twitter'></i>
                    </a>
            </div>
        </div>
    </footer>
      </div>

      
    </div>
  );
}

export default About;
