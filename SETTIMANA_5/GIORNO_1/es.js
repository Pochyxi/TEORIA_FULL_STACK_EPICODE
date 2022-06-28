function start() {
    let budget = 1000
    let meta = budget / 2
    let minimo = 200
    let sueprata = false
    let acquisti = 0
    // let CONDIZIONE = true
    while (budget >= minimo) {

        let pagamento = Math.floor(Math.random() * 100) + 1
        budget -= pagamento
        acquisti++
        document.write("<br><br>Pagamento da: " + pagamento + "<br>")
        document.write("Budget rimasto: " + budget + "<br>")

        if (budget < meta && !sueprata) {
            document.write("Sei sotto la meta di " + meta);
            sueprata = true
        }

        // if(budget < minimo){
        //     // CONDIZIONE = false
        // }

    }
    document.write("Sei sotto il minimo di " + minimo);
    document.write("Acquisti totali: " + acquisti);
}

// let budget = 1000

// for(var j = 0; j < 1;  j++) {
//     budget -= 150
//     if(budget >= 200) {
//         j--
//     }
// }

// for(var i = 0; budget >= 200;  i++) {
//     budget -= 150
// }
// console.log("Acquisti totali: ", i);
// console.log("FINE");

