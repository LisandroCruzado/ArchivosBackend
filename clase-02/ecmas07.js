//Exponencial
const valoresBase = [1,2,3,8,2,6,7]
const newValores = valoresBase.map((element, idx) => element ** idx)

console.log(newValores);

//Includes
const names = ['Alan', 'Ezequiel', 'Marco', 'Joaquin', 'Lily']
if (names.includes('Joaquin')){
    console.log('Joaquin esta en la party 👍');
} else {
    console.log('Joaquin no esta en la fiesta 👎');}