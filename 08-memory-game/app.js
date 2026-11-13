// === Memory Card Game ===

// A 6x5 grid color-matching memory game with drag-and-drop interaction, mismatch reset, and completion timer.

// DOM Elements
const pairsCounter = document.getElementById('pairsCounter');
const timerDisplay = document.getElementById('timerDisplay');
const memoryGrid = document.getElementById('memoryGrid');

let matchedPairs = 0;
let seconds = 0;
let timerInterval = null;
let draggedCard = null;

const baseColors = [
  '#e74c3c', // Red
  '#3498db', // Blue
  '#2ecc71', // Green
  '#f1c40f', // Yellow
  '#9b59b6', // Purple
  '#e67e22', // Orange
  '#1abc9c', // Turquoise
  '#e84393', // Pink
  '#00cec9', // Cyan
  '#6c5ce7', // Indigo
  '#fdcb6e', // Warm Gold
  '#d63031', // Crimson
  '#0984e3', // Royal Blue
  '#00b894', // Mint
  '#a29bfe'  // Lavender
];

const cardsArray = [...baseColors, ...baseColors];

cardsArray.forEach(color => {
  const card = document.createElement('div');
  card.classList.add('memory-card');
  card.dataset.color = color;
  card.draggable = true;
  memoryGrid.appendChild(card);
});