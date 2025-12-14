const pariDispariUser = prompt("Scegli pari o dispari");

console.log(`Hai scelto: "${pariDispariUser}"`);

const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log(`Hai inserito: "${userNumber}"`);

const pari = "pari";

const dispari = "dispari";

// salvo il numero generato nella variabile
const numberRandom = randomNumber();

// passo il numero alla seconda funzione
sumPariDispari(numberRandom);

function randomNumber() {

    const numberRandom = Math.floor(Math.random() * 5) + 1;

    console.log(`Il computer ha generato il numero: "${numberRandom}"`);

    console.log("ora creo la somma tra il numero generato dal computer e il numero inserito da te in precedenza");

    console.log(`Se la somma dei due numeri coincide con la tua scelta, ovvero: "${pariDispariUser}" hai vinto, altrimenti hai perso`);

    return numberRandom;

}

function sumPariDispari() {

    const sum = numberRandom + userNumber;

   console.log(`Il numero sommato è: "${sum}"`);

    if (sum % 2 === 0 && pariDispariUser.trim().toLowerCase() === pari.trim().toLowerCase()) {
        console.log("Il numero sommato è pari, HAI VINTO!!!!!!!!");

    } else if (sum % 2 === 0 && pariDispariUser.trim().toLowerCase() === dispari.trim().toLowerCase()) {
        console.log("Il numero sommato è pari, HAI PERSO!");

    } else if (sum % 2 === 1 && pariDispariUser.trim().toLowerCase() === dispari.trim().toLowerCase()) {
        console.log("Il numero sommato è dispari, HAI VINTO!!!!!!!!");

    } else if (sum % 2 === 1 && pariDispariUser.trim().toLowerCase() === pari.trim().toLowerCase()) {
        console.log("Il numero sommato è dispari, HAI PERSO!");
    }
}