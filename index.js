const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

function btn() {
  let image = document.getElementById("image");
  let images = [
    "img/Online-Learn-Courses-p1x1yjmoc2f9t2e3kt028qnv3vp2cb51rm1isamguc.png",
    "img/pedagogy-massive-open-online-course-education-university-student-student.jpg",
    "img/pngtree-online-network-online-education-class-illustration-png-image_3164534.jpg",
  ];
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

hamburgerBtn.addEventListener("click", toggleHamburger);

//cart
let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, price) {
  cartCount++;
  cartTotal += price;
  updateCartCount(cartCount);
  updateCartTotal(cartTotal);
  alert(`Added ${productName} to the cart!`);
}

function updateCartCount(count) {
  document.getElementById("cartCount").innerText = count;
}

function updateCartTotal(total) {
  document.getElementById("cartTotal").innerText = `$${total.toFixed(2)}`;
}

//cartHover

function showItems() {
  const cartWindow = document.getElementById("cart-items");
  cartWindow.style.display = "block";
}
function hideCartWindow() {
  document.getElementById("cart-items").style.display = "none";
}
