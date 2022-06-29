/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà:
marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina, 
nel secondo solo le auto a diesel, 
nel terzo il resto delle auto.

Infine stampa separatamente i 3 array. */

const automobili = [
    {
        marca: "audi",
        modello: "a3",
        alimentazione: "benzina",
    },

    {
        marca: "clio",
        modello: "b83",
        alimentazione: "diesel",
    },

    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "gpl",
    },

    {
        marca: "fiat",
        modello: "500",
        alimentazione: "gpl",
    },

    {
        marca: "mercedes",
        modello: "classe 1",
        alimentazione: "benzina",
    },

    {
        marca: "botomobile",
        modello: "batman",
        alimentazione: "elettrico",
    },

    {
        marca: "sconosciuta",
        modello: "falso",
        alimentazione: "metano",
    },

    {
        marca: "la meglio",
        modello: "spettacolo",
        alimentazione: "benzina",
    },

    {
        marca: "abarth",
        modello: "b2",
        alimentazione: "diesel",
    },

    {
        marca: "ferrari",
        modello: "spider",
        alimentazione: "benzina",
    }
];

console.log(automobili);

const alimentazioneBenzina = automobili.filter( (element) => {
    if (element.alimentazione ==="benzina"){
        return true;
    }
});
console.log(alimentazioneBenzina);

const alimentazioneDiesel = automobili.filter( (element) => {
    if (element.alimentazione ==="diesel"){
        return true;
    }
});
console.log(alimentazioneDiesel);

const alimentazioneOthers = automobili.filter( (element) => {
    if ( (element.alimentazione != "diesel") && (element.alimentazione != "benzina")){
        return true;
    }
});
console.log(alimentazioneOthers);