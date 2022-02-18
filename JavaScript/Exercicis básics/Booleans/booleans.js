// EXERCICI 1
// Declara una variables anomenada esCorrecte, assigna-li true o false. Utilitza un
// condicional per veure el seu valor.
let esCorrecte = true;

if (esCorrecte) {
    console.log("es verdadera " + esCorrecte);
} else{
    console.log("es falso " + esCorrecte); 
}

// EXERCICI 2
// Declara i assigna dos valors booleans. Programa els següent escenaris:
// a. Escenari 1: Si tots dos valors són certs, el resultat hauria de ser cert. En
// la resta de casos ha de ser Fals.
// b. Escenari 2: Si un dels dos valors és certs, el resultat hauria de ser cert.
// En la resta de casos ha de ser Fals.

let valor1 = true;
let valor2 = true;

if (valor1 && valor2) {
    console.log("es verdadera ");
} else{
    console.log("es falso ");
}

let valor3 = true;
let valor4 = false;

if (valor3 || valor4) {
    console.log("es verdadera ");
} else{
    console.log("es falso ");
}

// EXERCICI 3 
// a) 2 < 12
// b) 2 < "12"
// c) "2" < "12"
// d) !("2" < "12")
// e) ((2 < "12") && (2 == "2"))
// f) (("2" < "12") || (2 < 12))
// g) (("2" < "12") && (2 < 12))

// a)
let a = 2 < 12;
if (a){
    console.log("es verdadera " + a);
}
else{
console.log("es falsa " + a);
}

// simplificant la linea

let nomDelExercici = "a)"
2 < 12 ? (value=true): (value=false);
console.log(`L'exercici ${nomDelExercici} es ${value}`);
// t'imprimeix per pantalla: L'exercici a) es true
// b)

let b = 2 < "12";

if (b) {
    console.log("es verdadera " + b);
} else{
    console.log("es falso " + b);
}

// c) 

let c = "2" < "12";
if (c) {
    console.log("es verdadera " + c);
} else{
    console.log("es falso " + c);
}

// d)

let d = !("2" < "12")
if (d) {
    console.log("es verdadera " + d);
} else{
    console.log("es falso " + d);
}

// e)

let e = ((2 < "12") && (2 == "2"))
if (e) {
    console.log("es verdadera " + e);
} else{
    console.log("es falso " + e);
}

// f)

let f = (("2" < "12") || (2 < 12))
if (f) {
    console.log("es verdadera " + f);
} else{
    console.log("es falso " + f);
}

// g)

let g = (("2" < "12") && (2 < 12))
if (g) {
    console.log("es verdadera " + g);
} else{
    console.log("es falso " + g);
}


const rolePago = false;
if (!rolePago) {
console.log('No tienes el role para hacer el pago');
}else{
    console.log("estoy aqui ");
}

