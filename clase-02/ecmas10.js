// TRIM (arreglo de datos)
const cadena = '                          Hola 😄'
console.log(cadena.trim());

const mensajes = []
const mensaje1 = '                  '
const mensaje2 = '                 '
if (mensaje1.trim().length > 0) mensajes.push(mensaje1)
if (mensaje2.trim().length > 0) mensajes.push(mensaje2)
console.log(mensajes);

// FLAT (arreglo de datos)
const array = [1,42,5421,889, [1,6,10,-5], 123, 250]
console.log(array.flat());