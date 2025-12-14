// Funzione per generare numero random 1-5 per il computer
function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per capire se un numero è pari o dispari
function valutaPariDispari(number) {
    return number % 2 === 0 ? "pari" : "dispari";
}

// Funzione principale del gioco
function gioca(sceltaUtente) {
    // Prendo il numero inserito dall'utente
    const numeroUtente = parseInt(document.getElementById("numero").value);

    // Controllo se il numero è valido
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        alert("Devi inserire un numero tra 1 e 5!");
        return; // Esce dalla funzione
    }

    // Numero del computer
    const numeroComputer = randomNumberInRange(1, 5);

    // Somma e controllo pari/dispari
    const somma = numeroUtente + numeroComputer;
    const risultato = valutaPariDispari(somma);

    // Determinare il vincitore
    const vincitore = sceltaUtente === risultato ? "Hai vinto!" : "Ha vinto il computer!";

    // Stampare tutto in pagina
    document.getElementById("scelta-utente").innerHTML =
        `Hai scelto: ${sceltaUtente} e il numero: ${numeroUtente}<br>
         Il computer ha scelto: ${numeroComputer}<br>
         La somma è: ${somma} (${risultato})`;

    document.getElementById("risultato-partita").innerHTML = vincitore;
}

// Event listener per i bottoni
document.getElementById("pari").addEventListener("click", function() {
    gioca("pari");
});

document.getElementById("dispari").addEventListener("click", function() {
    gioca("dispari");
});