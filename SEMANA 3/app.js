const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Funcion declarada
function incrementar(num) {
    return num + 1;
}

//2. Funcion Anonima
const multiplicar = function(factor) {
    return  function(num) {
        num * factor; 
    };
};

//3. Funcion Flecha (usada como funcion de orden superior)
const aplicatrOperacion = (array, operacion) => {
    return array.map(operacion)
};

//4. Closure
function crearContador(inicio) {
    let conteo = inicio;
    return function() {
        conteo += 1;
        return conteo;
    };
}

console.log(aplicatrOperacion(numeros, incrementar));
