let container = document.querySelector('.container');

for (let i=0;i<256;i++){
    let cell = document.createElement('div');
    cell.setAttribute('class','cell');
    cell.addEventListener('mouseover',()=>{cell.style.cssText = 'background-color: red;'});
    container.appendChild(cell);
}

