/* class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    emitirSom() : void{
        console.log(`${this.name} está emitindo um som.`)
    }
} */
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.emitirSom = function () {
        console.log("".concat(this.name, " est\u00E1 emitindo um som."));
    };
    return Animal;
}());
/* const cachorro = new Animal('Rex')
//cachorro.name = 'Buddy'
console.log(cachorro.name )
cachorro.emitirSom()

const gato = new Animal('Miau')
gato.emitirSom() */
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        _super.prototype.emitirSom.call(this);
        console.log("".concat(this.name, " est\u00E1 latindo."));
    };
    return Cachorro;
}(Animal));
var cachorro = new Cachorro('Rex');
console.log(cachorro.name);
cachorro.emitirSom();
