var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var n1 = "Fabio";
var c1 = "Di Gloria";
var nc = "Nome completo: ".concat(n1, " ").concat(c1); // TEMPLATE LITERALS
console.log(nc);
// DECOSTRUZIONE DI UN ARRAY
var arr = [1, 2, 3];
var arr1 = ["a", "b", "c"];
var arrRes = __spreadArray(__spreadArray([], arr, true), arr1, true); // modo per unire più array con lo spread operator
function somma(a, b, c) {
    return a + b + c;
}
var x = arr[0], y = arr[1], z = arr[2]; // sto assegnando a delle variabili x y z dei valori presi dall'array arr[1, 2, 3]
console.log(somma(x, y, z)); // 1, 2, 3
function concatena(a, b) {
    return a + b;
}
calcolaTempoDiOgniOperazione(concatena(1, 2));
concatena(1, 2);
function calcolaTempoDiOgniOperazione(f) {
    var inizio = Date.now();
    f();
    return Date.now() - inizio;
}
