'use strict';

// asignar una variable
/*
var nicknameUsuario = "Stricker"

console.log(typeof nicknameUsuario)
*/
//Uso del Var 

/*
console.log(likesPost);
var likesPost;

if (true) {
    var likesPost = 3;
}
console.log(likesPost);

// asignar una variable
let nicknameUsuario = "Yoshi"
let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
nicknameUsuario = "Toshi"
puntosDeVida = 900

console.log(nicknameUsuario+" "+puntosDeVida);
*/
//Uso del Let
/*
// asignar una variable
let nicknameUsuario = "Yoshi"
let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
nicknameUsuario = "Toshi"
puntosDeVida = 900

console.log(nicknameUsuario+" "+puntosDeVida);
*/
// Uso del Const
/*
// asignar una variable
let nicknameUsuario = "Yoshi"
let puntosDeVida
// no se puede declarar una variable con el mismo nombre
// let nicknameUsuario = "Toshi"
nicknameUsuario = "Toshi"
puntosDeVida = 900

console.log(nicknameUsuario+" "+puntosDeVida);
'use strict';
*/
// Uso del var
// var estado = true
// if (estado) {
//     var estado = false
// }
// console.log(estado)
// for (var i = 0; i < 10; i++) 
// {
//     console.log(i)
// }
// console.log(i)


// Uso del let
// let estadoUno = true
// if (estadoUno) {
//     let estadoUno = false
//     console.log(estadoUno)
// }
// console.log(estadoUno)

// for (let i = 0; i < 10; i++) 
// {
//     console.log(i)
// }
// console.log(i)



// Uso del const
// const estadoDos = true
// if (estadoDos) {
//     const estadoDos = false
//     console.log(estadoDos)
// }
// console.log(estadoDos)

// const i
// for ( i = 0; i < 10; i++) {
//     console.log(i)
// }

// ---------------------------

/*
let nombreJuego = "Mario Kart"
let tipoJuego = 'Carreras'

console.log(nombreJuego,tipoJuego);
*/
// Crear Strings 
/*
let nombreJuego = " Mario Kart "

console.log("Número de letras:",nombreJuego.length);
console.log("Encontrar alguna palabra:",nombreJuego.includes("Kart"));
console.log("Convertir a mayúsculas:",nombreJuego.toUpperCase());
console.log("Convertir a minusculas:",nombreJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás:",nombreJuego.trim());
console.log("Reemplazar una palabra:",nombreJuego.replace('Kart','Kart-Rider'));
console.log("Cortar un texto:",nombreJuego.slice(1,6));
console.log("Cortar un texto:",nombreJuego.substring(1,6));
console.log("Cortar un texto:",nombreJuego.charAt(1));
console.log("Repetir un texto:",nombreJuego.repeat(2));
console.log("Dividir un texto:",nombreJuego.split(" "));
*/
//Métodos de los Strings 
/*
const name = "Byron"
const lastName= "Loarte"
const city ="Quito"
const age = 34
const active = false
console.log(name+"-"+lastName+"-"+city)
console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);
*/

// ----------------------------------------

//Operadores 
/*
// Es importante reconocer el tipo de valor asignado
const numeroVidas = "20"
const numeroPuntos = 20

console.log(numeroPuntos,numeroVidas);
console.log(typeof(numeroPuntos), typeof(numeroVidas));

console.log("suma:",numeroPuntos+20);
console.log("resta:",numeroPuntos-20);
console.log("multiplicación:",numeroPuntos*20);
console.log("división:",numeroPuntos/20);
console.log("módulo:",numeroPuntos%20);


// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20

console.log(++numeroPuntosActual );
console.log(numeroPuntosActual++);

let numeroVidasActual = 20

console.log(--numeroVidasActual);
console.log(numeroVidasActual--);
*/
//Método Math
/*
const numeroPuntos = 20
console.log(Math);
console.log(Math.PI);
console.log(Math.round(2.43));
console.log(Math.sqrt(25));
console.log(Math.abs(-450));
console.log(Math.pow(2,5));
console.log(Math.min(10,4));
console.log(Math.max(58,-4));
console.log(Math.round(Math.random()*20));
*/
// Orden de precedencia de los operadores
/*
'use strict';
console.log(3 + 4 * 5)
console.log(4 * 3 ** 2)
console.log(200 * 0.2)
console.log(200 * 1.12)
*/
//Conversion
/*
let edadJugador = "20"
let precioJuego = "525.63"

console.log(Number.parseInt(edadJugador));
console.log(Number.parseFloat(precioJuego));

console.log(Number.isInteger(edadJugador));

console.log(`${+edadJugador + +precioJuego}`);
*/

// ---------------------

//Operadores relacionales
/*
// operadores de asignación 
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000
let estadoCuenta
let emailConfirmado=null


// operadores de asignación de adición
saldoTarjetaUsuario += 100
console.log(saldoTarjetaUsuario);

// operadores de comparación
saldoTarjetaUsuario="1000"
console.log(saldoTarjeta == saldoTarjetaUsuario)
// evalua tipo de dato y contenido
console.log(saldoTarjeta === saldoTarjetaUsuario)

console.log(estadoCuenta === emailConfirmado);


// operadores aritméticos
console.log(saldoTarjeta + Number.parseInt(saldoTarjetaUsuario));


// operadores lógicos 
console.log(saldoTarjeta != saldoTarjetaUsuario);
// evalua tipo de dato y contenido
console.log(saldoTarjeta !== Number.parseInt(saldoTarjetaUsuario));
*/
//Operador Ternario
/*
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000

const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo"
console.log(respuesta);
*/

