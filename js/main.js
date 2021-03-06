/*=============== SHOW MENU ===============*/
const toggle = document.getElementById("toggle");
const links = document.getElementById("links");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector("header");
window.addEventListener("scroll", chngBg);
function chngBg() {
  if (this.scrollY >= 50) header.classList.add("scroll");
  else header.classList.remove("scroll");
}

/*=============== FILTER MENU ===============*/
const cards = document.querySelectorAll(
  ".work .container .content .cards .card:not(:first-child)"
);
const type = document.querySelector(
  ".work .container .content .cards .card:first-child span"
);
const buttons = document.querySelectorAll(
  ".work .container .content .filter li"
);

buttons.forEach((button) => button.addEventListener("click", filterCards));
function filterCards() {
  type.innerText = this.textContent;
  buttons.forEach((button) => button.classList.remove("active"));
  this.classList.add("active");
  cards.forEach((card) => {
    if (card.classList.contains(this.textContent))
      card.classList.remove("hide");
    else card.classList.add("hide");
  });
}

// ==== SCROLL REVEAL ANIMATION  =====
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});
sr.reveal(".home .image, .work .card, .blog .card");
sr.reveal(".home  .text", { delay: 400 });
sr.reveal(".about .content, .skills .text, .contact form", { origin: "left" });
sr.reveal(" .contact img", { origin: "right" });