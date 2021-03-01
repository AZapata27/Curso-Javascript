// POO en js


class Persona {

constructor(nombre, apellido, edad){

   this.nombre = nombre
   this.apellido = apellido
   this.edad = edad

   this.datos= `Hola mi nombre es ${this.nombre} mi apellido es ${this.apellido} y tengo ${this.edad} años `

}


saludar(){
  return console.log(`Hola mi nombre es ${this.nombre} mi apellido es ${this.apellido} y tengo ${this.edad} años `);
}

}



const andres = new Persona('andres' ,' zapata',25)




andres.saludar()
