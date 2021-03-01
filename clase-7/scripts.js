// Objetos y Funciones


const persona = {

  name: "juan",
  age : 26,
  sons: ["laura", "diego"]
}

for(const key in persona){

  console.log(persona[key]);
}

console.log(persona["name"]);




function saludo(){
  console.log('saludo');

}

saludo()


const saludo2 = ()=>console.log('saludo')

saludo2()



