 
let n1 = "Fabio"
let c1 = "Di Gloria"

let nc = `Nome completo: ${n1} ${c1}`; // TEMPLATE LITERALS

console.log(nc);

// DECOSTRUZIONE DI UN ARRAY

let arr = [1, 2, 3]
let arr1 = ["a", "b", "c"]
let arrRes = [...arr, ...arr1] // modo per unire più array con lo spread operator

function somma(a:number, b:number, c:number) {
    return a + b + c;
}


let [x, y, z] = arr // sto assegnando a delle variabili x y z dei valori presi dall'array arr[1, 2, 3]

console.log(somma(x, y, z)) // 1, 2, 3

function concatena(a:number, b:number):number


function concatena(a:number, b:number):number {
    return a + b;
}



calcolaTempoDiOgniOperazione(concatena(1, 2))

concatena(1,2)

function calcolaTempoDiOgniOperazione(f) {
    let inizio = Date.now()
    f() 
    return Date.now() - inizio
}
