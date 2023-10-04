const container = document.querySelector('.squareContainer');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    clearGrid(container);
    do {
        gridNum = prompt('How many squares per row you want? (max: 100)');
    } while (gridNum > 100 || gridNum < 1)
    makeGrid(gridNum);
})

function clearGrid(container) {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function makeGrid(gridNum) {
    for (let i = 0; i < gridNum ** 2; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.style.width = `${100 / gridNum}%`;
        cell.style.height = `${100 / gridNum}%`;
        cell.addEventListener('mouseover', () => { 
            randR=Math.random()*255;
            randG=Math.random()*255;
            randB=Math.random()*255;
            cell.style.backgroundColor = `rgb(${randR},${randG},${randB})` });
        container.appendChild(cell);
    }
}