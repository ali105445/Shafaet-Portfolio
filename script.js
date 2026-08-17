// 1. TYPEWRITER EFFECT
const words = ['KM. SHAFAET', 'A FRONTEND ENGINEER', 'KEEP ME IN YOUR PRAYERS'];
const typewriterEl = document.getElementById('typewriter-text');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runTypewriter() {
  if (!typewriterEl) return;
  let wordIndex = 0;

  while (true) {
    const currentWord = words[wordIndex % words.length];

    // Type out word
    for (let i = 1; i <= currentWord.length; i++) {
      typewriterEl.textContent = currentWord.slice(0, i);
      await sleep(110);
    }

    await sleep(1800); // Pause on complete word

    // Erase word
    for (let i = currentWord.length; i >= 0; i--) {
      typewriterEl.textContent = currentWord.slice(0, i);
      await sleep(60);
    }

    await sleep(400);
    wordIndex++;
  }
}

document.addEventListener('DOMContentLoaded', runTypewriter);

// 2. THEME TOGGLE (Bootstrap 5 data-bs-theme)
const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
document.documentElement.setAttribute('data-bs-theme', savedTheme);
updateThemeIcon(savedTheme);

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-bs-theme', nextTheme);
  localStorage.setItem('portfolioTheme', nextTheme);
  updateThemeIcon(nextTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  }
}

// 3. CONTACT FORM HANDLER
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('senderName').value;
  alert(`✅ Thanks ${name}! Your message has been received.`);
  event.target.reset();
}

// 4. SMOOTH SCROLLING FOR NAVBAR LINKS
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
