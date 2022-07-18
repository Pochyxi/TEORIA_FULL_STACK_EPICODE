// JSON -> rappresentazione in stringa di oggetti javascript
let users = [];

fetch("users.json").then(res => res.json()).then((res) => {users = res;});


let obj = {
    nome: "flavio",
    cognome: "martinelli"
}

let str = JSON.stringify(obj); // oggetto js -> stringa json
console.log(str);

let parsedObject = JSON.parse(str); // stringa json -> oggetto js 
console.log(parsedObject);



// Per salvarci dei dati nel computer dell'utente possiamo lavorare sugli oggetti locaStorage e sessionStorage 

// localStorage e sessionStorage salvano le variabili in base al dominio

// localStorage mantiene in memoria le variabili fino allo spegnimento del computer
// sessionStorage mantiene in memoria le variabile fino allo spegnimento del browser

let value = 5;
// localStorage.setItem("numero", value); // creare o modificare una variabile
let val = localStorage.getItem("numero"); // leggere una variabile
localStorage.removeItem("numero"); // rimuove una variabile



let valueS = 5;
sessionStorage.setItem("numero", value);
let valS = sessionStorage.getItem("numero");
sessionStorage.removeItem("numero");

// se la key non esiste nello storage dara null

if(localStorage.getItem("key")) {} // controllare se esiste la variabile in memoria

// le variabili sono sempre salvate come stringhe
let n = parseInt(localStorage.getItem("numero")); // dobbiamo convertire i dati che leggiamo

// per salvare un oggetto in storage dobbiamo convertirlo in json
localStorage.setItem("key", JSON.stringify(obj)); 
// per leggere un oggetto in storage dobbiamo convertirlo da json
let o = JSON.parse(localStorage.getItem("key"));



//USO COMUNE DI STORAGE
// inizio script
// vogliamo dare il benvenuto all'utente, se non è loggato dare il form di login

if(localStorage.getItem("utente")) {
    benvenuto.innerHTML = "Benvenuto " + JSON.parse(localStorage.getItem("utente")).nome
    loginForm.remove()
} else {
    benvenuto.innerHTML = "Devi loggarti"
}

function login(user) {
    localStorage.setItem("utente", JSON.stringify(user));
}


//API - interfaccia per comunicare con il backend 
// noi non leggeremo mai in'intero backend/database/ file json, di solito mandiamo una richiesta per dei dati e riceviamo quei dati letti dal backend/database/json e computati

// ci interessa usare le api per richiedere di interagire con il backend

// per effettuare una chiamata API consideriamo 3 informazioni

// URL - l'indirizzo che indica l'api da contattare (può avere delle informazioni su quale elemento stiamo cercando) /api/people/3 -> swapi.dev/api/people/3/ (l'indirizzo dell'api e sempre da aggiungere al dominio che tiene online l'api)

// METHOD - il tipo di comando che vogliamo eseguire (è segnalato a fianco dell'url da contattare nelle documentazioni) 
//GET - LETTURA
//POST* - aggiungere / modificare *possono essere invertiti (controllare documentazione)
//PUT*  - aggiungere / modificare *possono essere invertiti (controllare documentazione)
//DELETE - rimuovere i dati


// aggiungere il body (nel caso dovessimo inviare noi dei dati all'api) - non sempre necessario se dobbiamo aggiungere o modificare delle risorse dovremo inviare i dati necessari

