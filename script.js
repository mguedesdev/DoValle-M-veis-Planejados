// Scroll suave para navegação
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animações ao rolar
const animateSections = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animateSections.forEach(section => observer.observe(section));

// Botão de WhatsApp
document.getElementById('whatsapp-button').addEventListener('click', () => {
  const phone = '12991636611'; // Número de telefone com código de área
  const message = encodeURIComponent('Olá, gostaria de solicitar um orçamento!');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});

const overlay1 = document.querySelector('.background-overlay');
const overlay2 = document.querySelector('.background-overlay2');

const images = [
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image1.jpg',
];

let currentIndex = 0;
let isOverlay1Active = true; // Controla qual camada está ativa

function changeBackgroundImage() {
  // Alterna as imagens entre as duas camadas
  const currentOverlay = isOverlay1Active ? overlay1 : overlay2;
  const nextOverlay = isOverlay1Active ? overlay2 : overlay1;

  // Atualiza a próxima camada com a nova imagem
  nextOverlay.style.backgroundImage = `url(${images[(currentIndex + 1) % images.length]})`;
  nextOverlay.style.opacity = 1; // Mostra a próxima camada

  // Esconde a camada atual
  currentOverlay.style.opacity = 0;

  // Atualiza o índice e alterna o controle
  currentIndex = (currentIndex + 1) % images.length;
  isOverlay1Active = !isOverlay1Active;
}

// Troca a imagem de fundo a cada 7 segundos
setInterval(changeBackgroundImage, 7000);

// Define a primeira imagem ao carregar
overlay1.style.backgroundImage = `url(${images[0]})`;
overlay2.style.backgroundImage = `url(${images[1]})`; // Prepara a segunda imagem
