/* ===== SMOOTH NAV ===== */
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    closeNav();
  });
});

/* ===== HAMBURGER MENU ===== */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');
const navbar     = document.querySelector('.navbar');

function getNavbarHeight() {
  return navbar.getBoundingClientRect().height;
}

function openNav() {
  const h = getNavbarHeight();
  navLinks.style.top    = h + 'px';
  navLinks.style.height = 'calc(100vh - ' + h + 'px)';
  navOverlay.style.top  = h + 'px';
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  navOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  if (navLinks.classList.contains('open')) closeNav();
  else openNav();
});

navOverlay.addEventListener('click', closeNav);

/* ===== NAVBAR SCROLL SHADOW ===== */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

/* ===== AIR PARTICLE GENERATOR ===== */
const container = document.querySelector('.air-particles');
for (let i = 0; i < 30; i++) {
  const particle = document.createElement('span');
  const size = Math.random() * 5 + 2;
  particle.style.width             = size + 'px';
  particle.style.height            = size + 'px';
  particle.style.left              = Math.random() * 100 + '%';
  particle.style.top               = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 18 + 10) + 's';
  particle.style.animationDelay    = (Math.random() * 12) + 's';
  container.appendChild(particle);
}

/* ===== SCROLL REVEAL ===== */
const revealTargets = document.querySelectorAll(
  '.problem-card, .sol-card, .arch-chip, .why-card, .vision-card, .app-feature'
);

revealTargets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 6) * 0.07 + 's';
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.05,
  rootMargin: '0px 0px -20px 0px'
});

revealTargets.forEach(el => revealObserver.observe(el));
