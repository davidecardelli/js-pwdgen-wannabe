console.log('JS OK');

// Chiediamo all'utente il suo nome, cognome e colore preferito
// e usiamo questi dati per creare una password che termini con il numero 21


/*
1. Prendere da index.html
2. Chiedo nome utente
4. Chiedo cognome utente
6. Chiedo colore preferito
9. Inserisco nome utente + cognome utente + colore preferito ed aggiungo 21
10. Stampo in index.html
*/


// Prendo elemento da index.html

const passwordElement = document.getElementById('password');


// Chiedo nome utente

const firstName = prompt('Qual è il tuo nome?')


// Chiedo il cognome utente

const lastName = prompt('Qual è il tuo cognome?')


// Chiedo il colore preferito

const favColor = prompt('Qual è il tuo colore preferito?')


// Stampo pw in pagina

document.getElementById('password').innerText = "La tua password è: " + firstName + lastName + favColor + "21";

