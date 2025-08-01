
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
});
