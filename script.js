// Create floating hearts
function createHearts() {
    const container = document.querySelector('.floating-hearts');
    const colors = ['#ff7eb3', '#ff758c', '#ff65a3', '#ff6b6b', '#ff8e8e'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random properties
        const size = Math.random() * 15 + 5;
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
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        heart.style.setProperty('--heart-color', color);
        
        container.appendChild(heart);
    }
}

// Music player functionality
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

// Add keyframes for hearts animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes float {
        0% {
            transform: translateY(0) rotate(45deg);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(45deg);
            opacity: 0;
        }
    }
`, styleSheet.cssRules.length);

// Apply animation to hearts
const hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
    heart.style.animation = 'float linear infinite';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    
    // Typewriter effect for the name
    const name = document.querySelector('.name');
    const text = "Dear Pooja";
    let i = 0;
    
    name.textContent = '';
    
    function typeWriter() {
        if (i < text.length) {
            name.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    
    setTimeout(typeWriter, 1000);
});