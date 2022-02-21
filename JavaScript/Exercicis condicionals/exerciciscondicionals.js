// Imagina’t que vols fer el pagament del carrito de la compra.
// Donades 2 variables totalCarrito, cashDisponible, comprova si tens prou cash
// per pagar el total del carret.

let totalCarrito = 300;
let cashDisponible = 250;

if (totalCarrito <= cashDisponible) {
    console.log("pot pagar");
} else{
    console.log("no pot pagar");
}

// Imagina’t que en la teva botiga els usuaris poden tenir 3 roles:
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