/**
 * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
 * Chiedi all'utente il suo nome e comunicagli se può partecipare oppure no alla festa.
 */

const invitati  = ['sofia', 'gianna', 'luigina', 'lorenza' ,'luigi', 'stefano', 'simone', 'marco', 'chiara', 'riccardo'];

const userName = prompt("Inserisci il tuo nome");

let control = false;

for ( let i=0; i<invitati.length; i++){
    if (userName === invitati[i]){
        control = "true";
    }
}

if (control === "true"){
    console.log("Puoi entrare, sei nella lista.");
} else{
    console.log("Non puoi entrare, non sei nella lista.");
}