// Crea una funció que es digui Saludar, que tingui tres argument: nom, cognom, sexe.
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

// Crea una funció que es calculi l’edat d’un gos. Quin parametre podries fer servir?

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
