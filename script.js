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
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o comportamento padrão do formulário

  const phone = '12991636611'; // Número de telefone com código de área
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // Cria a URL para o WhatsApp com os parâmetros
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Olá, meu nome é ${name}. ${message}`
  )}`;

  // Redireciona o usuário para o WhatsApp
  window.open(whatsappURL, '_blank');
});

document.getElementsByClassName('cta-button')[0].addEventListener('click', () => {
  const phone = '12991636611'; // Número de telefone com código de área
  const message = encodeURIComponent('Olá, gostaria de solicitar um orçamento!');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});

const overlay1 = document.querySelector('.background-overlay');
const overlay2 = document.querySelector('.background-overlay2');

const images = [
  'images/image8.jpg',
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


const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('blur'); // Adiciona a classe quando o scrollY > 0
  } else {
    header.classList.remove('blur'); // Remove a classe quando o scrollY é 0
  }
});



const carouselImages = document.querySelector('.carousel-images');
const indicators = document.querySelectorAll('.carousel-indicators span');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndexWorks = 0;
const totalSlides = indicators.length;
let autoSlideInterval;

// Atualiza o carrossel para exibir o slide atual
function updateCarousel() {
  const offset = -currentIndexWorks * 100; // Move o carrossel para a imagem correspondente
  carouselImages.style.transform = `translateX(${offset}%)`;

  // Atualiza os indicadores
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndexWorks);
  });
}

// Avança para o próximo slide
function nextSlide() {
  currentIndexWorks = (currentIndexWorks + 1) % totalSlides; // Volta ao início ao chegar no final
  updateCarousel();
  resetAutoSlide(); // Reseta o intervalo de troca automática
}

// Volta para o slide anterior
function prevSlide() {
  currentIndexWorks = (currentIndexWorks - 1 + totalSlides) % totalSlides; // Vai para o final ao início
  updateCarousel();
  resetAutoSlide(); // Reseta o intervalo de troca automática
}

// Reseta o intervalo de troca automática
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Interrompe o intervalo existente
  autoSlideInterval = setInterval(nextSlide, 5000); // Reinicia o intervalo
}

// Adiciona eventos nos botões
if (nextButton && prevButton) {
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
}

// Adiciona eventos nos indicadores
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndexWorks = index;
    updateCarousel();
    resetAutoSlide(); // Reseta o intervalo de troca automática
  });
});

// Troca automática de slides a cada 5 segundos
autoSlideInterval = setInterval(nextSlide, 5000);


const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-link, .logo a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Evita o comportamento padrão do clique
    const target = document.querySelector(link.getAttribute('href')); // Encontra o elemento alvo
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    }
  });
});