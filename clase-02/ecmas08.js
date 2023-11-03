const impuestos = {
    impuestoIVA: 19,
    impuestoCarro: 40,
    impuestoResidencia: 10
}

//Entries
console.log('ENTRIES');
const entriesAndValues = Object.entries(impuestos)
console.log(entriesAndValues); // Devuelve Array (propiedad/valor) de Arrays
console.log(entriesAndValues[1][1]); // Devuelve la posición 1 (en este caso el valor), de la posición 1, del Array
console.log(entriesAndValues[1][0]); // Devuelve la posición 0 (en este caso la propiedad), de la posición 1 del Array

//Keys
console.log('KEYS');
const entries = Object.keys(impuestos) //Devuelve un Array (propiedad)
console.log(entries)


//Values
console.log('VALUES');
const values = Object.values(impuestos) //Devuelve un Array (valor)
console.log(values);