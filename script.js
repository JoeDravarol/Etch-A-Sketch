// Creating DOM elements
const container = document.createElement('div');
const title = document.createElement('h1');

// Adding Content to elements
let gridSize = 16;

title.textContent = 'Etch A Sketch';

for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = '#fff';
    container.appendChild(div);
}

document.body.appendChild(title);
document.body.appendChild(container);

// Styling Elements
title.style.margin = '1em';
container.classList.add('container');
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
