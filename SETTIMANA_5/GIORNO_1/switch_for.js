// let now = new Date()
// let d = prompt("Inserire un giorno della settimana")
// let n = Number.parseInt(d);

// let giornoSettimana;

// switch (n) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         alert("fine")
//         break;
//     case 0:
//     case 6:
//         alert("case weekend")
//         giornoSettimana = "Weekend";
//         break;
//     default:
//         giornoSettimana = "errore";
//         break;
// }



// switch (n) { /// d === 1, d === 2 per ogni case
//     case 0: 
//         giornoSettimana = "Domenica";
//         break;
//     case 1:
//         giornoSettimana = "Lunedì";
//         break;
//     case 2:
//         giornoSettimana = "Martedì";
//         break;
//     case 3:
//         giornoSettimana = "Mercoledì";
//         break;
//     case 4:
//         giornoSettimana = "Giovedì";
//         break;
//     case 5:
//         giornoSettimana = "Venerdì";
//         break;
//     case 6:
//         giornoSettimana = "Sabato";
//         break;
//     default:
//         giornoSettimana = "Errore, giorno non riconosciuto";
//         break;
// }

// alert(giornoSettimana);



/*CICLI*/

// var check = true
// document.write("INIZIO<br><br>")
// do {
//     let giorno = prompt("Inserire un giorno")
//     switch (giorno) {
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//             document.write("Giorno infrasettimanale<br>")
//             check = true
//             break;
//         case '6':
//         case '0':
//             check = true
//             document.write("Giorno weekend<br>")
//             break
//         default:
//             check = false;
//     }
// } while(check)
// document.write("<br>Fine")

// let i = 0
// arr = [1, 2, 3, 4, 5 ,6, 7, 8]
// while(i < arr.length){
//     document.write(arr[i])

//     i++
// }

// let j = 0
// do {
//     document.write(arr[i])
//     j++
// } while(j < arr.length)

/*FOREACH*/
// if(true) {
//     let arr = [14, 22, 36, 44, 52, 61, 57]
//     console.log("R", arr);
//     arr.forEach(f)
// }

// function f(e, i, a) {
//     document.write("<br>")
//     a[i] += 1
//     console.log("F", a[i]);
// }

// arr.forEach(f)
// arr.forEach(function(e, i){
//     document.write("<br>")
//     document.write(e + " - " + i)
// })
// arr.forEach(
//     (e, i)=>{
//         document.write("<br>")
//         document.write(e + " - " + i)
//     }
// )

// // let i = 0
// // while(i < arr.length) {
// //     f(arr[i])
// //     i++
// // }

let arr = [2, 1, 3, 5, 3, 6, 7]
console.log("ARR", arr);

/*MAP*/
// let newArr = arr.map(p)
// let newArr = arr.map(function(e, i){
//     return 0
// })
// let newArr = arr.map((e, i)=>{ return e*2 })
// console.log("NEWARR", newArr);

// function p(e, i) {
//     return (e+1)
// }

/*FILTER*/
// let filteredArr = arr.filter(fl)
// console.log("Filter", filteredArr);

// function fl(e, i){
//     //RETURN VERO O FALSO
//     return confirm("Vuoi includere l'elemento "+ e + "?")
// }

/*REDUCE*/
let reduced = arr.reduce(rd)
let disp = arr.reduce(dispari, 0)
console.log("DISPARI", disp);
// let reduced = arr.reduce(function(t, e, i){return t+e})
// let reduced = arr.reduce((t, e, i)=>{return t+e})
// let reduced = arr.reduceRight(rd)

function rd(t, e, i) {
    return t + e
}

function dispari(t, e) {
    return t + (e % 2)
}

// let totale = 0;
// arr.forEach((e)=>{totale += e})

console.log("REDUCE", reduced);


/*EVERY SOME INDEXOF */

// let index = arr.indexOf(5)
let index = arr.indexOf(3)
console.log("INDEX", index)

//SPREAD OPERATOR
let arrProva = [...arr]

//Ogni indice trovato

let indexArr = []
while(arrProva.indexOf(3) != -1){
    let j = arrProva.indexOf(3)
    indexArr.push(j)
    arrProva[j] = null
}



// let notFinished = true
// while (notFinished) {
//     let indexFound
//     if (indexArr.length == 0) {
//         indexFound = arr.indexOf(3)
//     } else {
//         indexFound = arr.indexOf(3, indexArr[indexArr.length - 1] + 1)
//     }

//     if(indexFound != -1) {
//         indexArr.push(indexFound)
//     } else {
//         notFinished = false
//     }
// }

console.log("Index Arr", indexArr)

/*EVERY e SOME*/
let every = arr.every(pari)
// let every = pari(arr[0]) && pari(arr[1]) && pari(arr[2]) && pari(arr[3]) && pari(arr[4]) && pari(arr[5]) && pari(arr[6]) && pari(arr[7]) 

let some = arr.some((e, i)=>{ return (e%2 == 0) })
// let some = pari(arr[0]) || pari(arr[1]) || pari(arr[2]) || pari(arr[3]) || pari(arr[4]) || pari(arr[5]) || pari(arr[6]) || pari(arr[7]) 

console.log("Tutti pari?", every);
console.log("Qualcuno pari?", some);

function pari(e, i) {
    return e % 2 == 0
}

/*find() e findIndex() da slide */


/*FOR*/
for(var i = 0; i < 10; i++){
    document.write(i+"<br>")
}

// var i = 0
// while(i < 10){
//     document.write(i+"<br>")
//     i++
// }



for(var i = 0; i < arr.length; i++){
    document.write(arr[i]+"<br>")
}

//for in & for of
for(let ind in arr) {
    console.log("For IN", ind, arr[ind]);
}

for(let el of arr) {
    console.log("FOR Of", el)
}
let s = "FLAVIO"
for(let lettera of s) {
    console.log(lettera);
}


