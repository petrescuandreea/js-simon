/*

TRACCIA: Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

// 1. creo una funzione che mi generi 5 numeri casuali
// 2. invoco la funzione 
// 3. stampo i numeri in html 
// 4. faccio partire un timer di 30 secondi 
    // chiedo all'utente per 5 volte di inserire i numeri visualizzati
    // inserisco i numeri in un array 
        // scorro l'array di numeri inseriti dall'utente 
            // se sono inclusi nell'array iniziale
                // stampo i numeri presenti 
            // altrimenti 
                // dico all'utente che non ha indovinato nessun numero 




// SELEZIONE ELEMENTI UTILI  
let numbers = document.querySelector(".numbers");
let inputNumbers = document.getElementById("user-numbers");
let pcNumbers = document.getElementById("pc-numbers");
let hiddenText = document.getElementById("hidden");


// INVOCO LA FUNZIONE CHE MI CREA 5 NUMERI CASUALI UNIVOCI
let randomNumbers = createRandomNumbers(100);


// STAMPO I NUMERI GENERATI 
numbers.innerHTML += randomNumbers;


// FACCIO PARTIRE IL TIMER DI 30 SECONDI 
setTimeout(() => {

    // CREO UN ARRAY DA POPOLARE CON I NUMERI INSERITI DALL'UTENTE
    let userNumbers = [];

    // CHIEDO ALL'UTENTE PER 5 VOLTE DI INSERIRE UN NUMERO 
    // for(let i = 0; i < 5; i++){
    //     var userNumber = parseInt(prompt("inserisci un numero"));
    // }

    let number1 = parseInt(prompt("inserisci un numero"));
    let number2 = parseInt(prompt("inserisci un numero"));
    let number3 = parseInt(prompt("inserisci un numero"));
    let number4 = parseInt(prompt("inserisci un numero"));
    let number5 = parseInt(prompt("inserisci un numero"));
    
    // POPOLO L'ARRAY CON I NUMERI INSERITI DALL'UTENTE  
    userNumbers.push(number1, number2, number3, number4, number5);
    console.log(userNumbers);


    // CONFRONTO I NUMERI INSERITI GENERATI DAL PC CON QUELLI INSERITI DALL'UTENTE 
    userNumbers.forEach((element) => {
        // se l'array contiene il numero inserito dall'utente 
        if(randomNumbers.includes(element) === true) {
            // lo stampo in html 
            inputNumbers.innerHTML += element +", ";
            hiddenText.style.display="block";
            inputNumbers.classList.add("custom-style");
            pcNumbers.classList.add("dnone");
        } else {
            hiddenText.style.display = "block";
            inputNumbers.classList.add("custom-style");
            pcNumbers.classList.add("dnone");
        }
    });

}, 30000);







// CREO UNA FUNZIONE PER GENERARE NUMERI CASUALI
function createRandomNumbers (max) {
    // CREO ARRAY VUOTO DA POPOLARE CON I NUMERI RANDOM
    let numbersArray = [];
    console.log(numbersArray);

    while (numbersArray.length < 5) {
        // genero un numero casuale tra 1 e 100 e lo salvo in una variabile
        let number = Math.floor(Math.random()*max) + 1;

        // se l'array non include il numero generato lo inserisco 
        if(numbersArray.includes(number) === false) {
            numbersArray.push(number);
        }
    }

    return numbersArray;
}

