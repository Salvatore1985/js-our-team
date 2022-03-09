/**
 * Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti
 *  che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni:
 Nome, Ruolo e Foto.

 MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
trasformare la stringa foto in una immagine effettiva
BONUS 2:
organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
 */
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/* MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto */
//*STAMPO IN CONSOLE TUTTI GLI ELEMENTI DELL'ARRAY 
console.log(team);

//*STAMPO IN CONSOLE TUTTI I SINGOLI ELEMENTI DELL'ARRAY 
console.log(team[0]);
console.log(team[1]);
console.log(team[2]);
console.log(team[3]);
console.log(team[4]);
console.log(team[5]);

//*STAMPO IN CONSOLE CON UN "CICLO IN" TUTTI I SINGOLI ELEMENTI DELL'ARRAY 
for (const chiave in team) {
    console.log(team);
}



/* createGridSquare = (myClass) */


/**
 * Arrow function che restituisce un div di square sotto forma di elemento del DOM
 * @param {*} myClass la classe che vogliamo aggiungere al "div"
 * @returns 
 */
const createGridSquare = (myClass) => {
    const currentElement = document.createElement("div");
    // inseriamo tutto il necessario per ogni square

    currentElement.classList.add(myClass);
    return currentElement;
};
