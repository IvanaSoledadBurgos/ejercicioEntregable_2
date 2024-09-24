"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registroAutomotor_1 = require("./registroAutomotor");
var autos_1 = require("./autos");
var motos_1 = require("./motos");
var camiones_1 = require("./camiones");
var registro = new registroAutomotor_1.RegistroAutomotor();
registro.agregarVehiculo(new autos_1.Auto('Toyota', 'Corolla', 2020, 4));
registro.agregarVehiculo(new motos_1.Moto('Honda', 'CBR', 2020, 270));
registro.agregarVehiculo(new camiones_1.Camion('Scania', 'R450', 2010));
//Mostrar vehiculos registrados
console.log(registro.getVehiculos());
//Modificar vehiculo
registro.modificarVehiculo('Toyota', 'Corolla', new autos_1.Auto('Toyota', 'Corolla', 2022, 4));
console.log(registro.getVehiculo('Toyota', 'Corolla 2022'));
//Dar de baja vehiculo
registro.darDeBaja('Honda', 'CBR');
//Mostrar vehiculos registrados despues de dar de baja
console.log(registro.getVehiculos());
