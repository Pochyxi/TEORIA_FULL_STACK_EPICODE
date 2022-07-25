//ENUM 

enum Months {
    Gennaio = 1,
    Febbraio,
    Marzo,
}

console.log(Months.Gennaio)
let classi = ["FE1, FE2, FE3", "FE4, FE5", "FE6"];
let s = {
    name: "test",
    class: classi[2],
}

enum Classi {
    FE1 = 1,
    FE2,
    FE3,
    FE4,
    FE5,
    FE6,
    FE7,
}

let sCORRETTO = {
    name: "test",
    class: Classi.FE3,
}

//tipologie

type classiCorso = "FE1" | "BE2" | "FE3" 

type studente = {
    name:string,
    classe: Classi
}

// CLASSI

class Lavoratore {
    private name:string;
    private compito:string|null;

    constructor(name:string){
        this.name =name;
    }

    selezionaCompito() {
        fetch("todos").then(res => res.json()).then((todos)=>{
            this.compito = this.assegnaTodo();
        })
    }

    assegnaTodo() {
        return "debug";
    }

    getName() {
        return this.name;
    }

    completaCompito() {
        if (this.compito == null) {
            throw new Error("Non completato");
        }
        return this.compito
    }
}


let l = new Lavoratore("Adiener");
l.selezionaCompito();
console.log(l.getName());
//Paradigmi dell'OOP
//Incapsulamento - private/public 
// ereditarietà - extends
//polimorfismo 

class Veicolo {
    consumo:number
    ruote:number
    colore:string

    constructor(consumo:number, ruote:number, colore:string){
        this.consumo = consumo;
        this.ruote = ruote;
        this.colore = colore;
    }

    getConsumo(prezzo):number {

        return this.consumo * prezzo;
    }

}

class Moto extends Veicolo {
    constructor(consumo:number,colore:string) {
        super(consumo, 2, colore);
    }
    getConsumo() {
        if (this.consumo > 10) {
            return super.getConsumo(10);
        } else {
            return super.getConsumo(5);
        }
    }
}

let kawasaki = new Moto (120,"verde");
console.log(kawasaki.getConsumo());

class ContoBancario {
    name:string
    iban:string
    credito:number
    constructor(name:string){
        this.name = name;

    }
    private getIban():string {
        return "asdaeafgg";
    }
    apriConto (saldo:number) {
        this.iban = this.getIban();
        return this.apriContoPersonale(saldo);
    }
    apriContoPersonale(saldo:number) {
        return this.apriConto(saldo)
    }

}