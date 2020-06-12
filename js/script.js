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
        // I numeri indovinati
        var numeriGiusti = [];

        // Chiedo all'utente di inserire il numero per 5 volte
        var userNumberArray = [];
        for (var j = 0; j < 5; j++) {
          var userNumber = parseInt(prompt('Inserisci il numero'));
          userNumberArray.push(userNumber);

          // Verifico se uno dei numeri inseriti dall'utente è uguale ai numeri mostrati
          var controllo = false

          // Ciclo di controllo
          var i = 0;
          while( i < numeriDaRicordare.length && controllo == false) {
            if(userNumber == numeriDaRicordare[i]) {
              controllo = true;
              numeriGiusti.push(userNumber);
            }

            // Interruzione ciclo
            i++

            console.log('dopo il ciclo while: ' + numeriGiusti)
          }

          // numeriGiusti.push(userNumberArray[i]);
        }
        console.log('I numeri che hai inserito: ' + userNumberArray)
        console.log('Numeri che hai ricordato: ' + numeriGiusti)

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
