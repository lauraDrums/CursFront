// Supongamos que creamos un carrito de compra
const bossa = [];
// Añadir un elemento al carrito...
const producto = {
nombre: 'Monitor 20 Pulgadas',
precio: 500
}
// Añadir OTRO elemento al carrito...
const producto2 = {
nombre: 'Celular',
precio: 500
}
bossa.push(producto);
bossa.push(producto2);

// “Pop” esborra l’últim element de l’array, decrementa la longitud de l’array i retorna
// l’element que ha estat esborrat. Aquest mètode permet treballar amb l’array com si fos
// una pila.
const elementos = ["flor", "casa", "jardín", "huella"];

elementos.pop();
console.log(elementos);

// shift()
// Elimina el primer element.

const primerEl =[1, 2, 3, 4, 5];

primerEl.shift();
console.log(primerEl);

// splice()
// Permet eliminar elements interns d’un array
// El primer paràmetre especifica la posició.
// El segon argument especifica el número d’elements que s’han d’esborrar. Si no
// passem el segon argument, tots els elements de l’array des de la posició especificada
// fins al final són esborrats. Els elements esborrats, són retornats en un altre array.

const elemInterns = ["agua", "fuego", "aire", "tierra"];


elemInterns.splice(1,2);

console.log(elemInterns);

const lista =[];

for (let i = 0; i < 5; i++) {
   lista.push(i);
   
   
}
console.log(lista);

// forEach()
// Aquest mètode recorre element a element l‘array.
// Ojo, aquest exemple és un array d’objectes, però podria ser un array de números o
// strings.

const carrito = [
{ nombre: 'Monitor 20 Pulgadas', precio: 500},
{ nombre: 'Televisión 50 Pulgadas', precio: 700},
{ nombre: 'Tablet ', precio: 300},
{ nombre: 'Audifonos', precio: 200},
{ nombre: 'Teclado', precio: 50},
{ nombre: 'Celular', precio: 500},
]
// Recorrer un array de la forma tradicional y mostrar su contenido...
for(let i = 0; i < carrito.length; i++ ){
console.log("articulo:" + carrito[i].nombre + "Precio: $ " +
carrito[i].precio);
}
// ForEach
carrito.forEach( function(producto) {
console.log("articulo:" + producto.nombre + "Precio: $ " +
producto.precio);
})

// 1. Funció que rebi dos nombres i retorni un array amb tots els nombres
// compresos entre ells. El programa principal ha de mostrar aquest array per
// consola.

function primerEx(num1, num2) {
    let cadena = [];
    for (let i = num1+1; i < num2; i++) {
    cadena.push(i);  
 }
    return cadena;
}



let num1 = 2;
let num2 = 7;


console.log(primerEx(num1, num2));

// 2. Crea una funció que rebi un array de 5 noms com a paràmetre i retorni un nou
// array amb el número de caràcters de cada nom.


function rebCadena(cadenaCara) {
    let retonaCaracter =[];
    for (let i = 0; i < cadenaCara.length; i++) {
        retonaCaracter.push(cadenaCaracters[i].length);      
    }
    return retonaCaracter;
}
let cadenaCaracters = ["hola", "adeu", "fins Aviat", "ciao", "ey"]

console.log(cadenaCaracters,rebCadena(cadenaCaracters));
console.log(rebCadena(cadenaCaracters));

// 3. Donat el següent array d’objectes
const carret = [{
nombre: 'Monitor 20 Pulgadas',
precio: 500
},
{
nombre: 'Televisión 50 Pulgadas',
precio: 700
},
{
nombre: 'Tablet',
precio: 300
},
{
nombre: 'Audifonos',
precio: 200
},
{
nombre: 'Teclado',
precio: 50
},
{
nombre: 'Celular',
precio: 500
},
{
nombre: 'Bocinas',
precio: 300
},
{
nombre: 'Laptop',
precio: 800
},

];




// a) Mostrar els productes de més de 300€.
carret.forEach(object =>{
    if(object.precio >=300){
        console.log("Productes amb 300 o més: ", object.precio, object.nombre);
    }
});

// b) Mostrar el total a pagar del carrito. (hem de sumar tots els preus.)
var suma=0;

carret.forEach(function(elemento, indice) {
    suma += elemento["precio"];
});
console.log('Todos los precios suman: ' + suma);

// c) Obtenir nous carritos, tenint en compte les següents condicions:
// a. Carrito con Productos con precio > 400

carret.forEach(object =>{
    if(object.precio >400){
        console.log("Productes amb 400: ", object.precio, object.nombre);
    }
});

// b. Carrito con Productos con el nombre ‘Celular'
carret.forEach(object =>{
    if(object.nombre ==="Celular"){
        console.log("Productes amb el nom de: ",  object.nombre);
    }
});


// c. Carrito con todos los excepto ‘Laptop
let last = carret.pop()
console.log(carret);
// d) Comprova que en el carrito no hi hagi algun preu = 0
    if (carret === 0) {
        console.log("hi ha 0");
    } else{
        console.log("no hi ha cap 0");
    }

// 4. Per fer a casa Donat un array de números, el programa ha de mostrar per
// pantalla, l’array amb els nombres ordenats de menor a major

carret.sort();
carret.sort(function(a, b){return b - a});
console.log(carret.sort(function(a, b){return b - a}));

// 5. Per fer a casa. Crea una funció que rebi un array de 5 noms com a paràmetre i
// retoni l’índex del nom més llarg (el programa “principal” haurà d’imprimir per
// consola el nom).

