// 1. Donada la següent promesa.
const paises = [];
const nuevoPais = pais => new Promise( resolve => {
setTimeout(() => {
paises.push(pais);
resolve(`Agregado: ${pais}`)
}, 3000);
});
// Fent servir promeses, agrega cada 3 segons un país: Alemania, Francia, Inglaterra,
// Italia. Capturar errors no controlats.

nuevoPais("Alemanya");
.then((result) => {
    
}).catch((err) => {
    
});