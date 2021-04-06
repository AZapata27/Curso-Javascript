const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')


//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

finishedTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

// cuando se empieza arrastrar se agrega la clase active para resaltarla dentro de las demas en blanco
pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})


// cuando finalice el arrastre se remueve la clase active
pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

finishedTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})




//OBLIGATORIO, SI NO, NO FUNCIONA

//configuracion de dropzone para zona finished

finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    element.classList.add('finished')
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})


//configuracion de dropzone para zona pending

pendingTasks.addEventListener('dragover',(e)=>{
    e.preventDefault();
})

pendingTasks.addEventListener('drop',(e)=>{
    e.preventDefault();

    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    element.classList.remove('finished')
    pendingTasks.appendChild(finishedTasks.removeChild(element))

})