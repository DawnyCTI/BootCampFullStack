class Libro {
    paginas;
    precio;
    constructor(titulo, autor, paginas, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.precio = precio;
    }

    get precioConMoneda() {
        return `RD\$${this.precio}`;
    }

    set precioNuevo(nuevoPrecio) {
        if(nuevoPrecio <= 0) {
            console.error('El precio no puede ser negativo')
        } else {
            this.precio = nuevoPrecio;
        }
    }
}

const elPrincipito = new Libro('El Principito', 'Anonimo', 500, 1500);
//elPrincipito.precio = 100;
console.log('Precio: ', elPrincipito.precio);
console.log('Precio: ', elPrincipito.precioConMoneda);

elPrincipito.precioNuevo = -1;
console.log('Precio Nuevo: ', elPrincipito.precioConMoneda);

console.log('Paginas:', elPrincipito.paginas); 