/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

// Creo funzione per ribaltare parola
const parolaReversed = reverse("ciao")
function reverse(parola) {
    let risultato = "";

    for (let i = parola.length - 1; i >= 0; i--) {
        risultato = risultato + parola[i];
    }
    return risultato
};

console.log (parolaReversed)