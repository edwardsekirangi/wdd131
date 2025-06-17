// Counter logic for review.html
const reviewCountElement = document.getElementById("reviewCount");
if (reviewCountElement) {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewCountElement.textContent = count;
}
