const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

// Set current year in footer
document.getElementById("footer-year").textContent = new Date().getFullYear();

// Back to Top button logic
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// fetch data

async function data() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    displayProducts(result.products);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayProducts(products) {
  let html = "";

  products.forEach((item, index) => {
    html += `
      <div id="card">
        <img src="${item.images[0]}" alt="" />
        <h3 id="title">${item.title}</h3>
        <h4 id="price">Price: ${item.price} $</h4>
        <p id="description">${item.description}</p>
        <button id="card-btn" data-index="${index}">Learn More</button>
      </div>
    `;
  });

  document.getElementById("container").innerHTML = html;
}

data();

// Fetching data from an API and displaying it in a card format
