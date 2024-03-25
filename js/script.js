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






/*
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
*/





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

/*
const students = [
    {
        Id: '213',
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        Id: '110',
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        Id: '250',
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        Id: '145',
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        Id: '196',
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        Id: '102',
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        Id: '120',
        name: 'Francesca da Polenta',
        grades: 84,
    },
];
console.log(students);

//lista con nomi in maiuscolo (ho tolto le graffe e usato una sintassi più sinteitca)
const studentsUp = students.map((element) => element.name.toUpperCase());
console.log(studentsUp)


//lista con voti > 70
const grades = students.filter((element) => element.grades >= 70);
console.log(grades);


//lista con voti maggiori di 70 e ID maggiore di 120.
const idBig = students.filter((element) => element.grades >= 70 && element.Id >= 120);
console.log(idBig)
*/




/*
//Snack 3************************************************************************************************
const bicycles = [
    {
      nome: "Bianchi Oltre XR4",
      peso: 7.8, // in kg
    },
    {
      nome: "Trek Émonda SLR",
      peso: 6.8, // in kg
    },
    {
      nome: "Specialized Tarmac SL7",
      peso: 7.2, // in kg
    },
    {
      nome: "Cannondale SuperSix EVO Hi-Mod",
      peso: 8.1, // in kg
    },
    {
      nome: "Pinarello Dogma F12",
      peso: 7.4, // in kg
    },
    {
      nome: "Colnago V3Rs",
      peso: 7.1, // in kg
    },
    {
      nome: "Canyon Aeroad CFR",
      peso: 7.9, // in kg
    },
    {
      nome: "Giant Propel Advanced SL",
      peso: 7.5, // in kg
    },
    {
      nome: "Orbea Orca OMX",
      peso: 7.7, // in kg
    },
    {
      nome: "BMC Teammachine SLR01",
      peso: 7.3, // in kg
    },
  ];

//creo una variabile (che in questo caso è un oggetto) estratto dall'aray bicycles... lo userò come riferimento di partenza
  let total = bicycles[0];
//   console.log(total.peso);


//uso il ciclo "for of" per iterare l'array di oggetti e cercare la proprietà .peso più bassa 
for(let bici of bicycles){
    if(bici.peso < total.peso){
        total = bici
    }
  };

const {nome, peso} = total;


console.log(`La bici di nome  ${nome} è la più leggera.
Il suo peso, infatti, equivale a ${peso} kg.`);

const minorB = document.createElement('h3');
minorB.classList.add('p-5')
document.body.appendChild(minorB);

minorB.innerHTML = `
La bici di nome  ${nome} è la più leggera.
Il suo peso, infatti, equivale a ${peso} kg.
`;
*/






/** snack 4****************************************************
 */

const soccerClub = [
    {
        name: "Juventus",
        points: 0,
        fouls: 0,
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0,
    },
    {
        name: "Milan",
        points: 0,
        fouls: 0,
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0,
    },
    {
        name: "Akragas",
        points: 0,
        fouls: 0,
    },
    {
        name: "Palermo",
        points: 0,
        fouls: 0,
    },
    {
        name: "Lazio",
        points: 0,
        fouls: 0,
    },
    {
        name: "Sampdoria",
        points: 0,
        fouls: 0,
    },
    // Aggiungi altre squadre come sopra
];


const addNums = soccerClub.map((el) => {
    let obj = {
        name: el.name,
        points: getRndInteger(1, 15),
        fouls: getRndInteger(1, 15)
    }
    return obj
});
//nuova array modificata...
console.log(addNums);








