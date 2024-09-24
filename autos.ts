//CLASE AUTO

//Declarar una nuva clase llamada Auto

export class Auto { //Con export va a permitir que esta clase sea utilizada en otros archivos
    //propiedades privadas, solo se puede acceder desde el constructor
    private marca: string;
    private modelo: string;
    private anio: number;
    private puertas: number;

    // Método para instanciar la clase, recibe 4 parámetros, se asignan los valores de los parámetros a las propiedades correspondientes de la clase.
    constructor(marca: string, modelo: string, anio: number, puertas: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.puertas = puertas;
    }

    // Métodos de acceso a las propiedades, permiten obtener el valor de cada propiedad privada y retornan el valor de la propiedad correspondiente.
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getAnio(): number {
        return this.anio;
    }
    getPuertas(): number {
        return this.puertas;
    }
}


