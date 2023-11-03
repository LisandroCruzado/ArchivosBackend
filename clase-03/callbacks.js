/* Callbacks - Es una función como cualquier otra, la diferencia está en que ésta se pasa como parámetro (argumento) para poder ser utilizado por otra función. Permite que entonces las funciones ejecuten operaciones adicionales dentro de sí mismas.
Cuando pasamos un callback lo hacemos porque no siempre sabemos qué queremos que se ejecute en cada caso de nuestra función.
Algunos ejemplos donde se han utilizado callbacks son - El método onCLick en frontend - El método forEach - El método map o filter*/

const array1 = [ 1,2,3,4,5,6 ]

const funcCallBack = ( valor ) => {
    if ( valor % 2 === 0 ) {
        return console.log('valor es par');
    } else {
        return console.log('valor es impar');
    }
}

const result = array1.map(funcCallBack)

console.log(array1);