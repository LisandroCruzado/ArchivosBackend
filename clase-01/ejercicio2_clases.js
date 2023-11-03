/*Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.

Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global. 
Realizar prueba de individualidad entre las instancias.
*/


class Contador {
    constructor (responsible){
        this.responsible = responsible
        this.countLocal = 0
    }

    static countGlobal = 0

    getResponsable = () => {return this.responsible}
    getCountLocal = () => {return this.countLocal}
    getCountGlobal = () => {return Contador.countGlobal}

    count(){
        this.countLocal++
        Contador.countGlobal++
    }

}

const contador1 = new Contador('Simon')
const contador2 = new Contador('Marco')
const contador3 = new Contador('Andrea')

contador1.count()

contador2.count()
contador2.count()
contador2.count()

contador3.count()
contador3.count()

console.log(`${contador1.getResponsable()}: ${contador1.getCountLocal()}`);
console.log(`${contador2.getResponsable()}: ${contador2.getCountLocal()}`);
console.log(`${contador3.getResponsable()}: ${contador3.getCountLocal()}`);

console.log(`EL GLOBAL ES ${contador1.getCountGlobal()}`);