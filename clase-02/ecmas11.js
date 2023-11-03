const varTest = 0

// let varAssignable = varTest
// if( varTest === 0) varAssignable = 'Sin Valor'
const varAssignable = varTest || 'SIN VALOR'
console.log(varAssignable);

// let varAssignable2 = varTest
// if( varTest === undefined) varAssignable = 'Sin Valor'
const varAssignable2 = varTest ?? 'Sin valor'
console.log(varAssignable2);

// Atributos privados en una clase

class Persona {
    #age
    constructor(name, lastname, age){
        this.name = name
        this.lastname = lastname
        this.#age = age
    }

    // Setter and Getter (manipular los atributos privados de una clase por medio de funciones)
    getAge = () => { return this.#age }
    setAge = age => { this.#age = age }
}
const edoardo = new Persona("Edoardo", "Maciel", 25)

