// 1. Crear una función que reciba un número y devuelva el doble del mismo.
function doble(numero){
    return numero * 2;
}

// 2. Crear una función que reciba un número y devuelva el triple del mismo.
function triple(numero){
    return numero * 3;
}

// 3. Crear una función que reciba un número y devuelva si es par o impar.
function parImpar(numero){
    if(numero % 2 === 0){
        return "Es par";
    } else {
        return "Es impar";
    }
}

// 4. Crear una función que reciba un número y devuelva si es positivo o negativo.
function positivoNegativo(numero){
    if(numero >= 0){
        return "Es positivo";
    } else {
        return "Es negativo";
    }
}

// 5. Crear una función que reciba una letra y devuelva si es vocal o consonante.
function vocalConsonante(letra){
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return "Es vocal";
    } else {
        return "Es consonante";
    }
}

