// 1. Imagina’t que vols fer el pagament del carrito de la compra.
// Donades 2 variables totalCarrito, cashDisponible, comprova si tens prou cash
// per pagar el total del carret.

let totalCarrito = 300;
let cashDisponible = 250;

if (totalCarrito <= cashDisponible) {
    console.log("pot pagar");
} else{
    console.log("no pot pagar");
}

//2.  Imagina’t que en la teva botiga els usuaris poden tenir 3 roles:
// • ADMIN: El Usuario puede editar, eliminar y ver toda la información
// • EDITOR: El usuario solo puede editar sus registros
// • AUTOR: El usuario solo puede registrar usuarios
// • ANOMYMOUS: El Usuario es visitante, solo puede ver la información
// Controla les accions que poden fer cadascún d’ells amb un if

let rol = "admin";


if (rol == 'admin') {
    console.log("El Usuario puede editar, eliminar y ver toda la información");
} else if (rol == editor) {
    console.log("El usuario solo puede editar sus registros");
} else if (rol == autor) {
    console.log("El usuario solo puede registrar usuarios");
} else{
    console.log("El Usuario es visitante, solo puede ver la información");
}

switch (rol) {

    case 'admin':
        console.log("El Usuario puede editar, eliminar y ver toda la información");
         break;
    
    case 'editor':
        console.log("El usuario solo puede editar sus registros");
         break;

    case 'autor':
        console.log("El usuario solo puede registrar usuarios");
         break;

    default:
        console.log("El Usuario es visitante, solo puede ver la información");
        break;
}

// 3. Quina és la millor estructura de control per diferenciar les funcionalitats de les
// formes de pagament d’una compra, tenint les següents opcions: efectiu, codi
// promocional, tarjeta. Escriu la estructura de control més adecuada.

let funcionalitats = 'efectiu';

switch (funcionalitats) {
    case 'efectiu':
        console.log("el client ha pagat en efectiu " + funcionalitats);
        break;

    case 'cheque':
        console.log(" El client ha pagat amb cheque" + funcionalitats);
        break;    

    default:
        console.log("el client ha pagat en tarjeta");
        break;
}

//4.  Per un pagament s’han de donar TOTES les opcions:
// 1. Que tingui cash
// 2. Que la compra sigui més gran que 100€

let cash = 100;
let compra = 150;

if (cash>=compra) {
    console.log("el pagamet es pot realitzar");

// }else if (!cash) {
//     console.log("el pagamet no s'ha pogut realitzar");

}else {
    console.log("el pagamet no s'ha pogut realitzar");
}

// 5. Fes l’anterior exercici fent servir l’operador ternari



let prova = (cash>=compra) ? 'el pagamet es pot realitzar' : "el pagamet no s'ha realitzat";
console.log(prova);

// 6. Demana una nota (número). Mostra qualificació segons nota:
// 0-3: Mol deficient
// 3-5: Insufficient
// 5-6: Sufficient
// 6-7: Bé
// 7-9: Notable
// 9-10: Excel·lent

let nota = 2;
let calificacion;

switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
        calificacion = "Molt deficient"
        // console.log( "Molt deficient ");
        break;

    case 3:
    case 4:
        calificacion = "Insufficient"
        // console.log("Insufficient");
        break;

    case 5:
        calificacion = "Suficient"
        // console.log("Suficient");
         break;

    case 6:
        calificacion = "Bé"     
        // console.log("Bé");
        break;

    case 7:  
    case 8:  
    calificacion = "Notable" 
        // console.log("Notable");
        break;

    default:
        calificacion = "Excel.lent"
        // console.log("Excel.lent");
        break;
        
}
console.log("has obtenido un " + nota + ", la teva nota es " + calificacion);

//7.  Compara aquests dos condicionals ... quina és la diferencia?
// const age = '18';
// if (age === 18) console.log('You just became an adult :D ');
// if (age == 18) console.log('You just became an adult :D ');


const age = '18';
if (age === 18) console.log('You just became an adult :D '); /* Aquest es del mateix valor i tipus (no entra xq el 18 de age es un string)*/
if (age == 18) console.log('You just became an adult :D '); /* Aques nomes te el mateix valor (entra perque el == nomes mira el valor)*/

// 8. Imagina’t que en la teva botiga tens les següents variables:
// let efectivo;
// let credito;
// let disponible = efectivo + credito;
// let totalCarrito;
// Programa un codi, que mostri als clients un missatge amb les formes de
// pagament que té disponibles en funció dels següents escenaris:
// escenari 1: “Pots comprar en efectiu o amb crèdit”
// let efectivo = 1000;
// let credito = 1000;
// let disponible = efectivo + credito;
// let totalCarrito = 700;
// escenari 2: “Pots comprar fent us d’efectiu i crèdit”
// let efectivo = 300;
// let credito = 400;
// let disponible = efectivo + credito;
// let totalCarrito = 700;
// escenari 3: “No disposes de saldo disponible per fer la compra”
// let efectivo = 300;
// let credito = 400;
// let disponible = efectivo + credito;
// let totalCarrito = 900;


// Programa un codi, que mostri als clients un missatge amb les formes de
// pagament que té disponibles en funció dels següents escenaris:
// escenari 1: “Pots comprar en efectiu o amb crèdit”

let efectivo = 1000;
let credito = 1000;
let disponible = efectivo + credito;
let carritoTotal = 2050;


if ((efectivo>=carritoTotal) || (credito>=carritoTotal)) {
    console.log('Pots comprar en efectiu o amb crèdit');
} else if (disponible>=carritoTotal) {
    console.log('Pots comprar en efectiu i amb crèdit');
} else {
    console.log('No disposes de saldo disponible per fer la compra');
}

// // escenari 2: “Pots comprar fent us d’efectiu i crèdit”
// let efectivo = 300;
// let credito = 400;
// let disponible = efectivo + credito;
// let totalCarrito = 700;

// // escenari 3: “”
// let efectivo = 300;
// let credito = 400;
// let disponible = efectivo + credito;
// let totalCarrito = 900;

