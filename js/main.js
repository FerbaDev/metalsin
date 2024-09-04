const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const frase = document.querySelector(".scale-in-hor-left");
const whatsappButton = document.querySelector(".whatsapp-float");
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  frase.classList.remove("scale-in-hor-left");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});


//boton de whatsapp
window.addEventListener("scroll", function() {
  if (window.scrollY > window.innerHeight * 0.8) {
      whatsappButton.style.display = "flex";
  } else {
      whatsappButton.style.display = "none";
  }
});
//pop up productos
document.addEventListener('DOMContentLoaded', function() {
  const productoCards = document.querySelectorAll('.producto-card');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupContent = document.getElementById('popup-content');
  const popupClose = document.getElementById('popup-close');
  const popupText = document.getElementById('popup-text');
  const popupWhatsappLink = document.getElementById('popup-whatsapp-link');

  productoCards.forEach(card => {
      card.addEventListener('click', function() {
          const producto = card.querySelector('h3').textContent;
          const imgSrc = card.querySelector('img').src;

          popupText.textContent = `¿Quieres más información sobre ${producto}?`;
          popupWhatsappLink.href = `https://wa.me/5493571539003?text=Hola, me gustaría obtener más información sobre ${producto}.`;

          // Crear y agregar la imagen al popup
          const popupImg = document.createElement('img');
          popupImg.src = imgSrc;
          popupImg.alt = producto;
          popupImg.classList.add('popup-img');

          // Insertar la imagen antes del botón de WhatsApp
          popupContent.insertBefore(popupImg, popupWhatsappLink);

          popupOverlay.style.display = 'flex';
      });
  });

  popupClose.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
      const popupImg = document.querySelector('.popup-img');
      if (popupImg) {
          popupImg.remove(); // Eliminar la imagen cuando se cierra el popup
      }
  });

  popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
          popupOverlay.style.display = 'none';
          const popupImg = document.querySelector('.popup-img');
          if (popupImg) {
              popupImg.remove(); // Eliminar la imagen cuando se cierra el popup
          }
      }
  });
});

