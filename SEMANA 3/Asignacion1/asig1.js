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

    mostrarInformacion() {
        const infoDiv = document.getElementById('persona-info');
        infoDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${this.nombre}</p>
            <p><strong>Edad:</strong> ${this.edad !== null ? this.edad + ' años' : 'No especificada'}</p>
            <p><strong>Intereses:</strong></p>
            <ul id="intereses-lista">
                ${this.intereses.map(interes => `<li>${interes}</li>`).join('')}
            </ul>
        `;
    }
}

// Crear y utilizar objetos de la clase Persona
let persona = null;

document.getElementById('crearPersonaBtn').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    persona = new Persona(nombre, edad ? parseInt(edad) : null);
    persona.mostrarInformacion();
});

document.getElementById('añadirInteresBtn').addEventListener('click', () => {
    if (persona) {
        const interes = document.getElementById('interes').value;
        persona.añadirInteres(interes);
        persona.mostrarInformacion();
    }
});

document.getElementById('eliminarInteresBtn').addEventListener('click', () => {
    if (persona) {
        const interes = document.getElementById('interes').value;
        persona.eliminarInteres(interes);
        persona.mostrarInformacion();
    }
});
