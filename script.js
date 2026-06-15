// ===== Get DOM elements =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// ===== Change navbar style on scroll =====
// When user scrolls more than 50px down, add the "scrolled" class
// which changes background, padding, shadow and text color (defined in CSS).
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile menu toggle =====
// Open or close the menu when the hamburger button is clicked.
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Close mobile menu when a link is clicked =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
