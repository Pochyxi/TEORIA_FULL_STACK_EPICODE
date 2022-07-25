// class Ospedale {
    
//     posizione:string
//     private _numeroSale:number // private, questa proprietà puo essere modificata solo all'interno della classe (per esempio con il set)/simil static
//     readonly codiceSanitario:string // questa proprietà non può essere letta al di fuori della classe e può essere modificata solo nel costruttore



//     constructor(){
//         this.codiceSanitario = "qwe123"
//         this._numeroSale = 10;
//     }

//     get numeroSale() {
//         return this._numeroSale;
//     }
    
// }

// let o = new Ospedale();

// console.log(o.numeroSale)

// //ABSTRACT 
abstract class Lavoratore { // rende la classe lavoratore non istanziabile
    constructor(public readonly name:string, public paga:number ){
        
    }

    get info() {
        return "il lavoratore è " + this.name
    }

    abstract get stipendio() // questo è un metodo che non è definito ma dovrà esserlo nelle sotto classi
}

class Programmatore extends Lavoratore {
    constructor(name:string, paga:number, public linguaggi:string[]){
        super(name, paga);
    }

    get stipendio() {
        return this.paga * this.linguaggi.length;
    }
    
}

class Commerciale extends Lavoratore {
    constructor(name:string, paga:number, public nClienti:number){
        super(name, paga);
    }

    get stipendio() {
        return this.paga * this.nClienti;
    }

    
};

// let res: {
//     name:string, paga:number, tipologia: "p"|"c", n:number|string[]
// }[]

//GENERICS - VARIABILE PER LE TIPOLOGIE TYPESCRIPT (NELLE FUNZIONI)
// type T = string | number // tipologia che può avere 2 tipi 
// function identity(value:T):T{ // identity accetta string | number e può ritornare string | number
//     return value;
// }

function identityT<T>(value:T):T{
    return value;
}

let x = identityT(true);

async function fetchApi<ResultType>(url:string):Promise<ResultType> {//*********************************************** */
    let response = await fetch(url);
    return response.json();
}

fetchApi<Lavoratore[]>("/lavoratori").then((response:any) => {
    response.forEach();
})

async function getLavoratori() {
    let lavoratori = await fetchApi("/lavoratori");
}


// Interface, modelli di oggetti solitamente implementati nelle classi (che dovranno seguire questo modello)

abstract class Persona {
    nome:string
    last_name:string
    age:number
    abstract getInfo():string
    constructor(){}
    
}

class Cliente extends Persona {
    constructor(public nome:string){super()}
    
     getInfo(){
         return this.nome;
     }
}

interface persona {
    nome:string,
    last_name:string,
    age:number,
    getInfo():string,
    
}

// let p:persona = {
//     nome: "adiener",
//     last_name: "Lopez",
//     age: 30,
//     getInfo() {
//         return this.name + " " + this.last_name;
//     }
// }


class Utente implements persona{
    nome: string;
    last_name:string;
    age: number;
    getInfo():string {
        return this.nome + " " + this.last_name;
    }
}