//ENUM 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbraio"] = 2] = "Febbraio";
    Months[Months["Marzo"] = 3] = "Marzo";
})(Months || (Months = {}));
console.log(Months.Gennaio);
var classi = ["FE1, FE2, FE3", "FE4, FE5", "FE6"];
var s = {
    name: "test",
    "class": classi[2]
};
var Classi;
(function (Classi) {
    Classi[Classi["FE1"] = 1] = "FE1";
    Classi[Classi["FE2"] = 2] = "FE2";
    Classi[Classi["FE3"] = 3] = "FE3";
    Classi[Classi["FE4"] = 4] = "FE4";
    Classi[Classi["FE5"] = 5] = "FE5";
    Classi[Classi["FE6"] = 6] = "FE6";
    Classi[Classi["FE7"] = 7] = "FE7";
})(Classi || (Classi = {}));
var sCORRETTO = {
    name: "test",
    "class": Classi.FE3
};
// CLASSI
var Lavoratore = /** @class */ (function () {
    function Lavoratore(name) {
        this.name = name;
    }
    Lavoratore.prototype.selezionaCompito = function () {
        var _this = this;
        fetch("todos").then(function (res) { return res.json(); }).then(function (todos) {
            _this.compito = _this.assegnaTodo();
        });
    };
    Lavoratore.prototype.assegnaTodo = function () {
        return "debug";
    };
    Lavoratore.prototype.getName = function () {
        return this.name;
    };
    Lavoratore.prototype.completaCompito = function () {
        if (this.compito == null) {
            throw new Error("Non completato");
        }
        return this.compito;
    };
    return Lavoratore;
}());
var l = new Lavoratore("Adiener");
l.selezionaCompito();
console.log(l.getName());
//Paradigmi dell'OOP
//Incapsulamento - private/public 
// ereditarietà - extends
//polimorfismo 
var Veicolo = /** @class */ (function () {
    function Veicolo(consumo, ruote, colore) {
        this.consumo = consumo;
        this.ruote = ruote;
        this.colore = colore;
    }
    Veicolo.prototype.getConsumo = function (prezzo) {
        return this.consumo * prezzo;
    };
    return Veicolo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(consumo, colore) {
        return _super.call(this, consumo, 2, colore) || this;
    }
    Moto.prototype.getConsumo = function () {
        if (this.consumo > 10) {
            return _super.prototype.getConsumo.call(this, 10);
        }
        else {
            return _super.prototype.getConsumo.call(this, 5);
        }
    };
    return Moto;
}(Veicolo));
var kawasaki = new Moto(120, "verde");
console.log(kawasaki.getConsumo());
var ContoBancario = /** @class */ (function () {
    function ContoBancario(name) {
        this.name = name;
    }
    ContoBancario.prototype.getIban = function () {
        return "asdaeafgg";
    };
    ContoBancario.prototype.apriConto = function (saldo) {
        this.iban = this.getIban();
        if (saldo > 100) {
            return true;
        }
        else { }
    };
    return ContoBancario;
}());
