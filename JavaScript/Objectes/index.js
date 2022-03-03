// 1. Defineix un objecte producte, amb els següents atributs: id, name, price, type i
// assignalis valors.
// • Ojo amb el valor id
// • El type seria el tipus de producte, per exemple si estem a una botiga podria
// ser: clothes, beauty, mejar ....
// Crea diferents objectes amb valors diferents.
// Accedeix a la propietat name del objecte1, fes el mateix amb l’objecte2....

const producte1 ={
    id: 1,
    name: "bolso",
    price: 20,
    type: "comlemento"
}

const producte2 ={
    id: 2,
    name: "sandalias",
    price: 15,
    type: "zapatos"
}

const producte3 ={
    id: 3,
    name: "shirt",
    price: 10,
    type: "camisetas"
}

console.log(producte1.name);
console.log(producte2.name);
console.log(producte3.name);

// nos devolverá un array con los keys del objeto
console.log(Object.keys(producte1));
// nos devolverá un array con los valores del objeto
console.log(Object.values(producte2));
// Entries nos va a retornar una matriz de llaves y valores
console.log(Object.entries(producte3));

// 2. Defineix l’objecte subTotal, amb un únic atribut que serà el type del objecte producte.
// Aquest tipus tindrà un objecte aniuat que tindrà els atributs value, quantitat i
// discount. Assignali valors.

const subTotal ={
type: {
value: 20,
quantitat: 1,
discount: 10
}
};

console.log(subTotal.type.discount);
console.log(subTotal.type.value);
console.log(subTotal.type.quantitat);

// Crea l’objecte carList, que per defecte està buit.
// Accedeix a l’objecte.

carList ={

}

console.log(carList);