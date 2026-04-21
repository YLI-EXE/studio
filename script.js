


/* slider Before/After 4 APRILE */

const container = document.querySelector(".ba-wrap");
const before = document.querySelector(".ba-before");
const line = document.querySelector(".ba-line");

let dragging = false;

container.addEventListener("pointerdown", (e) => {
  dragging = true;
  update(e);
});

window.addEventListener("pointerup", () => {
  dragging = false;
});

window.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  update(e);
});

let current = 50;
let target = 50;

function animate() {
  current += (target - current) * 0.15;

  before.style.width = current + "%";
  line.style.left = current + "%";

  requestAnimationFrame(animate);
}

animate();

function update(e) {
  const rect = container.getBoundingClientRect();
  let x = e.clientX - rect.left;

  target = (x / rect.width) * 100;
  target = Math.max(0, Math.min(100, target));
}

/* faire tourner le menu burger  */

document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu-vertical");
  const overlay = document.querySelector(".menu-overlay");

  if (!burger || !menu || !overlay) return;

  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    burger.classList.toggle("active");
  });

});
