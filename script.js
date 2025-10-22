// === AI Snow Effect for UFAI Ecosystem ===

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('snowflake');

    // Текст на "снежинке"
    const texts = ["UFAI", "Ecosystem", "AI", "Data", "ML", "Future"];
    particle.textContent = texts[Math.floor(Math.random() * texts.length)];

    const snowContainer = document.querySelector('.snow-container');

    // Позиция и стиль
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.fontSize = (Math.random() * 18 + 10) + 'px';
    particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
    particle.style.opacity = Math.random().toFixed(2);
    particle.style.color = getRandomGradientColor();

    snowContainer.appendChild(particle);

    // Удаление после окончания анимации
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Случайный цвет в стиле неонового AI
function getRandomGradientColor() {
    const colors = ['#00c6ff', '#0072ff', '#00ffcc', '#8a2be2', '#ff0080'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Запуск анимации
setInterval(createParticle, 200);


// ===== Дополнительно: плавное появление элементов при прокрутке =====
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);


// ===== Приветственное сообщение в консоли (для эстетики) =====
console.log("%cWelcome to UFAI Ecosystem 🌐", "color:#00c6ff; font-size:16px;");
console.log("%cInnovating the Future with Artificial Intelligence", "color:#aaa;");
