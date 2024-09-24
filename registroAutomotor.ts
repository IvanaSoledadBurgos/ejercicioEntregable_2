// CLASE REGISTRO AUTOMOTOR

//Se importan las clases Auto , Moto y Camion
import { Auto } from './autos';
import { Moto } from './motos';
import { Camion } from './camiones';

//Se declara una nueva clase llamada RegistroAutomotor
class RegistroAutomotor {
    private vehiculos: (Auto | Moto | Camion)[]; //Se declara una propiedad privada llamada vehiculos, que es un arreglo de objetos que pueden ser Auto, Moto o Camion

    constructor() {
        this.vehiculos = []; //inicializa la propiedad vehiculos como un arreglo vacío.
    }

    agregarVehiculo(vehiculo: Auto | Moto | Camion) {
        this.vehiculos.push(vehiculo); //Agrega un nuevo vehículo al arreglo vehiculos.
    }

    getVehiculos(): (Auto | Moto | Camion)[] {
        return this.vehiculos; //Retorna el arreglo completo de vehículos.
    }

    modificarVehiculo(marca: string, modelo: string, vehiculo: Auto | Moto | Camion) {
        const indice = this.vehiculos.findIndex((v) => v.getMarca() === marca && v.getModelo() === modelo);
        if (indice !== -1) {
            this.vehiculos[indice] = vehiculo;
        }
    }

    //Busca un vehículo por marca y modelo y lo reemplaza con el nuevo objeto vehiculo.
    darDeBaja(marca: string, modelo: string) {
        this.vehiculos = this.vehiculos.filter((v) => !(v.getMarca() === marca && v.getModelo() === modelo));
    }

    //Elimina un vehículo del arreglo vehiculos según marca y modelo.
    getVehiculo(marca: string, modelo: string): Auto | Moto | Camion | null {
        const vehiculo = this.vehiculos.find((v) => v.getMarca() === marca && v.getModelo() === modelo);
        return vehiculo || null;
    }

    //Busca un vehículo por marca y modelo y lo retorna. Si no se encuentra, retorna null.
    getVehiculosPorMarca(marca: string): (Auto | Moto | Camion)[] {
        return this.vehiculos.filter((v) => v.getMarca() === marca); //Retorna un arreglo de vehículos que coincidan con la marca mencionada.
    }

    //Busca un vehiculo por modelo y retorna un arreglo de vehículos que coincidan con el modelo mencionado.
    getVehiculosPorModelo(modelo: string): (Auto | Moto | Camion)[] {
        return this.vehiculos.filter((v) => v.getModelo() === modelo); 
    }
}

export { RegistroAutomotor }; //Se exporta la clase RegistroAutomotor para usarlo en otros archivos.





