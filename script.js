// script.js

/* --- Configuração do Swiper (Carrossel) --- */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Mostra 1 card no mobile
    spaceBetween: 30, // Espaço entre cards
    loop: true,       // Ciclo infinito
    autoplay: {
        delay: 3000,  // Troca a cada 3 segundos
        disableOnInteraction: false, // Continua rodando após interação
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { // Tablet
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: { // Desktop
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

/* --- Lógica do Dark Mode --- */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// 1. Verifica o tema salvo no navegador ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
    // Garante que o ícone esteja correto se não for dark
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

// 2. Alterna o tema ao clicar no botão
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    
    if (html.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});