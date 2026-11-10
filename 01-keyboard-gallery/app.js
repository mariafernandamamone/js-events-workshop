/*
Crea una página HTML con un contenedor de una imagen. Debes tener preparadas diez imágenes y en función de la tecla numérica que se pulse (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) debe aparecer esa imagen en el contenedor. Cuando se pulse otro número, debe vaciarse el contenedor y cargarse de nuevo su imagen correspondiente.
*/

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
