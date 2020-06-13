$(document).ready(
  function() {

    // Un alert espone 5 numeri casuali.
    // Da li parte un timer di 30 secondi.
    // Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

    var numero = 5;

    // Alert con 5 numeri casuali
    var numeriDaRicordare = randomNumbers(numero);
    alert(numeriDaRicordare);
    console.log(numeriDaRicordare);

    setTimeout(function() {
        // I numeri indovinati
        var numeriGiusti = [];

        // Chiedo all'utente di inserire il numero per 5 volte
        var userNumberArray = [];
        for (var j = 0; j < 5; j++) {
          var userNumber = parseInt(prompt('Inserisci un numero'));
          // Validazione del numero inserito dall'utente
          while(userNumber == null || isNaN(userNumber)){
            userNumber = parseInt(prompt('ERRORE: Inserisci un numero'));
          }
          userNumberArray.push(userNumber);

          // Verifico se uno dei numeri inseriti dall'utente è uguale ai numeri mostrati
          // con un'ulteriore ciclo di controllo
          var controllo = false

          var i = 0;
          while( i < numeriDaRicordare.length && controllo == false) {
            if(userNumberArray[j] == numeriDaRicordare[i]) {
              controllo = true;
              numeriGiusti.push(userNumberArray[j]);
            }
            // Interruzione ciclo
            i++

            console.log('dopo il ciclo while: ' + numeriGiusti)
          }//fine ciclo while

        }// fine ciclo for

        console.log('I numeri che hai inserito: ' + userNumberArray)

        // OUTPUT if/else-if
        // Messaggio in base al risultato
        // if (numeriGiusti.length == 0) {
        //   alert('Madoooo! Stai messo davvero male. Non ti sei ricordato nemmeno un numero :\'(')
        // } else if (numeriGiusti.length <= 2) {
        //     alert('Hai la memoria corta :). Hai memorizzato ' + numeriGiusti.length +  ' numero/i: ' + numeriGiusti);
        //   } else if (numeriGiusti.length <= 4) {
        //       alert('Bravo! hai memorizzato ' + numeriGiusti.length +  ' numeri: ' + numeriGiusti)
        //     } else if (numeriGiusti.length == 5) {
        //         alert('Congratulazione! hai memorizzato tutti ' + numeriGiusti.length  + ' numeri: ' + numeriGiusti)
        //       }

        // OUTPUT con switch case:
        var numeriMemorizzati = numeriGiusti.length;
        console.log(numeriMemorizzati);

        switch (numeriMemorizzati) {
          case 1, 2:
            alert('Hai la memoria corta :). Hai memorizzato ' + numeriMemorizzati + ' numeri: ' + numeriGiusti);
            break;
          case 3, 4:
            alert('Bravo! hai memorizzato ' + numeriMemorizzati + ' numeri: ' + numeriGiusti);
            break;
          case 5:
            alert('Congratulazione! hai memorizzato tutti ' + numeriMemorizzati + ' numeri: ' + numeriGiusti);
            break;
          default:
            alert('Madoooo! Stai messo davvero male. Non ti sei ricordato nemmeno un numero!');
          }

    }, 5000);


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