///--------------------------

//Condicion Simple
/*
const carritoCompras = []

// utilizando el condicional clásico
if (carritoCompras.length===0)
{
    console.log("Agregar productos")
}

// utilizando operador ternario
carritoCompras.length===0 ? console.log("Agregar productos") :""
*/
//Condicion Doble
/*
const carritoCompras = []

// utilizando el condicional clásico
if (carritoCompras.length===0)
{
    console.log("Agregar productos")
}

// utilizando operador ternario
carritoCompras.length===0 ? console.log("Agregar productos") :""
*/
// Condicion Anidada
/*
const carritoCompras = ['Tv','Pc','Tablet','Laptop']

// utilizando el condicional clásico

if (carritoCompras.length >=4)
{
    console.log("Descuento del 20%");
}
else if (carritoCompras.length >= 5)
{
    console.log("Descuento del 40%");
}
else if (carritoCompras.length >= 8)
{
    console.log("Descuento del 70%");
}
else {
    console.log("No existe descuento");
}

// utilizando operador ternario
carritoCompras.length >=4 ? console.log("Descuento del 20%") : carritoCompras.length >= 5 ? console.log("Descuento del 40%") :carritoCompras.length >= 8 ? console.log("Descuento del 70%") : console.log("No existe descuento")
*/
// Condicion Multiple
/*
const actividadSiri = 2

switch (actividadSiri) {
    case 1:
        console.log("Prender el equipo");
    break;
    case 2:
        console.log("Prender la tv");
    break;
    case 3:
        console.log("Cerrar cortinas");
    break;
    default:
        console.log(`No existe tarea para la actividad ${actividadSiri}`);
    break;
}
*/
// Bucle For
/*
const contador = 10

for (let i = contador; i >= 0; i--) {
    
    i <=0 ? console.log("Comida lista"):console.log(i);
}
*/
// Bucle While
/* 
let contador = 10
while (contador >= 0)
{
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
}
*/
//Bucle Do While
/* 
let contador = 10

do {
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
} while (contador >= 0);
*/
//foreach forof forin map
/*
const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
const usuario ={
    nombre:"Byron",
    apellido:"Loarte",
}

// uso del forEach 
tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of tareasPendientes) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}
for (const [clave,valor] of Object.entries(usuario)) {
    console.log(`${clave} - ${valor}`)
}


// uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);
*/







/*



OBJECTS


*/


//Acceder a sus claves.
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}
console.log(user.state);
console.log(user.sendMail());
console.log(user.sendNotification());
*/
//Agregar y eliminar propiedades al objeto.
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}

// Agregar un par de clave y valor al objeto
user.image ="t.ly/Rhgs"

// Eliminar un par de clave y valor del objeto
delete user.state

console.log(user);
*/

//--------------------------------

//Destructuracion de un objeto
/*
'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        streets:
        {
            principal: "Quitumbe Ñan",
            secondary:"Huayanay Ñan"
        }
    }
}

// const {name,lastName,age,address} = user
// console.log(name,lastName,age,address);

// const {name,lastName,age,myAddress=user.address} = user
// console.log(name,lastName,age,myAddress);

// const {name,lastName,age,address:{streets}} = user
// console.log(name,lastName,age,streets);

// const {name,lastName,...res} = user
// console.log(name,lastName,res);
*/

//--------------------------

// Uso de Freeze
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    }
}

Object.freeze(user)
console.log(Object.isFrozen(user));
user.image ="t.ly/Rhgs"
*/
// Uso de Seal
/*
'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    }
}

// con seal no se puede agregar o eliminar propiedades, pero 
// si se puede modificar las propiedades
Object.seal(user)
console.log(Object.isSealed(user))
user.age= 35
console.log(user);
*/

// ----------------------------------

// Spread Operator
/*
'use strict';
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34
}

const extraInformation = {
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[3]}`
    }
}

const allInformation = {...user,...extraInformation}
console.log(allInformation)
*/

// Uso del This
/*
const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}` //This se utiliza cuando tengo una funcion declarada
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log(user.sendMail());
// Va a provocar un error cuando se trabaje con arrow functions
// console.log(user.sendNotification())
*/
//Trabajar con objetos
/* 
'use strict';

const user = {
    name:"Byron",
    lastName:"Loarte",
    age:34,
    address:{
        city:"Quito",
        telephone:"0995644186",
        street:"Quitumbe Ñan"
    },
    Friends:['Peter','Mike','Camila','Joe'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`
    },
    sendNotification: ()=>{
        return `send notification to ${this.Friends[3]}`
    }
}

console.log("Obtener las claves:",Object.keys(user))
console.log("Obtener los valores:",Object.values(user))
console.log("Obtener las claves y valores en un array:",Object.entries(user))
*/
//----
/*
const name ="laptop"
const price = 3000

const newProduct = {
    name,
    price
}

console.log(newProduct);
*/
