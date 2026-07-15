console.log("hola consola");
let nombre = "Juan"
let apellido = "Gonzalez"

const DiaNacimiento = 10
const MesNacimiento = 5
const AñoNacimiento = 1900
const AñoActual = 2026
console.log(nombre, apellido, DiaNacimiento, MesNacimiento, AñoNacimiento);
console.log("mi Nombre es " + nombre + " " + apellido)
console.log("Mi fecha de nacimiento es " + DiaNacimiento + "/" + MesNacimiento + "/" + AñoNacimiento)
console.log("Tengo " + (AñoActual-AñoNacimiento) + " años")
let Inmortal = confirm("Eres un Immortal?") 
console.log("Inmortal: " + Inmortal)
let AnioString = prompt("En que año naciste? (Ingresa solo números)")
let AnioNumerico = parseInt(AnioString)
let EdadReal = AñoActual - AnioNumerico
console.log("El Año declarado es: " + AnioNumerico + " y por lo tanto tu edad real deberia de ser " + EdadReal + " años.")
let NombreReal = prompt("Cual es tu Nombre Real?")
let Padre = prompt("Quien es tu Padre?")
let Refugiado = prompt("te estas ocultando de una faccion enemiga?")
console.log( "Gracias por tu tiempo, " + NombreReal + " Hijo de " + Padre + ", Vamos a encontrarte un Refugio seguro, para que no te encuentren los enemigos de tu faccion")
alert("Estamos en busca de tu refugio, " + NombreReal + " Hijo de " + Padre + ", no te preocupes, iremos por ti.")