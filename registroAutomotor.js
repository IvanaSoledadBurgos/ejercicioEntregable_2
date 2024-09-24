"use strict";
// CLASE REGISTRO AUTOMOTOR
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.getVehiculos = function () {
        return this.vehiculos;
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (marca, modelo, vehiculo) {
        var indice = this.vehiculos.findIndex(function (v) { return v.getMarca() === marca && v.getModelo() === modelo; });
        if (indice !== -1) {
            this.vehiculos[indice] = vehiculo;
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (marca, modelo) {
        this.vehiculos = this.vehiculos.filter(function (v) { return !(v.getMarca() === marca && v.getModelo() === modelo); });
    };
    RegistroAutomotor.prototype.getVehiculo = function (marca, modelo) {
        var vehiculo = this.vehiculos.find(function (v) { return v.getMarca() === marca && v.getModelo() === modelo; });
        return vehiculo || null;
    };
    RegistroAutomotor.prototype.getVehiculosPorMarca = function (marca) {
        return this.vehiculos.filter(function (v) { return v.getMarca() === marca; });
    };
    RegistroAutomotor.prototype.getVehiculosPorModelo = function (modelo) {
        return this.vehiculos.filter(function (v) { return v.getModelo() === modelo; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
