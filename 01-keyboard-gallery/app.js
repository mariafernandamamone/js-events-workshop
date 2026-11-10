// === Keyboard Image Gallery ===

// Press any numeric key (0-9) to display its corresponding image. Pressing any other key will clear the container.

const img = document.getElementById("randomImg");
const keysAdmited = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

document.addEventListener("keydown", function (event) {
  if (keysAdmited.includes(event.key)) {
    const src = "img/img" + event.key + ".png";
    img.setAttribute("src", src);
    img.style.display = 'block';
  } else {
    img.setAttribute("src", "");
    img.style.display = 'none';
  }
});
