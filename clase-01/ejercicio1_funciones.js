const mostrarLista = (array) => {
    console.log('------------------')
    if (array.length === 0) return 'Lista vacia'


    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }

    return `La longitud del array es ${array.length}`
}

console.log(mostrarLista([1,2,3]));
console.log(mostrarLista([]));
console.log(mostrarLista(['Lisandro', 'lala', 22]));


/*DEFINIMOS LA FUNCION "mostrarLista", la cual recibira un arreglo con elementos como parametro.
- Si la lista está vacía, devolvera un mensaje indicando "Lista Vacia"
-Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la lon
gitud de la lista (Utilizar siempre template strings)
-Invocar la funcion en casos de prueba.*/