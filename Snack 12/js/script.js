/**
 * 
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase
con il nome e cognome e l'indicazione se può guidare,
in base all'età.
 * 
 */

const people = [
    {
        nome: 'marco',
        cognome: 'cafasso',
        anni: 25,
    },

    {
        nome: 'luca',
        cognome: 'esposito',
        anni: 15,
    },

    {
        nome: 'giada',
        cognome: 'rapello',
        anni: 16,
    },

    {
        nome: 'federica',
        cognome: 'raimondi',
        anni: 25,
    },
];

const newArray = people.map((element) => {
    return `${element.nome} ${element.cognome} ${element.anni >= 18}`;
});

console.log(newArray);