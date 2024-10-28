const slidesProject = document.querySelector('.slides-project');
const slideProject = document.querySelectorAll('.slide-project');
const prevButton = document.querySelector('.prev-project');
const nextButton = document.querySelector('.next-project');
let currentSlide = 0;
const totalSlides = slideProject.length;
// Seleccionamos el botón de menú hamburguesa y el menú
const menuToggle = document.querySelector('.menu-toggle button'); // Selecciona el botón dentro del div 'menu-toggle'
const menu = document.querySelector('.menuToogle'); // Selecciona el ul con clase 'menu'
const addtoo = document.querySelector('.addtoo button');

// Añadimos un evento de clic para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    
});

addtoo.addEventListener('click', () => {
    addtoo.classList.toggle('hide');
    
});

// Slider de testimonios
const testimonials = document.querySelectorAll('.testimonial');
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function updateSliderPosition() {
    const width = testimonials[0].clientWidth;
    sliderContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateSliderPosition();
});

window.addEventListener('resize', updateSliderPosition); // Ajustamos la posición del slider al redimensionar la ventana

