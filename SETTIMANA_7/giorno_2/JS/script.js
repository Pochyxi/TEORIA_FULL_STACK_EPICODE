

// // all'interno delle classi si lavora in strict mode!!
// class Automobile {
//     constructor (modello, colore, prezzo) {
//         this.modello = modello;
//         this.colore = colore;
//         this.prezzo = prezzo;
//         Automobile.counter++;
//     }

//     static ruote = 4;
//     static counter = 0;
//     static sconto = 20;

//     static getRuote() {
//         return Automobile.ruote;
//     }

//     getModello () {
//         return this.modello;
//     }

//     getPrezzo () { 
//         return this.prezzo - (this.prezzo * Automobile.sconto/100);
//     }
// }

// let c = new Automobile("Berlina", "Nero", 27000);

// console.log(Automobile.counter);


// // Extends -> possiamo avere delle classi che derivano dal classi superiori



// let p1 = new Lavoratore("Flavio", "Martinelli", "2022/07/05");
// let p2 = new Lavoratore("Paolo", "Bianchi", "2022/07/05");
// let c1 = new Lavoratore("Marco", "Rossi", "2022/07/03");

class Lavoratore {
    constructor(n, c, d) {
        this.nome = n;
        this.cognome = c;
        this.dataAssunzione = new Date(d);
    }

    getNomeCompleto() {
        return `${this.nome} ${this.cognome}`;
    }
}


class Programmatore extends Lavoratore  {
    constructor(n, c, d, l) {
        super(n, c, d);
        this.linguaggi = l;
    };

    getLinguaggi() {
        return this.linguaggi.join('/');
    };
}

class Commerciale extends Lavoratore {
    constructor(n, c, d, nc) {
        super(n, c, d);
        this.numeroClienti = nc;
    }

    static coef = 20;

    getFatturato() {
        return Commerciale.coef * this.numeroClienti
    };
}

let p = new Programmatore("Paolo", "Bianchi", "2022/07/05", ["JS", "CSS", "SASS"]);
let l = new Commerciale("Marco", "Rossi", "2022/07/03", 20);




