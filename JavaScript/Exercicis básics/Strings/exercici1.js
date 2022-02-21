

// També es pot posar nomes Trim i t'ho fa als dos costats (producto.trim();)

// Exercici 1
// Et treu els espais
var producto = "      Monitor 20 pulgadas    ";
producto.trimStart();
producto.trimEnd();

console.log(producto.trimEnd());
console.log(producto.trimStart());
producto = producto.trim();

console.log(producto.trim().length);

// Exercici 2
// 2.A
// Et remplaça el 20 pel 40
let ordinador = "Monitor 20 pulgadas";

ordinador = ordinador.replace("20", "40").replace("pulgadas", "'");

console.log(ordinador);

// 2.B
// La forma que he hecho yo está correcta pero se tenía que hacer con indexOf
// let extreure = "Monitor 40 pulgadas";
// extreure = extreure.split(" ").slice(-2).join(" ");
// console.log(extreure);

descProducto = "Monitor 40 ' ";      
let posicionPulgadas= descProducto.indexOf("40 '")
let pulgadas = descProducto.slice(posicionPulgadas);
console.log("pulgadas " + pulgadas); 



// 2.C
// Treure nitor 40 pero amb indexOf, jo ho he fet bé però es tenia que fer amb indexOf
// let extreu2 = "Monitor 40 pulgadas";
// extreu2 = extreu2.slice(2, 10);
// console.log(extreu2);


descProducto = 'Monitor 20 Pulgadas';
posicionInicio = descProducto.indexOf("nitor 20");
posicionFinal = descProducto.indexOf("Pulgadas");
 nitor= descProducto.slice(posicionInicio, posicionFinal); // Escribe desde donde encuentra la palabra hasta donde encuentra pulgadas
console.log(" cadena Encontrada: "  + nitor); // cortar desde 2 hasta el 10





// 2.D
let nom = "Laura";
let guardarlletra = nom.slice(0, 1);
console.log(guardarlletra);



// Exercici 3
// To separa o desde els espais com el primer cas o en Comes, et fa una llista
let actividad ="Estoy aprendiendo JavaScript moderno";
actividad = actividad.split(" ") 
console.log(actividad);

let hobbies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
hobbies = hobbies.split(", ")
console.log(hobbies);

// Exercici 4
// Ho converteix tot a majúscules

let producto2 = "Monitor 20 pulgadas";
producto2 = producto2.toUpperCase();
console.log(producto2);

// Exercici 5
// Ens diu en quina posició comença la paraula que introduïm

// let frase = prompt("Ingrese una oración:");
// document.write( frase + '<br><br>');

// let paraula = prompt("Ingrese una palabra:");
// document.write( paraula + '<br><br>')

// let dondeEsta = frase.indexOf(paraula);
// console.log("Donde está " + dondeEsta);


