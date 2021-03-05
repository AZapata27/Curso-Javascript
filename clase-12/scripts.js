const button = document.getElementById('button');

const box = document.getElementById('box');


button.addEventListener('click',()=>{
    console.log('CLICK');
}); 


button.addEventListener('dblclick', ()=>{
    console.log('doble click');
})


box.addEventListener('mouseenter', ()=>{
    box.classList.replace('red','blue')
})

box.addEventListener('mouseleave', ()=>{
    box.classList.replace('blue','red')
})

box.addEventListener('mousedown',()=>{
    console.log('has pulsado en la caja');
})

box.addEventListener('mouseup',()=>{
    console.log('has soltado en la caja');
})

box.addEventListener('mousemove',()=>{
    console.log('esta moviendo rato en la caja');
})

box.addEventListener('k',()=>{
    console.log('esta moviendo rato en la caja');
})

const input = document.getElementById('input')