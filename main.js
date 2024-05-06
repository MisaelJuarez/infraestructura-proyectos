const listaNumeros = document.getElementById('lista-numeros');

const media = (arreglo) => {
    let media = 0; 
    arreglo.forEach(e => media += parseInt(e));
    return (media / arreglo.length).toFixed(2);
}

const mediana = (arreglo) => {
    arreglo.sort();
    let longitud = arreglo.length;
    let mitad = Math.floor(longitud / 2);
    if (arreglo.length % 2 == 0) {
        return (parseInt(arreglo[mitad - 1]) + parseInt(arreglo[mitad])) / 2;
    } else {
        return arreglo[mitad].toFixed(2); 
    }
}

const moda = (arreglo) => {
    let contador = [];
    let moda = 0;
    let maximoFrecuencia = 0;

    arreglo.forEach(function(elemento) {
        if (contador[elemento] === undefined) {
            contador[elemento] = 1;
        } else {
            contador[elemento]++;
        }

        if (contador[elemento] > maximoFrecuencia) {
            maximoFrecuencia = contador[elemento];
            moda = elemento;
        } else if (contador[elemento] === maximoFrecuencia) {
            moda = elemento;
        }
    });
    return moda;
}

document.getElementById('obtener').addEventListener('click',() => {
    let numeros = listaNumeros.value.split(',');
    if (!listaNumeros.value == '') {
        document.getElementById('resultado').textContent = `Media: ${media(numeros)}, Mediana: ${mediana(numeros)}, Moda: ${moda(numeros)}`;
    } else {
        alert('ingrese numeros en el input');
    }

});