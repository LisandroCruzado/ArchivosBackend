const fs = require('fs')
//Escribir en un archivo
fs.writeFileSync('./ejemplo.txt', 'Hola comision !! Saludos para el tutor Daniel Perco 😄')//escribir archivo sincronico(todo lo que le pasamos a write lo sobrescribe)

if (fs.existsSync('./data22.txt')){ //Pregunta si el archivo éxiste
    //Lee un archivo
    const contenido = fs.readFileSync('./data22.txt', 'utf-8')
    console.log(contenido);
    //Agrega al final del archivo
    fs.appendFileSync('./data22.txt', '\n. Mas contenido para Alan ⛺')
    //Borra un archivo
    fs.unlinkSync('./data22.txt')
} else {
    console.log('Este archivo no existe'); //Si el archivo no éxiste devuelve.
}


/*
VENTAJAS
-Mejor code, mejor lectura
-Mejor orden de las cosas

DESVENTAJAS
-Todos los procesos son bloqueantes
*/