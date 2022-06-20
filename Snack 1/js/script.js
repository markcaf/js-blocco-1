const numberOne = parseInt(prompt("Inserisci il primo numero"));
console.log("Primo numero: " + numberOne);

const numberTwo = parseInt(prompt("Inserisci il secondo numero"));
console.log("Secondo numero: " + numberTwo);

if (numberOne > numberTwo){
    console.log("Il numero maggiore è il primo: " + numberOne);
    } else if(numberTwo > numberOne){
        console.log("Il numero maggiore è il secondo: " + numberTwo);
        } else {
            console.log("I due numeri sono uguali");
            }