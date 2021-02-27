let numeros= [1,2,3,4,5,6,7,8,9];


console.log(numeros.length);

console.log(numeros[0]+numeros[1]);


for (let i = 0; i  < numeros.length; i++) {
   console.log(numeros[i]);
    
}



numeros.pop();

console.log(numeros);

numeros.shift();

console.log(numeros);




numeros.push(9);

console.log(numeros);

numeros.unshift(1);

console.log(numeros);

console.log(numeros.reverse());


numeros.reverse()
console.log(numeros.join('_'));



numeros.splice(3,-1,10);

console.log(numeros);



console.log(numeros.slice(3,6));



