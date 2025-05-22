// Toggle hamburger menu
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.textContent = navigation.classList.contains('open') ? '✖' : '☰';
});

// Footer dynamic content
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;
