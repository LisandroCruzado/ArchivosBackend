const fs = require('fs')

const filename = './archivoAsync.txt'
fs.writeFile( filename, 'asdsasd', (error) => { // Escribir el archivo
    if(error) return console.log(error);

    console.log('Se termino de escribir el archivo');
    
    fs.unlink(filename, (error) => { //Borra el archivo
        if(error) return console.log(error)
        console.log('Se borro el archivo!');
    })
})

const filename2 = './otroArchivoAsync.txt'
fs.writeFile( filename2, 'asdsdsadsadasdsaad', () => {
    console.log('Se termino de escribir el archivo nuevamente');

    fs.readFile(filename2, 'utf-8', (error, contenido) =>{
        if(error) return console.log('No se pudo leer el archivo');
        console.log(contenido);
    })
})





setTimeout(() => { console.log('DIN DON') }, 5000)

console.log('Aqui se termino el script');

/*
VENTAJAS
-No son bloqueantes

DESVENTAJAS
-Callback hell
-Siempre son asyncronicas
*/