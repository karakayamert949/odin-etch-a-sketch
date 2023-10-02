const container = document.querySelector('.squareContainer');
const btn = document.querySelector('.btn');

let gridNum = 16;

btn.addEventListener('click',()=>{
    let gridNum=prompt('How many squares per row you want?');
})

for (let i=0;i<gridNum**2;i++){
    let cell = document.createElement('div');
    cell.setAttribute('class','cell');
    cell.style.width = `${100/gridNum}%`;
    cell.style.height = `${100/gridNum}%`;
    cell.addEventListener('mouseover',()=>{cell.style.backgroundColor = 'red'});
    container.appendChild(cell);
}

