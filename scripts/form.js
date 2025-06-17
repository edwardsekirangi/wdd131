const products = [
  { id: 'fc-1888', name: "Flux Capacitor" },
  { id: 'fc-2050', name: "Power Laces" },
  { id: 'fs-1987', name: "Flying Skateboard" },
  { id: 'ac-2000', name: "Anti-Gravity Chair" },
  { id: 'gp-3000', name: "Gigawatt Power Cell" }
];

// Populate product dropdown
const productSelect = document.querySelector("#product");
if (productSelect) {
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Counter logic for review.html
const reviewCountElement = document.getElementById("reviewCount");
if (reviewCountElement) {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewCountElement.textContent = count;
}
