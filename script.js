// Animaciones de aparición y scroll suave al botón del hero

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  // IntersectionObserver para mostrar secciones con distintas animaciones
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("visible"));
  }

  // Mostrar el bloque del equipo automáticamente después de unos segundos
  const teamSection = document.querySelector(".team");
  if (teamSection) {
    setTimeout(() => {
      teamSection.classList.add("visible");
    }, 2000);
  }

  // Scroll suave al bloque de propuestas desde el botón del hero
  const heroButton = document.querySelector('.hero-button');
  if (heroButton) {
    heroButton.addEventListener('click', () => {
      const targetSelector = heroButton.getAttribute('data-scroll-to');
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});