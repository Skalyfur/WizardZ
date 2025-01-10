// ------menu responsivo------
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
} 



// ------animacion titulo portada------
document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.getElementById("hero-text");

    setTimeout(() => {
      heroText.classList.add("visible");

      new TypeIt("#hero-text", {
        speed: 50, 
        waitUntilVisible: true, 
        afterComplete: () => {
          heroText.style.color = "#BCD85F"; 
        },
      }).go();
    }, 500); 
});


document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar los elementos a observar
  const elementos = document.querySelectorAll(".caso_de_estudio_info h1, .caso_de_estudio_info p");

  // Crear el observador
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
          } else {
              entry.target.classList.remove("active"); 
          }
      });
  }, {
      threshold: 0.1 
  });

  elementos.forEach(el => observer.observe(el));
});


// -----animacion scroll-----
ScrollReveal().reveal('#logo', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#menu-toggle', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 400,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#nav-list li', {
    origin: 'left',
    distance: '30px',
    duration: 800,
    interval: 100, 
    easing: 'ease-in-out'
});


document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});


// Inicializa GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

  // Selecciona todas las tarjetas
  gsap.utils.toArray('.servicios_contenedor_tarjetas > div').forEach((tarjeta, index) => {
    gsap.fromTo(
      tarjeta,
{
        opacity: 0,
        y: 50, 
      },
      {
        opacity: 1,
        y: 0, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tarjeta, 
          start: "top 80%",
          toggleActions: "play none none reverse", 
        },
      }
    );
});


document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".contacto_info, .contacto_img");

  // Crear el observador
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active"); 
          } else {
              entry.target.classList.remove("active"); 
          }
      });
  }, {
      threshold: 0.2 
  });

  // Observar cada elemento
  elementos.forEach(el => observer.observe(el));
});



// animacion carrusel
window.addEventListener("DOMContentLoaded", () => {
    const marcas = document.querySelector(".marcas");
    marcas.innerHTML += marcas.innerHTML; 
});

