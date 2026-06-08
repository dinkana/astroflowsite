// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

// ===== Smooth Scroll =====
function scrollToApp() {
window.open('https://astroflow-gamma.vercel.app/', '_blank');
}
function scrollToFeatures() {
document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, observerOptions);
document.querySelectorAll('.fade-in').forEach(el => {
observer.observe(el);
});

// ===== Parallax Effect for Stars =====
document.addEventListener('mousemove', (e) => {
const stars = document.querySelector('.stars');
const stars2 = document.querySelector('.stars2');
const stars3 = document.querySelector('.stars3');
const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;
if (stars) {
stars.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
}
if (stars2) {
stars2.style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
}
if (stars3) {
stars3.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
}
});

// ===== Parallax for Tarot Section Stars =====
const tarotSection = document.querySelector('.tarot-section');
const starsParallax = document.querySelector('.stars-parallax');
if (tarotSection && starsParallax) {
window.addEventListener('scroll', () => {
const rect = tarotSection.getBoundingClientRect();
const sectionTop = rect.top;
const sectionHeight = rect.height;
const windowHeight = window.innerHeight;
if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
const scrolled = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
const parallaxY = scrolled * 100;
starsParallax.style.transform = `translateY(${parallaxY}px)`;
}
});
}

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if (mobileMenuBtn) {
mobileMenuBtn.addEventListener('click', () => {
navLinks.classList.toggle('active');
mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});
}

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
const href = this.getAttribute('href');
if (href === '#' || href.length < 2) return;
const target = document.querySelector(href);
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
if (navLinks) {
navLinks.classList.remove('active');
mobileMenuBtn.textContent = '☰';
}
}
});
});

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
let start = 0;
const increment = target / (duration / 16);
const timer = setInterval(() => {
start += increment;
if (start >= target) {
element.textContent = target;
clearInterval(timer);
} else {
element.textContent = Math.floor(start);
}
}, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const statNumbers = entry.target.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
const text = stat.textContent;
if (text.includes('78')) {
animateCounter(stat, 78);
}
});
statsObserver.unobserve(entry.target);
}
});
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
statsObserver.observe(heroStats);
}

// ===== Magnetic Button Effect =====
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
btn.addEventListener('mousemove', (e) => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width / 2;
const y = e.clientY - rect.top - rect.height / 2;
btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
});
btn.addEventListener('mouseleave', () => {
btn.style.transform = '';
});
});

// ===== Card Hover Effect =====
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
card.addEventListener('mousemove', (e) => {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const centerX = rect.width / 2;
const centerY = rect.height / 2;
const rotateX = (y - centerY) / 10;
const rotateY = (centerX - x) / 10;
card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
});
card.addEventListener('mouseleave', () => {
card.style.transform = '';
});
});

// ===== Add Active Class to Nav Links on Scroll =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (scrollY >= sectionTop - 200) {
current = section.getAttribute('id');
}
});
document.querySelectorAll('.nav-links a').forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${current}`) {
link.classList.add('active');
}
});
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
document.body.classList.add('loaded');
});

// ===== Console Easter Egg =====
console.log('%c✨ Astroflow', 'color: #8B5CF6; font-size: 24px; font-weight: bold;');
console.log('%cЕжедневный цифровой ритуал для души', 'color: #9CA3AF; font-size: 14px;');
console.log('%chttps://www.youtube.com/@dinnkana', 'color: #3B82F6; font-size: 12px;');