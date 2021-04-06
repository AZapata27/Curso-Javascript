const smile = document.getElementById('smile');
const dropZone= document.getElementById('drop-zone');

//eventos de drag o arrastre de elementos en el dom
smile.addEventListener('dragstart',()=>{
    console.log('drag start');
})
smile.addEventListener('dragend',()=>{
    console.log('drag end');
})


dropZone.addEventListener('dragenter',()=>{
    console.log('Drag Enter');
})

dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault();
    console.log('Drag over');
})

dropZone.addEventListener('drop',(e)=>{

    e.preventDefault();
    console.log('Drop');
})

dropZone.addEventListener('dragleave',(e)=>{

    e.preventDefault();
    console.log('Drag leave');
})

