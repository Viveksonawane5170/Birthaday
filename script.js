// Auto-Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Floating Hearts
function createHearts() {
    const container = document.querySelector('.hearts');
    const colors = ['#ff7eb3', '#ff758c', '#ff65a3', '#ff6b6b', '#ff8e8e'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const posX = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${posX}px`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.background = color;
        
        container.appendChild(heart);
    }
}

// Music Player
const musicBtn = document.getElementById('musicBtn');
const birthdaySong = document.getElementById('birthdaySong');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        birthdaySong.pause();
        musicBtn.textContent = '🎵 Play Music';
    } else {
        birthdaySong.play();
        musicBtn.textContent = '🔊 Music On';
    }
    isPlaying = !isPlaying;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0); // Show first slide
    createHearts(); // Create floating hearts
});