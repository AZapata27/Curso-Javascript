const days =['lunes','martes','miercoles','jueves','viernes','sabado','domingo']

const title = document.getElementById('title')

const dayList = document.getElementById('title')

const selectDays = document.getElementById('daysSelect')



/* const itemList =  document.createElement('LI')



itemList.textContent='lunes'


console.log(itemList);
dayList.appendChild(itemList) */


const fragment = document.createDocumentFragment()

for (const day of days){

    const itemList =  document.createElement('LI')
       itemList.textContent=day
       fragment.appendChild(itemList)


}

console.log(fragment);




dayList.appendChild(fragment)


const fragment1 = document.createDocumentFragment()

for (const day of days) {

    const optionsDay =  document.createElement('OPTION')
     optionsDay.textContent=day
     optionsDay.value=day.toLowerCase()
       fragment1.appendChild(optionsDay)
    
}



selectDays.appendChild(fragment1)
console.log(selectDays);


//Recorrer el DOM (DOM Traversing) 

/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.
Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene
Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano
Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

const parent= document.getElementById('parent')

const newElement= document.createElement('LI')

newElement.textContent='prueba'



console.log(parent.parentElement.closest('H1')) ;


parent.insertAdjacentElement('afterend', newElement)



console.log(parent.cloneNode(true));


parent.remove()