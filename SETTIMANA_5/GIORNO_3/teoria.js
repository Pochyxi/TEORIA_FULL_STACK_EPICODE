// // let nome = "Prova"
// // let petA = {
// //     specie: "gatto",
// //     nome: "Tigro",
// //     tipo: function(){
// //         return this.nome + " è della specie "+ this.specie
// //     },
// //     info: function(){
// //         return "Le info dell'animale sono\n"+this.tipo()
// //     }
// // }
// // let petB = {
// //     specie: "cane",
// //     nome: "Pluto",
// //     tipo: function(){
// //         return this.nome + " è della specie "+ this.specie
// //     }
// // }

// // petA.tipo()
// // petB.tipo()

// // petA.info()

// //Creare un oggetto seguendo un modello costruttore
// // function Pet(s, n) {
// //     this.specie = s
// //     this.nome = n
// //     this.tipo = function () {
// //         return this.nome + " è della specie " + this.specie
// //     }
// // }
// // let p = new Pet("Gatto", "Tigro")
// // p.anni = 5
// // p.anniReali = function () {
// //     return this.anni * 7
// // }

// // Pet.prototype.genere = "F"
// // let o = new Pet("Cane", "Pluto")
// // console.log(p);
// // console.log(o);


// // // //new per istanziare un oggetto di una Classe
// // let pet1 = new Animale("Gatto", "Tigro")
// // let pet2 = new Animale("Cane", "Pluto")
// //Classe -> modello della struttura dell'oggetto
// // class Animale {
// //     //Definiamo come viene costruita l'istanza
// //     constructor(specie, nome) {
// //         this.specie = specie;
// //         this.nome = nome;
// //     }
// //     //Non raggiungibile dall'istanza
// //     static tipo() {
// //         return this.nome + " è della specie " + this.specie;
// //     }
// //     //Anche info non sarà raggiungibile se non applicati alla classe Animale.info(pet) //pet obj di classe Animale
// //     info() {
// //         return "Le info dell'animale sono\n"+this.tipo();
// //     }
// // }

// // pet1.tipo();
// // pet2.tipo();


// //EXTENDS
// // class Mammifero {
// //     constructor(specie, nome, ambiente){
// //         this.specie = specie;
// //         this.nome = nome;
// //         this.ambiente = ambiente;
// //     }
// //     tipo(){
// //         return this.nome + " è della specie "+ this.specie
// //     }
// //     visualizza(){
// //         return this.nome + " vive in "+ this.ambiente
// //     }
// // }
// // let m = new Mammifero("Gatto", "Tigro", "Casa")

// // class Pesce extends Animale {
// //     constructor(s, n, p) {
// //         super(s, n);
// //         this.profondità = p;
// //     }
// //     visualizza() {
// //         return this.nome + " vive in " + this.ambiente
// //     }
// // }

// // let m = new Mammifero("Gatto", "Tigro", "Casa")


// // class Lavoratore {
// //     constructor(nome, id, nContratto){
// //         this.nome = nome;
// //         this.id = id;
// //         this.nContratto = nContratto;
// //     }
// // }

// // class Programmatore extends Lavoratore {
// //     constructor(nome, id, nContratto, linguaggio) {
// //         super(nome, id, nContratto)
// //         this.linguaggio = linguaggio
// //     }
// //     getLavoro() {
// //         return this.nome + " scrive nei seguente linguaggio: " + this.linguaggio
// //     }
// // }

// // class Commerciale extends Lavoratore {
// //     constructor(nome, id, nContratto, nClienti) {
// //         super(nome,id, nContratto)
// //         this.nClienti = nClienti;
// //     }
// //     getLavoro(){
// //         return this.nome + " vende a " + this.nClienti + " clienti"
// //     }
// // }

// // let l1 = new Commerciale("Paolo", 2, 3, 5)
// // let l2 = new Programmatore("Flavio", 3, 2, 4)


// // l1.getLavoro()
// // l2.getLavoro()


// // /*ASYNC*/
// // console.log("inzio");
// // // nomi = fetch("nomi.txt") //resta ad aspettare - SBAGLIATO (sintassi errata solo epr spiegazione)
// // fetch("nomi.txt").then((res)=>{ //then = callback function
// //     return res.text()
// // }).then((res)=>{
// //     nomi = res //assegnazione quando il fetch avrà finito - CORRETTO
// //     console.log(nomi);
// // })
// // console.log("fine");


