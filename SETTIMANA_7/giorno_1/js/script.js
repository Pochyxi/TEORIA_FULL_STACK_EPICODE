// ripasso - Object

let car = {
    //proprietà
    marca: "Fiat",
    colore: "rosso",
    prezzo: 1000,
    elettrica: false,

    calcolaConsumo: function () {
        return "La macchina " + this.marca + " consuma 2000";
    }
}

console.log(car);
console.log(car.marca);
console.log(car["marca"]); // possiamo raggiungere le proprietà di un oggetto anche attraverso le parentesi quadre e la stringa del nome della proprietà
console.log(car.calcolaConsumo());

//Creazione di un'istanza della classe -> creare una variabile con precisi valori assegnati alle proprietà descritte dal modello definito dalla classe

let d = new Date("2021/02/03"); // keywor new serve a istanziare l'oggetto della classe
// il metodo costruttore della classe serve per inizializzare l'oggetto ed eseguuire le assegnazioni 
// normalmente i constructor prendono come parametri i dati iniziali per creare l'oggetto

console.log(d);

// scrittura originale per creare una struttura di oggetti utilizza la keywor function 

function Automobile(marca, prezzo, colore) {
    this.marca = marca;
    this.prezzo = prezzo;
    this.colore = colore;
    this.km = 0;

    this.getInfo = function () {
        return "L'automobile è una " + this.marca + " " + this.colore;
    };

    this.confronta = function () {
        if (this.prezzo > car.prezzo) {
            return "L'auto costa di più";
        } else {
            return "costa di meno o uguale";
        }
    };
}

let c = new Automobile("Fiat", 10000, "verde");
let c1 = new Automobile("mercedes", 10000, "rosso");

// Methods - funzioni interne ad un oggetto (che di solito servono a manipolarle, solitamente della stessa instanza)

// get - set -> avere dei metodi per leggere e modificare comodamente le proprietà dell'istanza.

// tenderemo ad evitare di interagire direttamente con le proprietà al di fuori della classe.

function Persona(nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;

    this.getNome = function () { // serve a ritornare il valore richiesto
        return this.nome;
    };
    this.getCognome = function () {
        return this.cognome;
    };

    this.setNome = function (n) {   // funzione che modifica il nome della classe
        // spesso prima di assegnare il valore vogliamo manipolarlo
        this.nome = n;
    };

}

let p = new Persona("Flavio", "Martinelli");

console.log(p.nome);
console.log(p.getNome());

p.setNome("Paolo");

console.log(p.getNome()); // il valore della chiave nome è cambiato in Paolo

// Prototype rappresenta la struttura dell'oggetto di una classe ed è condivisa da tutti gli oggetti di quella classe

console.log("Oggetti iniziali");
c.sconto = 20;
console.log(c);

// Possiamo aggiungere proprietà a un'oggetto semplicemente assegnando un valore a quella proprietà

c1.prototype // la proprietà .prototype di un oggetto contiene come proprietà tutte quelle della classe/oggetto (in questo caso quello di c1)

Automobile.prototype // questo è il prototype che più comunemente modificheremo, aggiungere o modificare una proprietà di .prototype imposterà tale proprietà su tutte le istanze di classe Automobile
// usiamo il prototype per aggiungere proprietà a tutti gli elementi senza farlo uno alla volta 

Automobile.prototype.sconto = 50 // questo aggiungerà la pro sconto a tutti gli elementi di classe Automobile e sarà di base 50

// NB
// la prop inserita nel prototype non fa parte delle altre prop ma fa parte di quell prototype. Se non ci sono altre proprietà con lo stesso nome possiamo leggerla con obj.prop, altrimenti Object.getPrototypeOf(Object)

console.log (c);
console.log(c.sconto);
console.log(Object.getPrototypeOf(c));


// Usi di classi e oggetti
// avere variabili pù organizzate


let utenti = [];
document.getElementById("form").submit("submit", () => {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;

   
})
