// const dividir = ( dividendo, divisor ) => {
//     return new Promise (( resolve, reject ) => {
//         if( divisor === 0 ) {
//             reject( 'NO se puede realizar la operación' )
//         } else {
//             resolve( dividendo / divisor )
//         }
//     })
// }

//console.log(dividir(4,0));

/*Ahora que entendimos que hay dos formas de resolver una promesa (Resolved/Fulfilled)
o Rejected), debemos aprender cómo utilizar estos dos estados
✅ Ejecutaremos la función que acabamos de crear para que se ejecute la promesa
✅ Utilizaremos el operador .then para recibir el caso en el que la promesa Sí se haya cumplido.
✅ Utilizaremos el operador .catch para recibir el caso en el que la promesa No se haya cumplido.
*/

// new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hola')
//     }, 2000)
// }).then((res) =>{
//     console.log(res);
//     return res * 2
// }).then((res) => {
//     console.log(res);
//     return res * 2
// }).then((res) => {
//     console.log(res);
//     return res * 2
// }).catch((err) => {
//     console.log(err);
// })

function f1 (){
    console.log('f1');
}
function f2 (){
    console.log('f2');
}
function main (){
    console.log('main');
    setTimeout(f1, 0)

    new Promise ((resolve, reject) =>
    resolve('soy una Promise')
    ).then(resolve => console.log(resolve))
    f2()
}
main()