// // function oper(a, b) {
// //     setTimeout(()=>{
// //         return a+b
// //     }, 5000)
// // }

// // function visualizza() {
// //     document.write("TEST")
// // }

// // setNomi(leggi("nomi.txt"))
// // function leggi(file){
// //     // return "Marco Rossi,Paolo Bianchi,Marco Rossi,Paolo Bianchi,Marco Rossi,Paolo Bianchi"; //returtn delle funzione
// //     setNomi("Marco Rossi,Paolo Bianchi,Marco Rossi,Paolo Bianchi,Marco Rossi,Paolo Bianchi") //callback function
// // }

// // function setNomi(nomi){
// //     var nomi = nomi.split(",")
// // }


// /*PROMISE*/
// console.log("inizo");
// // let result
// // setTimeout(()=>{
// //     result = true
// // }, 5000)
// // console.log(result);
// let p = new Promise((succ, err)=>{
//     setTimeout(()=>{
//         console.log("Promise finita");
//         succ(10)
//     }, 5000) 
// })
// console.log(p);

// p.then((res)=>{console.log("Result:", res);})

// // let res = p.result//SBAGLIATA
// // console.log(res);//SBALGIATA

// console.log("fine");

// //fetch
// // let f = fetch("db.json")
// // f.then((res)=>{
// //     let j = res.json()
// //     j.then((res)=>{
// //         console.log("Lettura", res.utenti);
// //     })
// // })

// fetch("db.json").then(res => res.json()).then((res)=>{
//     console.log("Lettura", res.utenti[0]);
// })

// console.log("A");

// console.log("B");

// //Equivalenti
// // res => res.json()
// // (res)=>{return res.json()}

// //deve essere async e quindi quanod la richiamiamo eseguirà asincronamente rispetto al thread principale
// // async function asyncF(){ 
// //     let p = await fetch("nomi.txt").json()
// //     console.log(p);
// //     return p
// // }


// console.log("a");
// let x = 0
// let res = 100

// // if(x != 0) {
// //     res /= x
// // } else {
// //     console.log("non divisibile");
// // }

// try {
//     if(x == 0){
//         throw "Non divisibile"
//     }
//     res /= x
//     console.log(res);
// } catch(e) {

//     console.warn(e);
// }
// console.log("b");

//DOM

let a = document.getElementById("prova")//return HTMLElement

let b = document.getElementsByClassName("rosso") //return HTMLElement[] (amnche se un solo elemento e stato trovato)
let c = document.getElementsByTagName("h1")//return array

// console.log(b[1]);

let x = document.querySelector(".rosso p") //return HTMLElement (il primo che corrisponde al selector)
let y = document.querySelectorAll(".rosso p") //return HTMLElement[] (tutti gli elementi che corrispondo al selector)


//le operazioni che facciamo su un HTMLElement (non l'array!) sono:

//modifica
a.innerHTML = "CIAO"
// a.text = "CIAO"
a.style //oggetto con proprietà string per ogni proprietà css
a.style.color = "red" //cambiare una propàieta css -> sull'oggetto e non le classi, aggiunge attributo html style

//modifica alla classList
a.classList //Non è propriamente un array ma si comporta similmente. Lo useremo insieme ai metodi add() e remove()
a.classList.add("center")
a.classList.remove("rosso")

//aggiunta di eventListener
// a.addEventListener(event, callbackFunction)
a.addEventListener("click", ()=>{
    console.log("hai clickato!");
})
//LISTA EVENTI: https://www.w3schools.com/jsref/dom_obj_event.asp


let newElement = document.createElement("h3")

newElement.innerHTML = "Nuovo elemento"
newElement.classList.add("rosso")
newElement.style.background = "green"
newElement.addEventListener("mouseover", ()=>{
    newElement.style.color = "white"
})
newElement.addEventListener("mouseout", ()=>{
    newElement.style.color = "black"
})

// document.body.append(newElement)

// document.getElementsByTagName("div")[0].append(newElement) //aggiunta all'interno del tag come ultimo elemento
document.getElementsByTagName("div")[0].prepend(newElement)//aggiunta all'interno del tag come primo elemento

// document.getElementById("prova").before(newElement) //aggiunta prima del tag nello stesso contenitore del tag
// document.getElementById("prova").after(newElement) //aggiunta dopo del tag nello stesso contenitore del tag

// HTMLElement {
//     innerHTML: string,
//     style: {
//         color:string,
//         display: string,
//         fontSize: string,
//     }
// }