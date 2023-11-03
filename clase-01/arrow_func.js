const myFunction = (nombre) =>{
    let age = 20
    return nombre + ' ' + age
}

const resultado = myFunction('Tutor Ruben')

// console.log(myFunction('Tutor Jhon'));
// console.log(myFunction('Andrea'));
// console.log(resultado);

//Arrow functions escrito más ligero
// Un argumento, podemos omitir los parentesis

const myFunction2 = nombre => nombre + " " + 20

//Si es mas de un argumento, deberiamos usar parentesis
const myFunction3 = (nombre, apellido) => nombre + " " + apellido + " " + 32 + "años"

//Si no usamos argentumos, deberiamos usar parentesis
const myFunction4 = () => " " + 20


console.log(myFunction3('Lisandro', 'Cruzado'));
console.log(myFunction2('Pedrito'));
console.log(resultado);