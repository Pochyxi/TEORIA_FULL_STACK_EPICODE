// Server
/*
- collegare a indirizzi precise operazioni e risorse (web pages e api)
- esecuzioni in backend
- gestione delle risorse
*/

//Creeremo uno script js per inizializzare un server e dargli funzionalità

//Runtime Node.js -> npm init
//Libreira per creare il server Express -> npm i express --save (--save aggiunge alle dependecies del package.json la libreria, sarà importabile con il comando node require)

//Comandi per iniziliazzare il server
var express = require('express'); //importo express
var app = express(); //inizializzo express, app sarà l'oggetto che definisce il mio server

//!! Bisogna impostare la directory di base da usare come relativa per le risorse (/index.html sarebbe __dirname+"/index.html")
app.use(express.static(__dirname)); //specifica la cartella di partenza
// var path = require("path")
// app.use(express.static(path.join(__dirname, "public")))

var loggedUser = {
    nome:"Flavio"
}


var users = [
    {
        id: 1,
        nome: "A"
    },
    {
        id: 2,
        nome: "B"
    },
    {
        id: 3,
        nome: "C"
    }
]

// app.get(route, callbackFunction )
//GET - associare a un preciso indirizzo una precisa risorsa
app.get("/", function(req, res){ // route: "/" identifica l'indirizzo principale localhost:3000/
    res.render("index.html") // renderizza file
})
app.get("/home", function(req, res){
    res.send("BENVENUTO " + loggedUser.nome + "")
})

//Semplice API
app.get("/users", function(req, res){
    res.send(JSON.stringify(users))
})

app.post("/users", function(req, res) {
    console.log(req);
    let data = req.body;
    console.log(data);

    // data = JSON.parse(data);
    data.id = users.length;
    users.push(data);
    res.send(JSON.stringify(data));
})


//Api per leggere un .json !!ES
let usersJson = require("./users.json");
app.get("/utenti", (req, res)=>{
    res.send(usersJson)
})



app.get("/changeUser", function(req, res){
    loggedUser = {
        nome: "Paolo"
    }
    res.send("<a href=\"/home\">UTETNE CAMBIATO VAI ALLA HOME</a>")
})

//Per gestire rotte non definite
app.use(function(req, res, next){
    res.status(404).send("Pagina non trovata!")
})

//Avvio del server
let port = 3000 
app.listen(port, function(){
    console.log("Server aperto alla porta " + port); //localhost:3000
})

//node server.js -> avviare il server
//ctrl + c interrompe il server