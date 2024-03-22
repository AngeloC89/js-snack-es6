/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.

*/



/*.map((element, index, array) => {

   }
)*/



//il primo dato è il nome del tavolo, quindi mi creo una costante con il nome del tavolo
const tableName = 'Tavolo Vip';


//poi abbiamo la lista con i nomi degli invitati (array con dentro stringhe) nell'ordine di posto che occuperanno al tavolo (index + 1),
const vipTable = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney', 'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'
];
// console.log(tableName);
// console.log(vipTable);


//usando la funzione map, creiamo una nuova array di oggetti con dentro le caratteristiche richieste dalla tipografia per ogni singolo invitato.
let placeholder = vipTable.map((element, index,) => {
    let newObject = {
        tavolo: tableName,
        nome: element,
        posto: index + 1
    }
    return newObject
}
);

console.log(placeholder)

const list = document.createElement('ul');
list.classList.add('list-group');

// for (let i = 0; i < placeholder.length; i++) per stampare avrei usato un ciclo for che ho sostituito con un forEach
placeholder.forEach(guest => {
    const liEl = document.createElement('li');
    liEl.classList.add('list-group-item');


    liEl.innerHTML = `
Tavolo: ${guest.tavolo}
<br>
Nome: ${guest.nome}
<br>
Posto: ${guest.posto}`;
    list.appendChild(liEl);
});
document.body.appendChild(list);


/**
 
***************************************************************

SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
 */





const students = [
    {
        Id: '213',
        name: 'Marco della Rovere',
        grades: '78',
    },
    {
        Id: '110',
        name: 'Paola Cortellessa',
        grades: '96',
    },
    {
        Id: '250',
        name: 'Andrea Mantegna',
        grades: '48',
    },
    {
        Id: '145',
        name: 'Gaia Borromini',
        grades: '74',
    },
    {
        Id: '196',
        name: 'Luigi Grimaldello',
        grades: '68',
    },
    {
        Id: '102',
        name: 'Piero della Francesca',
        grades: '50',
    },
    {
        Id: '120',
        name: 'Francesca da Polenta',
        grades: '84',
    },
];
console.log(students);


const studentsUp = students.map((element) => {
    return element.name.toUpperCase();

});

console.log(studentsUp)






