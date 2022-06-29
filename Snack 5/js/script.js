/* 
 * Dare la possibilità di inserire due parole. Verificare tramite 
 * una funzione che le due parole abbiano la stessa lunghezza. 
 * Se hanno la stessa lunghezza, stamparle entrambe 
 * altrimenti stampare la più lunga delle due.
*/



function verificaLunghezzaTraDueParole (parola1, parola2){
    let result = "";
    if (parola1.length > parola2.length){
        result = "La parola più lunga è: " + parola1;
        } else if (parola2.length > parola1.length){
            result = "La parola più lunga è: " + parola2;
            } else {
                result = "Le due parole hanno la stessa lunghezza: " + parola1 + " " + parola2;
                }
    
    return
}

const primaParola = prompt("Inserisci la prima parola")
console.log("Prima parola: " + primaParola)

const secondaParola = prompt("Inserisci la seconda parola")
console.log("Seconda parola: " + secondaParola)

let risultato = verificaLunghezzaTraDueParole(primaParola, secondaParola);
console.log(risultato);