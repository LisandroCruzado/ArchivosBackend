// Creamos una clase
class Persona {
    name = 'NN'

    //Funcion que se ejecuta cuando creamos uina instancia de la clase
    constructor(name){
        this.name = name //el this representa al atributo de la propia instancia
        this.age = 30
        console.log('Se creó una instancia de Persona');
    }
    // Un atributo propio de la clase Persona y no de las instancias.
    static specie = 'humano'

    //Esto es un metodo
    speak(){
        console.log(`My name is ${this.name}, soy un ${Persona.specie}`);
    }

    walk = () => {
        console.log('Like moon walk');
    }
}

const person1 = new Persona('Jorge') // Creando una instancia de Persona pasandole un atributo en este caso el nombre
const person2 = new Persona('Jonatan')


console.log(person1);
console.log(person2);

person1.age++

Persona.specie = 'Homo sapiens'

person1.speak()
person2.speak()

console.log(Persona.specie);
console.log(person2);

person1.walk()
