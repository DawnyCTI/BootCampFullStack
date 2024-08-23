// Definición de la Clase Persona
class Persona {
    constructor(nombre, edad = null, intereses = []) {
        this.nombre = nombre;
        this.edad = edad;
        this.intereses = intereses;
    }

    añadirInteres(interes) {
        if (!this.intereses.includes(interes)) {
            this.intereses.push(interes);
        }
    }

    eliminarInteres(interes) {
        const index = this.intereses.indexOf(interes);
        if (index > -1) {
            this.intereses.splice(index, 1);
        }
    }

    mostrarIntereses() {
        return this.intereses.length > 0 ? this.intereses.join(', ') : 'No tiene intereses registrados.';
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad !== null ? this.edad + ' años' : 'No especificada'}`);
        console.log(`Intereses: ${this.mostrarIntereses()}`);
    }
}

// Crear y utilizar objetos de la clase Persona
let persona1 = new Persona('Dawny', 21, ['Programación', 'Desarrollo web',]);
let persona2 = new Persona('jOSEFA', 25, ['Leer', 'Viajar']);

persona1.mostrarInformacion();
persona1.añadirInteres('Cocinar');
persona1.eliminarInteres('Desarrollo web');
persona1.mostrarInformacion();

persona2.mostrarInformacion();
persona2.añadirInteres('Cine');
persona2.eliminarInteres('Viajar');
persona2.mostrarInformacion();
