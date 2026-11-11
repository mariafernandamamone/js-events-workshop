// === Movable Box ===

// Move a box across the screen by 10px in the specified direction using the keyboard arrow keys.

// DOM Elements
const container = document.querySelector(".box-container");
const box = document.getElementById("box");

// Initial state: Center the box inside its container
let posX = (container.clientWidth - box.clientWidth) / 2;
let posY = (container.clientHeight - box.clientHeight) / 2;

// Movement configuration
const step = 10;
const maxLeft = container.clientWidth - box.clientWidth;
const maxTop = container.clientHeight - box.clientHeight;

// Set initial position in the DOM
box.style.left = `${posX}px`;
box.style.top = `${posY}px`;

// Handle movement and boundary checks
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (posY - step >= 0) posY -= step;
      break;
    case "ArrowDown":
      if (posY + step <= maxTop) posY += step;
      break;
    case "ArrowLeft":
      if (posX - step >= 0) posX -= step;
      break;
    case "ArrowRight":
      if (posX + step <= maxLeft) posX += step;
      break;
    default:
      return;
  }

  // Update box position in DOM
  box.style.left = `${posX}px`;
  box.style.top = `${posY}px`;
});
