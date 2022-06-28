// /*EVENT LISTENER*/
// let b = document.querySelector("button")

// //Come si usa
// // element.addEventListener(event, callbackFunction)
// // b.addEventListener("click", f)
// // b.addEventListener("click", function(){alert("function anonima")})
// b.addEventListener("click", ()=>{
//  alert("Arrow function") //metodo di passare una funzione più comodo
// })
// //Nell'eventListener è complicato passare parametri alla callbackFunction
// // quindi preferiamo eseguire una funzione nella funzione parametro, passando in quella i parametri
// b.addEventListener("click", (e)=>{
//     e.target.innerHTML = "Premuto"
//     somma(10, 5)
// })

// document.getElementById("searchBar").addEventListener("keyup", (event)=>{
//     console.log(event); //guardare che proprietà ha l'evento nel log, .target è l'oggetto su cui è stato generato l'evento
//     // cerca(document.getElementById("searchBar").value)
//     // document.getElementById("searchBar") == event.target
//     cerca(event.target.value);
// })



// function f() {
//     alert("Click!")
//     return 10
// }

// function somma(a, b) {
//     alert(a+b)
// }

// function cerca(str) {
//     console.log("Ho trovato un elemento " + str)
// }


// /*NODI*/
// //È come un HMTLElement ma l'oggetto ha proprietà relative a come si relazione con gli altri elementi
// console.log(document.body.childNodes[2].nextSibling); //un NodeList (array di nodi)
// //tenderemo a trovare più collections (HTMLCollection) che nodes -> .querySelectoAll() return NodeList

// let x = document.getElementsByTagName("h1")[0]
// let y = document.createElement("h1")
// y.classList.add("prova")
// y.innerHTML = "Prova"
// // document.body.append(y)
// // document.getElementsByClassName("container")[0].append(y) //per aggiugnere un elemento dentro un contenitore usiamo .append() o .prepend()
// // document.getElementsByClassName("container")[0].prepend(y) 
// document.querySelector("p").before(y) //per aggiungere un elemento prima o dopo un altro, stando nello stesso contenitore
// // document.querySelector("p").after(y)
// y.classList.add("after") //y rappresenta quell'elemento anche dopo averlo inserito nel documento



// /*FORM*/
// //Per selezionare i form possiamo usare la proprietà .forms del document
// console.log(document.forms) //HTMLCollection
// console.log(document.forms[0])
// console.log(document.forms[0].elements) //HTMLFormControlCollection (sottoclasse di HTMLCollection)
// console.log(document.forms[0].elements[0].value)
// // console.log(document.forms.length)

// // console.log(document.forms[0].elements.item(0)); //Restituisce il primo oggetto della lista elements
// console.log(document.forms[0].elements.namedItem("email")); //Restituisce l'ogetto di id "email" dalla lista elements


// // document.forms[0].submit() //esegue l'evento "submit" sul form selezionato
// // document.forms[0].reset() //eseuge il reset dei campi del form selezionate

// document.forms[0].addEventListener("submit", (e)=>{
//     e.preventDefault(); //blocco il redirect automatico del form (blocca il comportamento di default di un evento (e dell'oggetto))
//     alert("submit");
//     // let nome = e.target.elements.namedItem("nome")
//     // let email = e.target.elements.namedItem("email")
//     // let password = e.target.elements.namedItem("password")
//     // location.href = "user.html"
// });

// //Esistono metodi per attivare vari tipi di eventi via script
// // document.forms[0].submit()
// // document.forms[0].reset()
// // document.forms[0].click()

// //VALIDATION
// //un form non valido (ha input invalid) non genera submit (ma fa comparire i messaggi di validazione)
// //quindi monitorare l'evento submit del form è meglio dell'evento click sul tasto invia

// /* TIPI DI VALIDAZIONE
//  * required
//  * type (email, number, text, date, ...)
//  * minlength/maxlength o min/max
//  * REGEX !!!!!! -> una speciale scrittura (usata come stringa) che specifica i pattern accettati dall'input
//  * */

// //REGEX - regular expression
// let pattern = /[a-z0-9]/i
// // let string = document.form[0].elements.namedItem("nome").value
// let string = "prova prova ciao prova"
// let result = string.match(patter) //non da risultato booleano ma le parti di stringa che corrispondono al pattern
// if(result){} //se ha valora ha trovato un match -> la stringa segue il pattern
// else{} //se result non ha valore la stringa non segue il pattern


// //Controllare la validita
// document.forms[0].checkValidity() // -> true o false se il form è valido
// document.forms[0].elements[0].validity // -> oggetto con proprietà per ogni possibile validazione
// document.forms[0].elements[0].validity.valid // -> Boolean della validità

// document.forms[0].elements[0].validationMessage //il messaggio di validazione che comparirebbe al submit (se comparirebbe)


// /*BOM*/
// //Questi popup si fanno normalmente in html per migliore qualità e controllo
// window.alert("Pop up generico (ok)")
// let conf = window.confirm("Pop up di conferma (ok - cancel)") //true o false in base a cosa premo
// // if(confirm("messaggio")){} else {}
// let pro = window.prompt("inserire un input") //null se annullato, "" se stringa vuota, stringa dell'input se inserito (qualunque input)
// // while(pro == "" || pro == null) {
// //     pro = prompt("Valore non valido, reinserire l'input")
// // }


// /*COOKIES*/
// document.cookie = "nomeVar=valoreVar;expires="+new Date("2022/06/24"); //crea variabile nomeVar = valoreVar che scade in automatico alla data expires specificata
// //per aggiungere variavili usiamo l'operatore di assegnazione = (non +=)
// document.cookie = "secondaVar=secondaVal;expires="+new Date("2022/06/23 12:20")

