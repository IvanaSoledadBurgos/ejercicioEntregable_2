// CLASE MOTO

//Declarar una nueva clase llamada Moto
export class Moto {
    private marca: string;
    private modelo: string;
    private anio: number;
    private cilindrada: number;

    // Metodo para instanciar la clase, recibe 4 parámetros, se asignan los valores de los parámetros a las propiedades correspondientes de la clase.
    constructor(marca: string, modelo: string, anio: number, cilindrada: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.cilindrada = cilindrada;
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
    getCilindrada(): number {
        return this.cilindrada;
    }
}


