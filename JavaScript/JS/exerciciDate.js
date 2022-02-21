const event = new Date('August 19, 1975 23:15:30');
event.setDate(24);
console.log(event.getDate()); // expected output: 24

// Calcula els milisegons que falten fins al dia del teu aniversari.
// let elMeuAniversari = new Date("1994, 09, 17, 15:15:00");
// /* Conseguimos los datos del momento actual (Ahora) */
// var now= new Date(); // Conseguimos los datos de Ahora
// var nowday= now.getDay();  // Que dia estamos
// var nowhour= now.getHours();  // Hora actual
// var nowminute= now.getMinutes(); // Minuto actual
// var nowsecond= now.getSeconds();  // Segundo actual


// let hoy = new Date("1994    , 09, 17, 15:15:00")
// let elMeuAniversari = new Date("1994, 09, 17, 15:15:00");

// EXERCICI 1 DATE

var avui = Date.now();
var elMeuCumple = new Date("2022/10/17");


var difference = elMeuCumple.getTime()- Date.now();
var dies = (difference / 100) * 60 * 60 * 24 ;

document.write(difference);
document.write(dies);

console.log("Falten " + difference + " milisegons per al meu aniversari");
console.log("Falten " + dies + " dies per al meu aniversari");

//EXERCICI 2

var horaActual = new Date();
console.log ("data " + horaActual.toDateString());

var hores = horaActual.setHours(26);
console.log ("26 hores " + hores());

var minuts = horaActual.setMinutes(65);
console.log ("65 minuts " + minuts())


var dies = horaActual.setDate(35);
console.log ("35 dies " + dies())
