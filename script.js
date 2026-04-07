/*Obiettivo: Utilizzare variabili, logica booleana e l'oggetto Math.
Consegna: Crea una funzione chiamata indovinaNumero che accetta un numero come argomento.
La funzione deve generare un numero casuale intero tra 1 e 10.
Se il numero passato è uguale a quello generato, stampa "Hai vinto!", altrimenti "Ritenta, il numero era X".*/

//const indovinaNumero = Math.floor(Math.random()*10 + 1);


function indovinaNumero(num){
    const numero = Math.floor(Math.random()*10 + 1);
    if(num === numero){
        return("Hai Vinto");
     }

    else("Ritenta il numero era"  + numero);
}

/*Consegna: Partendo da un array let spesa = ["Pane", "Latte", "Uova"]:
Aggiungi "Cioccolato" alla fine dell'array.
Rimuovi il primo elemento della lista.
Usa un ciclo for o il metodo .forEach() per stampare in console ogni elemento preceduto dal suo indice (es: "0 - Latte").
*/

const spesa = ["Pane", "Latte", "Uova"];

  spesa.push("cioccolata");
  spesa.shift(0);

spesa.forEach((element, index)=>{
  console.log((index)+ "-" +(element));

})
/*Obiettivo: Collegare JavaScript all'HTML tramite il DOM ed eventi.
+1

    •    
Consegna: Immagina di avere un file HTML con un testo che segna "0" e un bottone "Incrementa".
•    Logica JS:
1    Seleziona l'elemento del numero e il bottone usando document.querySelector().
2    Crea una variabile conteggio inizializzata a 0.
3    Aggiungi un addEventListener al bottone per intercettare il "click".
4    Ogni volta che l'utente clicca, aumenta conteggio e aggiorna il testo nell'HTML usando innerText.*/

const bottone = document.querySelector(".bottone");
const paragrafo = document.querySelector(".contatore");

 let conteggio = 0;

bottone.addEventListener("click",() => {
   
    conteggio++;
    paragrafo.innerText = conteggio; //e una proprieta che permette di moficare il testa nel html
});