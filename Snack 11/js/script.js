/**
 * 
    Crea un array di almeno 10 oggetti che rappresentano degli animali.

    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */

const animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },

    {
        nome: 'puma',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'lupo',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },

    {
        nome: 'aquila',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },

    {
        nome: 'tigre',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'iena',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },

    {
        nome: 'struzzo',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    }
];

const mammiferi = animali.filter((elemente) => elemente.classe === 'mammiferi');

console.log(mammiferi);
