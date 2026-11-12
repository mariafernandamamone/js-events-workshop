// === Vowel Remover ===

// Remove all occurrences of a specific vowel from a text paragraph upon clicking its corresponding button.

// DOM Elements
const targetParagraph = document.getElementById("targetParagraph");
const vowelButtons = document.querySelectorAll(".vowel-btn");

// Remove all occurrences of the clicked vowel from the paragraph
vowelButtons.forEach(button => {
  button.addEventListener('click', function() {
    const vowelToRemove = button.dataset.vowel;

    // 1. Convert current paragraph text into an array of characters
    const paragraphArray = targetParagraph.textContent.split('');

    // 2. Keep only characters that do not match the selected vowel (case-insensitive)
    const filteredArray = paragraphArray.filter(char => char.toLowerCase() !== vowelToRemove);

    // 3. Join characters back into a string and update the DOM
    targetParagraph.textContent = filteredArray.join('');

    // 4. Disable the button after its vowel has been removed
    button.disabled = true;
  });
});



