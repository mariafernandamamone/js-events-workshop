// === Interactive & Sortable List ===

// Sort items alphabetically, dynamically add items via user input, and remove items using a close button on each list item.

// DOM Elements
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const sortButton = document.getElementById("sortButton");
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

// Function to sort existing list items alphabetically (A-Z)
function orderList() {
  // Convert NodeList into a real Array to use .sort()
  const items = Array.from(itemList.querySelectorAll('li'));

  // Compare text inside each span alphabetically
  items.sort((a, b) => {
    const textA = a.querySelector('span').textContent;
    const textB = b.querySelector('span').textContent;
    return textA.localeCompare(textB);
  });

  // Re-append sorted items to the DOM (moves existing nodes without duplicating)
  items.forEach(li => itemList.appendChild(li));
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

// Trigger alphabetical sorting on sort button click
sortButton.addEventListener('click', orderList);