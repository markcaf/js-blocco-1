// Chiedo per 10 volte all'utente di inserire un numero

// Dichiaro le variabili numero, somma e media
let userNumber;
let somma = 0;
let media = 0;

for (i=0; i<10; i++){
    userNumber = parseInt(prompt("Inserisci un numero " + "(" + i + ")"));
    somma = somma + userNumber;
}

console.log("La somma dei numeri da te inseriti è: " + somma);

media = somma / 10;

console.log("La media è: " + media);
