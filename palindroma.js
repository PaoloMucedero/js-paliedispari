/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

// CHIEDO ALL'UTENTE DI SCRIVERE UNA PAROLA
const userWord = prompt("Scrivi qui!");

let palindroma;

// CONFRONTO LE PAROLE /* Così differenzia tra maiuscole e minuscole.... AnNa non è palindromo */
if (reverse(userWord) === userWord) {
    palindroma = "La parola inserita è palindroma";
} else {
    palindroma = "La parola inserita non è palindroma"
}

// Creo funzione per ribaltare parola
//const parolaReversed = reverse("ciao")
function reverse(parola) {
    let risultato = "";

    for (let i = parola.length - 1; i >= 0; i--) {
        risultato = risultato + parola[i];
    }
    return risultato
};

console.log (palindroma);
console.log(`Parola inserita: ${userWord} 👉 ${palindroma}`);