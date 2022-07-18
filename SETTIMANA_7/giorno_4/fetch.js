// // // REST
// // //Si basa su una struttura Client/server dove ciascuna delle parti bha un ruolo
// // //Client -> manda la richiesta, riceve la risposta e gestisce quei dati (frontend)
// // //Server -> leggere e manipolare le risorse e inviare i risultati (computati) al client


// // //Per costruire una richiesta API REST dobbiamo specificare
let url = "http://jsonplaceholder.typicode.com/posts"
// // //url -> risorsa/singola entry della risorse
// // //method HTTP -> GET, POST, PUT, DELETE
// // //Se usiamo PUT o POST aggiungiamo il body -> dati da inviare all'api per effettuare modifiche o aggiunte (sono specificati i dati da inviare)

// // //COMUNICAZIONE STATELESS -> riceviamo una risposta ma non abbiamo idea delle varie fasi della comunicazione


// // //FETCH -> funzione più moderna in js per mandare richieste HTTP
// // // AJAX -> inviare richieste in maniera asincroma (aspettando il risultato) senza cambiare/ricaricare la pagina

// // // let f = fetch(url, [options])
// // //url -> indirizzo da contattare * obbligatorio
// // //[options] -> metodo HTTP, body, header (informazioni aggiuntive della comunicazione) - facoltativo, se non specificato il method sarà GET

// // //restituisce una Promise -> esecuzione asincorna, le operazionoi successive vanno indicate in una callback function (parametro del .then() )
// // console.log("inzio");
// // let response = fetch(url)
// // let posts = []
// // response.then(res => res.json()).then((r) => {
// //     posts = r.data
// // }); //Gestiamo la risposta nel .then()
// // console.log("fine");



// // //PROMISE
// // //Promise richiede come parametro per il constructor un funzione (con all'interno il codice asincrono da eseguire)
// // let p = new Promise((succ, err) => { //i due parametri da mettere nella funzione che passiamo saranno due funzioni di callback
// //     setTimeout(() => {
// //         console.log("TIMEOUT");
// //         if (true) {
// //             succ("SUCCESS") //quando eseguo il parametro succ() indico la fine dell'esecuzione della promise positiva e invio il suo parametro come response alla callback function
// //         } else {
// //             err("ERROR") //quando eseguo il parametro err() infdico la fine dell'esecuzione della promise negativa e invia dati ed errori come parametro alla callback function 
// //         }
// //     }, 2000);
// // })

// // p.then((res) => {
// //     console.log("CALLBACK RES", res)
// // }) //nel .then() della promise specifichiamo come parametro la callback function

// // //Callback function
// // // console.log("Start");
// // // setTimeout(() => {
// // //     console.log("TIMEOUT");
// // //     callback()
// // // }, 2000);
// // // console.log("END");
// // // function callback() {
// // //     console.log("CALLBACK");
// // // }


// // //Le promise raramente le creeremo ma ci arrivano spesso come risultati di funzioni e metodi che hanno esecuzione asincrona all'interno



// // // async function test(callback) {
// // //     setTimeout(() => {
// // //         console.log("TIMEOUT");
// // //         callback()
// // //     }, 2000);

// // // }

// // // test(()=>{console.log("fine")})

// // // p.then(gestisciRes)


// // //AWAIT-> aspettare che un'esecuzione asincrona termini prima di andare avanti con il resto del codice
// // //Questa cosa non possiamo farla nel flow principale del codice (js non può fermarsi)
// // //Possiamo però aspettare unb'esecuizoine asincrona all'interno di una ASYNC Function

// function asyncExec() {
//     return new Promise((succ) => {
//         setTimeout(() => {
//             console.log("Q RESOLVED");
//             succ("FINE Q");
//         }, 5000)
//     })
// }

// // let q = asyncExec()
// // q.then((res)=>{console.log("THEN", res)}) //mettiamo in coda l'esecuzione successiva
// // // let res = await asyncExec();
// // // console.log("AWAIT", res)//non posso farla nel codice sincrono principale

// async function runAsyncFunc() { //se la funzione contiene un await di esecuzione asincrona, deve essere async
//     console.log("S");
//     let res = await asyncExec() //await la promise restituita da asyncExec() !! Non sto aspettando la funzione, asyncExec non è async
//     //let res = await promise
//     //let res = risultato
//     //res == risultato
//     console.log("AWAIT", res);
//     console.log("E");
// }

// // runAsyncFunc().then(()=>{console.log("THEN")})
// // la funzione asincrone si comportano come normali esecuzioni asincrone (Promises) nel flow princile


// let f = fetch(url) //fetch restituisce Promise
// f.then((res) => {
//     console.log("Fetch ended");
//     console.log(res);
// })