// setCookie("prova", "test", 5)
// let secondaVar = getCookie("secondaVar")

// //per leggere e impostare dei cookies coviene creare delle funzioni
// function setCookie(variable, value, giorni) {
//     let d = new Date()
//     d.setTime(d.getTime() + (giorni*24*60*60*1000))
//     document.cookie = variable + "="+value+";expires=" + d
// }

// function getCookie(variable) {
//     let cookies = document.cookie.split(";")
//     cookies.forEach((e, i)=>{
//         if(e.charAt(0) == " "){
//             cookies[i] = cookies[i].substring(1) //dal secondo cookie in poi c'è uno spazio da togliere alla stringa
//         } 
//     })
//     for(let i = 0; i < cookies.length; i++) {
//         if(cookies[i].indexOf(variable) == 0) {
//             return cookies[i].substring(cookies[i].indexOf("=")+1)
//         }
//     }
//     return null
// }


// /*JSON*/
// //in JSON anche la chiave vuole i doppi apici
// //JS
// // email: "test@test.com",
// // anni: 52,
// // active: true
// //JSON
// // "email": "test@test.com",
// // "anni": 52,
// // "active": true -> numeri e boolean senza apici

// let obj = {
//     user: [
//         {
//             email: "test@test.com",
//             password: "testest"
//         }
//     ]
// }

// //converto oggetto js in stringa per inviarla in una chiamata HTTP
// var jsonString = JSON.stringify(obj)

// //converto stringa JSON (ricevuta come risultato della chiamata HTTP) in oggetto JS
// var jsObj = JSON.parse("{\"user\":[{\"email\":\"test@test.com\",\"password\":\"testest\"}]}")


/*AJAX*/
console.log("Inizo");
let res
//mandare requests (HTTP Request) al server (manipolare risorse esterne) senza bisogno di ricaricare
var xhttp = new XMLHttpRequest();

//prima di inviare (.send()) impostare la funzione di callback (cosa deve fare lo script quando la risposta arriva)
xhttp.onload = function () {
    console.log("OnLoad");
    if (this.readyState == 4 && this.status == 200) {
        //controllo che lo readyState sia 4 (risposta in arrivo (completata))
        //controllo che lo status sia 200 (successo)
        console.log(res = JSON.parse(this.responseText)); // converto la stringa di risposta in oggetto javascript e la assrgna a res (che sarà parametro del console.log() dopo l'esecizione dell'assegnazione )

    }
    if (this.status == 404) {
        //controllo uno status per gestire in maniera precisa quell'errore
        alert("HAI SBAGLIATO IL NOME DEL FILE!")
    }
}

//esegue la callback function ogni volta che il .readyState cambia
// possiamo impsotare una funzione per monitorare il progresso della richiesta
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 0){}
//     if(this.readyState == 1){}
//     if(this.readyState == 2){}
//     if(this.readyState == 3){}
//     if(this.readyState == 4){}
// }

xhttp.open('GET', "db.json") //imposta method della request e indirizzo della risorsa (file o API)
xhttp.send() //invia la richiesta
//dopo aver inviato il codice continua a eseguire (non aspetta una risposta)
console.log("Fine");


/*SPREAD OPERATOR*/
//Passa tutti gli elementi di un Array separati da una ,

// somma(3, 5, 6) //per avere i 3 elemnti dell'array come 3 parametri separati posso usare ...
let arr = [3, 5, 6];
somma(...arr)


/*REST PARAMETER*/
//come passare un numero indefinito di parametri SENZA rest parameter
function somma(arrPar) {
    arrPar.forEach((e, i) => {})
    // for(let p of arrPar){}
}
somma([2, 3, 4])

//come passare un numero indefinito di parametri CON rest parameter
function somma(...arrPar) {
    //la funzione accetta qualunque numero di parametri, saranno tutti inseriti in un Array chiamato arrPar
    arrPar.forEach((e, i) => {})
    // for(let p of arrPar){}
}
somma(2, 3, 4) //in function somma() il parametro sarà arrPar = [2, 3, 4]
somma(...arr) //somma(3, 5, 6)


/*forEach() su NodeList */
let w = document.querySelectorAll("input") //querySelectorAll -> NodeList
//Il forEach() di NodeList è identico al forEach di Array,
//I parametri sono in ordine l'elemento, l'indice (del giro), l'array (o NodeList) che stiamo iterando
w.forEach((e, i, coll) => {
    console.log(w)
})

//L'uso del terzo parametro di solito serve quando non abbiamo uin accesso veloce all'Array ma ci serve a ogni giro
// document.querySelectorAll("input").forEach((e, i, coll)=>{console.log(coll)}) //poco utile, conviene avere una variabile per riusabilità

//Esempio forEach con querySelectorAll
let inputs = document.querySelectorAll("input")
inputs.forEach((e) => {
    e.addEventListener("input", (event) => {
        if (event.target.validity.valid) {
            event.target.style.backgroundColor = "green"
            // event.target.classList.remove("notValid")
        } else {
            for (let prop in event.target.validity) {
                if (event.target.validity[prop]) {
                    console.log(prop + " non valido");
                }
            }
            event.target.style.backgroundColor = "red"
            // event.target.classList.add("notValid")
        }

        checkInputs()

        // if(document.querySelectorAll(".notValid").length > 0) {
        //     document.querySelector("button[type=submit]").classList.add("disabled")
        // } else {
        //     document.querySelector("button[type=submit]").classList.remove("disabled")
        // }
    })
})


function checkInputs() {
    let ok = true
    inputs.forEach((e) => {
        if (!e.validity.valid) {
            ok = false
        }
    })
    if (ok) {
        document.querySelector("button[type=submit]").classList.remove("disabled")
    } else {
        document.querySelector("button[type=submit]").classList.add("disabled")
    }
}