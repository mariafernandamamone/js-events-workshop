// === Movable Box ===

// Move a box across the screen by 10px in the specified direction using the keyboard arrow keys.

const box = document.getElementById('box');

let posY = 0;
let posX = 0;

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp': posY -= 10;
        break;
        case 'ArrowDown': posY += 10;
        break;
        case 'ArrowLeft': posX -= 10;
        break;
        case 'ArrowRight': posX += 10;
        break;
    }
    box.style.left = posX + "px";
    box.style.top = posY + "px";
});