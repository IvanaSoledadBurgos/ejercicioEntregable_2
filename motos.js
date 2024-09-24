"use strict";
// CLASE MOTO
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, anio, cilindrada) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada;
    }
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getAnio = function () {
        return this.anio;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}());
exports.Moto = Moto;
