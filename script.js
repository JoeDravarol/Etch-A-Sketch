const container = document.createElement('div');
const title = document.createElement('h1');
const gridSizeBtn = document.createElement('button');
const randomColorBtn = document.createElement('button');
const clearBtn = document.createElement('button');

let gridSize = 16;
let paintColor = '#000';
let className = 'black';

function init() {
    // Add Text Content
    title.textContent = 'Etch A Sketch';
    gridSizeBtn.textContent = 'Grid Size';
    randomColorBtn.textContent = 'Random Color';
    clearBtn.textContent = 'Clear';

    // Styling Elements
    title.style.margin = '1em';
    container.classList.add('container');
    
    // Appending Childs
    document.body.appendChild(title);
    document.body.appendChild(gridSizeBtn);
    document.body.appendChild(randomColorBtn);
    document.body.appendChild(clearBtn);
    document.body.appendChild(container);

    createGrid();
}

function createGrid() {
    for (let i = 0; i < gridSize ** 2; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = '#fff';
        container.appendChild(div);
    }

    // Make the cells fit insize the container
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

function paint(e) {
    const target = e.target;

    if (paintColor !== '#000') {
        paintColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    if (!target.className) {
        target.style.backgroundColor = paintColor;
        target.className = (className);
    } else if (target.className === 'black' && className === 'colored') {
        target.style.backgroundColor = paintColor;
        target.className = 'colored';
    }
}

function randomColor() {
    return Math.round(Math.random() * 255);
}

function removeGrid() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid();
}

function changePaintColor() {

    if (paintColor === '#000') {
        paintColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        randomColorBtn.textContent = 'Black';
        className = 'colored';
    } else {
        paintColor = '#000';
        randomColorBtn.textContent = 'Random Color';
        className = 'black';
    }
}

// Add Event Listener
container.addEventListener('mouseover', paint);
clearBtn.addEventListener('click', removeGrid);
randomColorBtn.addEventListener('click', changePaintColor);
gridSizeBtn.addEventListener('click', () => {
    gridSize = prompt('How many sqaures per side would you like on your new grid?');

    while (!(gridSize >= 1) || !(gridSize <= 100)) {
        gridSize = prompt('Please enter a number between 1 to 100')
    }

    removeGrid();
});

init();