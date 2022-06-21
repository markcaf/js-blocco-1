// Crea un array vuoto, chiedi all'utente di inserire un numero per 7 volte.
// Se il numero è dispari inseriscilo nell'array vuoto.

let numbers = [];
let userNumber;

for (i=0; i<7; i++){
    userNumber = parseInt(prompt("Inserisci un numero " + "(" + i + ")"));
    while (isNaN(userNumber)){
        userNumber = parseInt(prompt("Inserisci un NUMERO! " + "(" + i + ")"));
    }

    if ((userNumber % 2) != 0){
        numbers.push(userNumber);
    }
}

console.log("Array riempito con i numeri dispari: " + numbers);
