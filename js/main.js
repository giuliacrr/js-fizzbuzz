/**
 * Ciao ragazzi,
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:** 
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
 */
const boxContainer = document.querySelector(".container-boxes");





for (let i = 1; i <= 100; i++) {
  let numberBox = document.createElement("div");// Virtual div

  //Containers
  boxContainer.append(numberBox);
  numberBox.classList.add("number-box", "d-flex", "justify-content-center", "align-items-center", "rounded");

  // Multipli di 3 e 5
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz");
      numberBox.classList.add("bg-FizzBuzz", "fw-bold");
      numberBox.innerHTML += ("FizzBuzz");
    } else {
      console.log("Fizz");
      numberBox.classList.add("bg-Fizz", "fw-bold");
      numberBox.innerHTML += ("Fizz");
    }

    //Multipli di 5
  } else if (i % 5 === 0) {
    console.log("Buzz");
    numberBox.classList.add("bg-Buzz", "fw-bold");
    numberBox.innerHTML += ("Buzz");

    //Resto dei numeri
  } else {
    numberBox.classList.add("bg-number", "fw-bold");
    numberBox.innerHTML += i;
  }

}







