// class Ospedale {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//     posizione:string
//     private _numeroSale:number // private, questa proprietà puo essere modificata solo all'interno della classe (per esempio con il set)/simil static
//     readonly codiceSanitario:string // questa proprietà non può essere letta al di fuori della classe e può essere modificata solo nel costruttore
//     constructor(){
//         this.codiceSanitario = "qwe123"
//         this._numeroSale = 10;
//     }
//     get numeroSale() {
//         return this._numeroSale;
//     }
// }
// let o = new Ospedale();
// console.log(o.numeroSale)
// //ABSTRACT 
var Lavoratore = /** @class */ (function () {
    function Lavoratore(name, paga) {
        this.name = name;
        this.paga = paga;
    }
    Object.defineProperty(Lavoratore.prototype, "info", {
        get: function () {
            return "il lavoratore è " + this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Lavoratore;
}());
var Programmatore = /** @class */ (function (_super) {
    __extends(Programmatore, _super);
    function Programmatore(name, paga, linguaggi) {
        var _this = _super.call(this, name, paga) || this;
        _this.linguaggi = linguaggi;
        return _this;
    }
    Object.defineProperty(Programmatore.prototype, "stipendio", {
        get: function () {
            return this.paga * this.linguaggi.length;
        },
        enumerable: false,
        configurable: true
    });
    return Programmatore;
}(Lavoratore));
var Commerciale = /** @class */ (function (_super) {
    __extends(Commerciale, _super);
    function Commerciale(name, paga, nClienti) {
        var _this = _super.call(this, name, paga) || this;
        _this.nClienti = nClienti;
        return _this;
    }
    Object.defineProperty(Commerciale.prototype, "stipendio", {
        get: function () {
            return this.paga * this.nClienti;
        },
        enumerable: false,
        configurable: true
    });
    return Commerciale;
}(Lavoratore));
;
// let res: {
//     name:string, paga:number, tipologia: "p"|"c", n:number|string[]
// }[]
//GENERICS - VARIABILE PER LE TIPOLOGIE TYPESCRIPT (NELLE FUNZIONI)
// type T = string | number // tipologia che può avere 2 tipi 
// function identity(value:T):T{ // identity accetta string | number e può ritornare string | number
//     return value;
// }
function identityT(value) {
    return value;
}
var x = identityT(true);
function fetchApi(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
fetchApi("/lavoratori").then(function (response) {
    response.forEach();
});
function getLavoratori() {
    return __awaiter(this, void 0, void 0, function () {
        var lavoratori;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchApi("/lavoratori")];
                case 1:
                    lavoratori = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// Interface, modelli di oggetti solitamente implementati nelle classi (che dovranno seguire questo modello)
var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        return _this;
    }
    Cliente.prototype.getInfo = function () {
        return this.nome;
    };
    return Cliente;
}(Persona));
// let p:persona = {
//     nome: "adiener",
//     last_name: "Lopez",
//     age: 30,
//     getInfo() {
//         return this.name + " " + this.last_name;
//     }
// }
var Utente = /** @class */ (function () {
    function Utente() {
    }
    Utente.prototype.getInfo = function () {
        return this.nome + " " + this.last_name;
    };
    return Utente;
}());
