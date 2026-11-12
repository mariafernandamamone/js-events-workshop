// === Dynamic Paragraph ===

// Append typed characters into a paragraph in real-time with a clear button to reset the content.

// DOM Elements
const resetBtn = document.getElementById("resetBtn");
const dynamicParagraph = document.getElementById("dynamicParagraph");

// Update paragraph in real-time as user types
document.addEventListener('keydown', function(event) {
  if (event.key.length === 1) {
    dynamicParagraph.textContent += event.key;
  }
  if (event.key === 'Backspace') {
    dynamicParagraph.textContent = dynamicParagraph.textContent.slice(0, -1);
  }
});

// Clear input and paragraph on reset button click
resetBtn.addEventListener('click', () => {
  dynamicParagraph.textContent = '';
  resetBtn.blur();
});

