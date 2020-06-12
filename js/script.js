$(document).ready(
  function() {

    // Un alert espone 5 numeri casuali.
    // Da li parte un timer di 30 secondi.
    // Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

    var numero = 5;

    // Alert con 5 numeri casuali
    var numeriDaRicordare = randomNumbers(numero);
    console.log(numeriDaRicordare);



    setTimeout(function () {

        // Chiedo all'utente di inserire il numero per 5 volte
        var userNumberArray = [];
        for (var i = 0; i < 5; i++) {
          var userNumber = parseInt(prompt('Inserisci un numero'));
          userNumberArray.push(userNumber);

          // Verifico se uno dei numeri inseriti dall'utente è uguale ai numeri mostrati
          for (j = 0; j < numeriDaRicordare.length; j++) {
            if(userNumber == numeriDaRicordare[j]) {
              console.log('numero presente: ' + userNumberArray[i])
            } else if(userNumber != numeriDaRicordare[i]) {
                console.log('numero assente: ' + userNumberArray[i])
              }
          }
        }
        console.log(userNumberArray)

        // Mostro numeri presenti

    }, 2000);





    // ===================================
    // =========== FUNCTIONS==============

    // Funzione randomNumbers(number)
    // Funzione che ritorna (number) numeri casuali
    // ---> argomento (number) è quantità di numeri da generare
    // ---> return array con numeri casuali
    function randomNumbers(number){
      var randomNumeberArray = [];
      for (var i = 0; i < number; i++) {
        var randomNum = Math.floor(Math.random() * 100) + 1;
        randomNumeberArray.push(randomNum);
      }
      return randomNumeberArray
    }

 }
);
