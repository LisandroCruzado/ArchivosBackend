const suma = ( num1, num2 ) => num1 + num2
const resta = ( num1, num2 ) => num1 + num2
const multip = ( num1, num2 ) => num1 * num2

const array = [1,2,3,4,5,6]

const operaciones = ( num1, num2, callback ) => {
    console.log('Voy a realizar una operación, no sé cuál, pero lo haré!')
    let resultado = callback( num1, num2 )
    console.log(`El resultado de la operación que no supe cuál fué, es: ${resultado}`);
}


operaciones(2,5,suma);
operaciones(2,5,resta);
operaciones(2,5,multip);
