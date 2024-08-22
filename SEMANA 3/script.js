class Persona {
    constructor(nombre, edad, ocupacion, habilidades, metas) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
        this.habilidades = habilidades;
        this.metas = metas;
    }

    trabajar(horas) {
        console.log(`${this.nombre} esta trabajando durante ${horas} horas.`);
    }

    estudiar(tema) {
        console.log(`${this.nombre} esta estudiando ${tema}.`);
    }

    programar(proyecto) {
        console.log(`${this.nombre} esta programando en el proyecto: ${proyecto}.`);
    }

    relajarse() {
        console.log(`${this.nombre} esta tomando un descanso.`);
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Ocupacion: ${this.ocupacion}`);
        console.log(`Habilidades: ${this.habilidades.join(', ')}`);
        console.log(`Metas: ${this.metas.join(', ')}`);
    }
}


let dawny = new Persona(
    'Dawny', 
    21, 
    'Trabaja como soporte tecnico', 
    ['Programacion', 'Desarrollo web', 'Comer'], 
    ['Mejorar habilidades en frontend', 'Finalizar la carrera en desarrollo de software']
);

dawny.mostrarInformacion();
dawny.trabajar(8);
dawny.estudiar('JavaScript');
dawny.programar('Proyecto de Inteligencia Artificial');
dawny.relajarse();

