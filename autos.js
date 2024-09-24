"use strict";
//CLASE AUTO
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
//Declarar una nuva clase llamada Auto
var Auto = /** @class */ (function () {
    // Metodo para instanciar la clase, recibe 4 parámetros, se asignan los valores de los parámetros a las propiedades correspondientes de la clase.
    function Auto(marca, modelo, anio, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.puertas = puertas;
    }
    // Metodos de acceso a las propiedades, permiten obtener el valor de cada propiedad privada y retornan el valor de la propiedad correspondiente.
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.getPuertas = function () {
        return this.puertas;
    };
    return Auto;
}());
exports.Auto = Auto;
