// fetch dei dati sull'api del server
// visualizzazione dei dati in tabella (o altro)
//ogni elemento mostrerà pochi dati e un tasto dettagli 
// il tasto dettagli mostra tutte le informazioni di quella precisa riga

let users = [];

let f = fetch("https://jsonplaceholder.typicode.com/posts")

f.then((response) => {
    return response.json();
}).then((result) => {

    console.log(typeof result);

    users = result;

    console.log(typeof users);

    users.forEach((e) => {
        let tr = document.createElement("tr");
        tr.innerHTML = "<td>"+ e.title + "</td>"
        let btn = document.createElement("button");
        btn.addEventListener("click", () => {
            alert(e.id)
        });
        tr.append(btn);
        document.getElementById("table").append(tr);
    });
});

setTimeout(() => {
    console.log(users);
},1000);




