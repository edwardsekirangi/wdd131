// Here we have the temple

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    year: 2005,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    year: 1888,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    year: 2015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    year: 2020,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    year: 1974,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    year: 1986,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    year: 1983,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 382207,
    year: 1893,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico",
    dedicated: "2000, March, 5",
    area: 34245,
    year: 2000,
    imageUrl: 
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/800x500/albuquerque-temple-lds-137883-wallpaper.jpg"
  },
  {
    templeName: "Belem Brazil Temple",
    location: "Belem Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    year: 2022,
    imageUrl: 
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg"
  }
  
];

// Here is code that will create the cards using the info we have, we will use functions and array functions as well to create the cards

function createTempleCard(temple) {
  const card = document.createElement('section');
  card.classList.add('temple-card');
  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" width = "500" loading="lazy">
  `;
  return card;
}

function displayTemples(templesArray) {
  const container = document.getElementById('temple-cards');
  container.innerHTML = '';
  const cards = templesArray.map(createTempleCard); // use map here
  cards.forEach(card => container.appendChild(card)); // append all cards
}

//We are creating the filter functions here

function filterOld() {
  const filtered = temples.filter(t => t.year < 1900);
  displayTemples(filtered);
}

function filterNew() {
  const filtered = temples.filter(t => t.year > 2000);
  displayTemples(filtered);
}

function filterLarge() {
  const filtered = temples.filter(t => t.area > 90000);
  displayTemples(filtered);
}

function filterSmall() {
  const filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
}

function showAll() {
  displayTemples(temples);
}


displayTemples(temples);

//now we want to add a filter for the temples.
const filter = document.getElementById('temple-filters');

document.getElementById("home").addEventListener("click", showAll);
document.getElementById("old").addEventListener("click", filterOld);
document.getElementById("new").addEventListener("click", filterNew);
document.getElementById("large").addEventListener("click", filterLarge);
document.getElementById("small").addEventListener("click", filterSmall);


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
