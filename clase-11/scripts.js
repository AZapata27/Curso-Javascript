/* let word = 'hola mundo'

console.log(Array.from(word));

console.log(word.split('')); */

const letters = ["b", "g", "f", "e", "a", "t"];

const numbers = [1, 100, 200, 300, 3, 9, 2, 200];

console.log(letters.sort());
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));

const numbers2 = [1, 100, 200, 300, 3, 9, 2, 200];

numbers2.forEach((el) => {
  console.log(el);
});

const words = ["html", "css", "js", "php"];

console.log(words.some((word) => word.length > 20));
console.log(words.every((word) => word.length > 1));

// map realiza una operacion sobre un array existente  y devuelve un nuevo array

const numbers3 = [1, 100, 200, 300, 3, 9, 2, 200];

numbers3.map((number) => console.log(number * 2));


// filter se usa para filtrar datos de una array dependiento la condicion


const numbers4 = [45,34,67,35,45,25]

const result_numbre = numbers4.filter(number=>number>40)

console.log(result_numbre);


// se recoge los elementos reduciondolos a un unico valor atraves de sus pares con opreraciones


const result_numbre2 = numbers4.reduce((a,b)=>a-b)

console.log(result_numbre2);



// spread operator se usan para realizar un aindiciasion directa del array para usarse de manera directa en funciones 






console.log(...numbers4);



const addNumbers = (a,b,c)=> {

console.log(a+b+c);
}

numbers2.push(...numbers4)

console.log(numbers2);






//parametros rest


const restParams=(...numbers5)=>{
  console.log(numbers5);
}





restParams(...numbers3)



// math macxismo



console.log(Math.max(...numbers4));

// elementos duplicados

console.log([...new Set(numbers4)]);

