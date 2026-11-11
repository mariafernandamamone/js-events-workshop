// === Dynamic Paragraph ===

// Append typed characters into a paragraph in real-time with a clear button to reset the content.

// DOM Elements
const charInput = document.getElementById("charInput");
const resetBtn = document.getElementById("resetBtn");
const dynamicParagraph = document.getElementById("dynamicParagraph");

// Update paragraph in real-time as user types
charInput.addEventListener('input', function() {
  dynamicParagraph.textContent = charInput.value;
});

// Clear input and paragraph on reset button click
resetBtn.addEventListener('click', () => {
  charInput.value = '';
  dynamicParagraph.textContent = '';
});

// Clear input and paragraph when pressing Enter inside the input field
charInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    charInput.value = '';
    dynamicParagraph.textContent = '';
  }
});