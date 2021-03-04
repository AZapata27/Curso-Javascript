// Manejo de DOM

/* const title = document.getElementById('title') */

/* title.textContent= 'accediendo a nodos desde el dom' */



const paragraph = document.querySelector('.paragraph')

console.log(paragraph);



const span = paragraph.querySelector('span')

console.log(span);



const paragraphs = document.querySelectorAll('.paragraph')

console.log(paragraphs);



const name= document.getElementById('name')
const title= document.getElementById('title')


name.setAttribute('type','data')


title.classList.add('main-title')
title.classList.remove('main-title')

if(title.classList.contains('title')) console.log('contiene title');
else console.log('no contiene titulo');



title.classList.replace('title','title-replaced')

console.log(name.value.length);
console.log(title.textContent);
console.log(name.value.length);
console.log(title.textContent);
console.log(name.value.length);
console.log(title.textContent);
console.log(name.value.length);
console.log(title.textContent);
console.log(title.textContent);
console.log(name.value.length);
console.log(title.textContent);
console.log(title.textContent);
console.log(name.value.length);
console.log(title.textContent);
console.log(title.textContent);
console.log(name.value.length);
console.log(title.textContent);



