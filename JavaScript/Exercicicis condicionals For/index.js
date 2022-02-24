// /* 1.	Identifica si un número és parell o imparell amb un for.. */
// let numero=10;

// for (let i = 1; i <= numero; i++) {
//     if (i % 2 == 0) {
//         console.log("Numero " + i + " ES PAR");                
//     } else {                     
//         //OJO: amb ES6 seria:                
//         console.log(`Numero ${i} ES IMPAR `);
//     }
// }

//    /* 2. Crear un programa que lea un número entero y a partir
//         de él cree un cuadrado de asteriscos con ese tamaño. */
//         let requiredNumbe = 8;
//         let i,j;
//         cadena= "";

//         // Create the square with the '*' character
//         for (i = 0; i < requiredNumbe; i++) {
//             // Create the line that we will insert to create the square
//             for (j = 0; j < requiredNumbe; j++) {
//                 //document.write("-");
//                 cadena = cadena + "*";
//             }            
//             cadena = cadena + "\n";
//             //document.write("<br>")
//         }

//         console.log(cadena)

// // Crear un programa que lea un número entero y a partir de él cree un cuadrado
// // de asteriscos con ese tamaño. ( fem servir el debugger ), exemple, numero=5
// // *****
// // *****
// // *****
// // *****
// // *****

// var requiredNum = 5;
// cadena = "";

// for (var i=0; i< requiredNum; i++){
//     for (var j=0; j<requiredNum; j++){
//       document.write("*");
//     }
//       document.write("<br>");
//   }
//  console.log(cadena);

// //  El mateix que l’anterior exercici, però aquesta vegada el numero de files es
// // diferent que al de les columnes. Exemple, files=2, columnes=7
// // *******
// // *******
// var requiredNumb = 2;
// var columnes = 7;
// cadena = "";

// for (var i=0; i< requiredNumb; i++){
//     for (var j= 0; j<columnes; j++){
//       document.write("*");
//     }
//       document.write("<br>");
//   }
//  console.log(cadena);

// //  Fes un programa que demani un número i calculo la seva taula de multiplicar

// var num = window.prompt('insereix un numero');
// var multiplicar = 100;

// for (let i = 0; i <=10; i++) {
//     console.log(` ${num} x ${i} = ${num * i} `)
    
// }

// /* 5.	Codifiqueu un programa que permeti carregar una oració per teclat, després mostrar cada paraula ingressada en una línia diferent.  Per exemple si carrega: El matí és fred.
//     Ha d'aparèixer:
//     El 
//     matí
//     és
//     fred. */

//     let frase = prompt('Introdueix una frase:');

//     for (let f = 0; f < frase.length; f++) {
//         if (frase.charAt(f) == ' ') {
//             document.write('<br>');
//         } else {
//             document.write(frase.charAt(f));
//         }
//     }

//     document.write('<br><br>Ho podem fer amb split ....<br>');
//     let paraules = frase.split(" ");
    
//     for (let j = 0; j < paraules.length; j++) {
//         document.write(paraules[j] + "<br>" );
//     }


// Recorre el següent objecte, mostrant per pantalla el nom del producte
// OJO, amb arrays, ho veurem més endavant.

// const carrito = [{
// id: 1,
// producto: 'Libro'
// },
// {
// id: 2,
// producto: 'Camisa'
// },
// {
// id: 3,
// producto: 'Disco'
// }

const carrito = [{
id: 1,
producto: 'Libro'
},
{
id: 2,
producto: 'Camisa'
},
{
id: 3,
producto: 'Disco'
}
];

for (let index = 0; index < carrito.length; index++) {
   console.log("Agregaste " + carrito[index].producto);
    
}



// Codifiqueu un programa amb un bucle for que permeti comptar el numero de
// vegades que surt una lletra en una frase

var frase = "Cuantas 'A' aparecen en esta frase? Ahora lo veremos"

var indice = [];
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === "a") indice.push(i);
    
}

document.getElementById("resultado").innerHTML = indice.length;

// Fes un programa que mostri el següent per pantalla:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

for (i=1; i<=6; i++){
    for (j=0; j<i; j++){
      document.write("*");
    }
      document.write("<br/>");
  }



