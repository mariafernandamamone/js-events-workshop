// === Evasive Box ===

// Prevent the mouse pointer from hovering over a box by randomly changing its screen position on mouseover.

// DOM Elements
const container = document.querySelector(".box-container");
const box = document.getElementById("box");

// Function to center the box initially
function setInitialPosition() {
  const initialX = (container.clientWidth - box.clientWidth) / 2;
  const initialY = (container.clientHeight - box.clientHeight) / 2;

  box.style.left = `${initialX}px`;
  box.style.top = `${initialY}px`;
}

// Set initial position on load
setInitialPosition();

// Evasive box listener on mouse hover
box.addEventListener("mouseenter", () => {
  // Calculate dynamic boundaries based on current container size
  const maxLeft = container.clientWidth - box.clientWidth;
  const maxTop = container.clientHeight - box.clientHeight;

  // Generate random coordinates within bounds
  const randomX = Math.floor(Math.random() * maxLeft);
  const randomY = Math.floor(Math.random() * maxTop);

  // Update box position in DOM
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
});