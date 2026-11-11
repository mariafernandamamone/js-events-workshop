// === Interactive & Sortable List ===

// Dynamically add items via prompt input and remove items using a close button on each list item.

// DOM Elements
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("itemList");

// Function to handle adding a new list item
function addListItem() {
  const text = itemInput.value.trim();
  
  // Guard clause to prevent adding empty items
  if (!text) return;

  // 1. Create the main list item container
  const li = document.createElement('li');

  // 2. Wrap text in a span for cleaner CSS layout control
  const textSpan = document.createElement('span');
  textSpan.textContent = text;

  // 3. Create the delete button
  const eraseButton = document.createElement('button');
  eraseButton.textContent = 'X';

  // 4. Remove the specific li element when clicking the delete button
  eraseButton.addEventListener('click', function() {
    li.remove();
  });

  // 5. Assemble and append the node to the DOM
  li.appendChild(textSpan);
  li.appendChild(eraseButton);
  itemList.appendChild(li);

  // 6. Reset the input field
  itemInput.value = '';
}

// Event Listeners

// Trigger item addition on button click
addButton.addEventListener('click', addListItem);

// Trigger item addition when pressing Enter inside the input field
itemInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addListItem();
  }
});