const form = document.getElementById('form')

const input = document.getElementById('input')

const button = document.getElementById('button')

const gallery = document.getElementById('gallery')

const link = document.getElementById('link')



form.addEventListener('keyup', (e)=>{
 console.log(e.key);

})

button.addEventListener('click', (e)=>{
    console.log(e);
})


gallery.addEventListener('click',(e)=>{

    console.log(e.target.textContent);

    e.target.classList.add('red');
})



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('El formulario se a enviado');
})




form.addEventListener('click',(e)=>{

    console.log(e.target);
})

link.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e.target);
})

button.addEventListener('click',()=>{

    

    input.value='has hecho click'

    console.log('has hecho click');
})