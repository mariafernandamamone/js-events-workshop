// === Keyboard Image Gallery ===

// Press any numeric key (0-9) to display its corresponding image. Pressing any other key will clear the container.

const img = document.getElementById("randomImg");

document.addEventListener("keydown", function (event) {
  let key = parseInt(event.key);
  if (key >= 0 && key <= 9) {
    img.src = `img/img${key}.png`;
    img.style.display = 'block';
  } else {
    img.src = '';
    img.style.display = 'none';
  }
});
