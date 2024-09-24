// CLASE CAMION

//Declarar una nueva clase llamada Camion
export class Camion {
    private marca: string;
    private modelo: string;
    private anio: number;

    // Metodo para instanciar la clase, recibe 3 parámetros, se asignan los valores de los parámetros a las propiedades correspondientes de la clase.
    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;

    }

    // Metodos de acceso a las propiedades, permiten obtener el valor de cada propiedad privada y retornan el valor de la propiedad correspondiente.
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getAnio(): number {
        return this.anio;
    }

}