// // let res = await fetch(url)
// // console.log("Fetch ended");
// // console.log(res);

// async function getPosts() {
//     let res = await fetch(url)
//     console.log("Fetch ended");
//     console.log(res);
// }
// console.log("A");
// getPosts().then(() => {
//     console.log("GET POSTS")
// }) //il then probabilmente non serve (se non per segnalare la fine dell'esecuzione async) perchè tutte le operazioni fatte con il res di fetch() sono eseguite sincronamente nella funzione getPosts()
// console.log("B");


// //Metodi dell'oggeto Response -> il risultato di una Promise
// let fetchPromise = fetch(url)
// // console.log(fetchPromise);
// fetchPromise.then(
//     function (fetchResponse) {
//         console.log(fetchResponse);
//         //fetchResponse.status ->200-299 success / 400-499 errori client / 500-599 errori server
//         //fetchResponse.ok -> true/false -> successo dell'esecuzione

//         //metodi di lettura dei dati -> return Promise
//         let promiseResult = fetchResponse.json();
//         // promiseResult = fetchResponse.text();
//         // promiseResult = fetchResponse.formData();
//         // promiseResult = fetchResponse.blob();
//         // promiseResult = fetchResponse.arrayBuffer();
//         // promiseResult.then((res)=>{console.log(res);}) //vogliamo evitare il then dentro al then
//         return promiseResult;
//     }
// ).then( //questo then è applicato alla promise restituita dal precedente then (promiseResult)
//     function (result) {
//         console.log("Result");
//         console.log(result);
//     }
// )

// //Compatto
// let fetchProm = fetch(url)
// // fetchProm.then((fetchResponse)=>{return fetchResponse.json()}) // (res)=>{return res+1} -> res => res+1 ->scrittura compatta per una funzione che restituisce l'argomento a destra della freccia

// fetchProm.then(fetchResponse => fetchResponse.json()).then((res)=>{
//     //esecuzoine con il risultato

// })

// let posts = []

// fetch(url).then(res=>res.json()).then((res)=>{
//     //esecuzione
//     console.log(res);
//     // document.write(res.title)
//     // document.write(res.body)
//     // document.write(res.userId)
//     posts = res
// })

async function getPosts() {

    await fetch(url).then(res => res.json()).then((res) => {
        //esecuzione
        console.log(res);
        // document.write(res.title)
        // document.write(res.body)
        // document.write(res.userId)
        posts = res
    })

    getVisibleItems()

    function getVisibleItems() {
        document.getElementById("table").innerHTML = "";
        posts.forEach((e) => {
            let tr = document.createElement("tr")
            tr.innerHTML = e.title
            let btn = document.createElement("button")
            btn.innerHTML = "ELIMINA";
            btn.addEventListener("click", () => {
                posts = posts.filter((p) => {
                    return e.id != p.id
                })
                getVisibleItems()
            })
            tr.append(btn)
            document.getElementById("table").append(tr)
        })
    }
}


console.log("a");
getPosts()
console.log("b");

//senza sync function il codice sarebbe così
// let posts = []
// fetch(url).then(res => res.json()).then((res) => {
//     posts = res
// }).then(() => {
//     function getVisibleItems(){
//         document.getElementById("table").innerHTML = "";
//         posts.forEach((e)=>{
//             let tr = document.createElement("tr")
//             tr.innerHTML = e.title
//             let btn = document.createElement("button")
//             btn.innerHTML = "ELIMINA";
//             btn.addEventListener("click", ()=>{
//                 posts = posts.filter((p)=>{
//                     return e.id != p.id
//                 })
//                 getVisibleItems()
//             })
//             tr.append(btn)
//             document.getElementById("table").append(tr)
//         })
//     }
//     getVisibleItems();
// })
// console.log("benvenuto");


//parametro [options] di fetch (es: aggiungere un nuovo utente)
let urlUtenti = "http://jsonplaceholder.typicode.com/users";
let data = {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}
//opzioni per aggiugnere i dati da inviare e il metodo da usare
let options = {
    // * - valore se omessa la proprietà
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached !!!! 
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
}

//chiamata post con fecth
fetch(urlUtenti, options).then(res=>res.json()).then((res)=>{
    console.log("POST");
    console.log(res);
})

//DELETE
let urlDelete = "http://jsonplaceholder.typicode.com/users/8" //in REST indico l'id dell'elemento da eliminare nell'url
let delOptions = {
        method: 'DELETE'
}

//chiamata post con fecth
fetch(urlDelete, delOptions).then(res=>res.json()).then((res)=>{
    console.log("PODELETEST");
    console.log(res);
})

