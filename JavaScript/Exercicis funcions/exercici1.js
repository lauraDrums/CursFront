// 1. Crea una funció que es digui Saludar, que tingui tres argument: nom, cognom, sexe.
// Crida a aquesta funció amb diferents escenaris, per tal d’escriure per pantalla:
// Benvinguda [nom] [Cognoms] si és dona.
// Benvingut [nom] [Cognoms] si és home.
// També, tingues en compte un escenari, per quan no passis a la funció el paràmetre
// sexe.


function saludar(nom, cognom, sexo) {
   switch (sexo) {
       case 'D':
           console.log(`Benvinguda ${nom} ${cognom}`);
           break;

        case 'H':
            console.log(`Benvingut ${nom} ${cognom}`);
            break;
   
       default:
        console.log(`Hola ${nom} ${cognom}`);
           break;
   }
}   

saludar("Juan", "Garcia", "H");
saludar("laura", "lopez", "D");
saludar("Aran", "ruiz", "X");

// 2. Crea una funció que es calculi l’edat d’un gos. Quin parametre podries fer servir?

let hoy = 2022;
var esJoven = false;


function edadDelPerro(fecha) {
    var edad = hoy - fecha;
    console.log("el perro tiene " + edad + "años");

    if (edad < 7) {
        return true;
    } else {
        return false;
    }
}

esJoven = edadDelPerro (1992);
console.log(esJoven);
esJoven = edadDelPerro (2005);
console.log(esJoven);
esJoven = edadDelPerro (2021);
console.log(esJoven);

// 3. Crea una funció on se li pasa 2 números. I que retorni el menor.

let num1;
let num2;


function numMenor(num1, num2) {
    if (num1>=num2) {
        console.log("El segon número es menor");
        return num2
    
    } else if (num1>=num2){
        console.log("el primer número es menor");
        return num1
    } else{
        console.log("els números son iguals");
    } 
}
var numMen;

numMen = numMenor(3, 4);
console.log(numMen);
numMen = numMenor(8, 2);
console.log(numMen);
numMen = numMenor(10, 1);
console.log(numMen);
numMen = numMenor(10, 10);
console.log(numMen);

// 2 manera
function compararValors(val1, val2) {
    menor = Math.min(val1, val2)
    return menor;
}
 var menor;
 menor = compararValors(5,6);
 console.log("el valor mes petit es " + menor);

// 4. Programa en JavaScript una funció on se li passi dos arguments: string1 -frase- i
// string2-frase-, i retorna quants caràcters hi ha en total = string1 + string2.



function numCaracters(palabra1, palabra2) {
     let total = palabra1.length + palabra2.length;
     return total;
}

let palabra1 = "El otro día cené pizza";
let palabra2 = "El jueves fuí a Sevilla";
let totalCaracteres;

totalCaracteres = numCaracters(palabra1, palabra2);
console.log(numCaracters(palabra1, palabra2));


//  5. Analitza e investiga les diferencies entre les següents funcions. Aquesta és una
// pregunta d’entrevista com a JS Developer. (Hoisting)
sumar();
function sumar() {
console.log(2 + 2);
}
// sumar2();
// const sumar2 = function() {
// console.log(3 + 3);
// }

// la variable se tiene que declarar antes de empezar la function, en el segundo caso está inicializaza antes del function y nos sale 'Uncaught ReferenceError: Cannot access before initialization'

// 6. Donada una adreça de correu, implementa una funció que verifiqui si el email té
// carregat el caràcter @.



function validarEmail( adreça ) {
    if ( adreça.includes('@')) {
        console.log("la Adreça es valida");
        return true;
    } else{
        console.log("La adreça no es valida");
        return false
    }
}

let adreça = "lauratama@gmail.com"
validarEmail(adreça);

// 7. Defineix una frase e implementar les funcions següents:
// a. Funció per Imprimir la primera meitat dels caràcters de la cadena.
// b. Funció per Imprimir el darrer caràcter.
// c. Funció per Imprimir-ho en forma inversa.
// d. Funció per Imprimir cada caràcter del String separat amb un guió.
// e. Funció per Imprimir la quantitat de vocals sense accents emmagatzemades.

// .lengh entre 2 i redondear slice a)



function dividirFra(fraseDiv) {
    let divisioFra = Math.floor(fraseDiv.length/2)
    let resultado = fraseDiv.slice(0, divisioFra);
    // let resultado = fraseDiv.slice(divisioFra); ---> Per agafar la ultima part de la frase
    return resultado;
}

let fraseDiv = "Voy a tomar caracoles para cenar"
console.log(dividirFra(fraseDiv));

// b)  Funció per Imprimir el darrer caràcter.

// var imprimirDarrerCar = "Anirem a pescar";
// console.log(imprimirDarrerCar .slice(-1));



function imprimirDarrerCar (fraseDarrer) {
    let ultimaPa = fraseDarrer.slice(-1);
    return ultimaPa;
}

let fraseDarrer = "Anirem a pescar"

;
console.log(imprimirDarrerCar(fraseDarrer));

// c. Funció per Imprimir-ho en forma inversa.

function imprimirRever (fraseRever) {
    let reverse = fraseRever.split('').reverse().join('');
    return reverse;
}

let fraseRever = "Anirem a pescar"

;
console.log(imprimirRever(fraseRever));

// d. Funció per Imprimir cada caràcter del String separat amb un guió.

function separatGuio(paraulaGuio) {
    let guio = paraulaGuio.split('').join('-');
    return guio;
}

let paraulaGuio = "Vaig comprar quatre cases"
console.log(separatGuio(paraulaGuio))

// e. Funció per Imprimir la quantitat de vocals sense accents emmagatzemades.




