/**
 * 
    A partire da un array di stringhe,
    crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */

const names = ["pippo", "TOPOLINO", "Paperino", "sora", "riku", "KAIRI"];
console.log(names);

const capitalizeNames = names.map( (element) => {
    const lower = element.toLowerCase();
    return element.charAt(0).toUpperCase() + lower.slice(1);
})
console.log(capitalizeNames);