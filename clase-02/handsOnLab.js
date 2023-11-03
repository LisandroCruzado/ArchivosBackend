/* Registrador de tickets de eventos
- Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.
# Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío. ✅
# La clase debe contar con una variable privada "precioBaseDeGanancia", la cual añadirá un costo adicional al precio de cada evento. ✅
# Debe contar conb el método "getEvent" El cual mostrará los eventos guardados. ✅
# Debe contar con el método "addEvents" EL cual recibirá los siguientes parámetros:
-name ✅
-location
-price (deberá agregarse un 0.15 del valor original) ✅
-capacity (50 por defecto) ✅
-date (hoy por defecto) ✅
El método deberá crear además el campo id autoincrementable y el campo "participant" que siempre inciará con un arreglo vacío. ✅
# Debe contar con un método "agregarUsuario" El cual recibirá:
-id del evento (debe existir, agregar validaciones)✅
-id del usuario✅
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden debe agregar el id del usuario en el arreglo "participants" de ese evento.✅
#Debe contar con un método "ponerEventoEnGira" el cual recibirá:
-id del evento✅
-nueva localidad✅
-nueva fecha✅
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades). ✅*/


class TicketManager {
    #precioBaseDeGanancia
    constructor(){
        this.events = []
        this.#precioBaseDeGanancia = 0.15

    }
    getNextID = () => {
        const count = this.events.length
        if( count === 0 ) return 1
        const lastEvent = this.events[ count - 1 ]
        return lastEvent.id + 1
    }

    getEvents = () => { return this.events }
    addEvent = ( name, location, price, capacity, date ) => {
        const id = this.getNextID()
        const event = {
            id,
            name,
            location,
            price: price * ( 1 + this.#precioBaseDeGanancia),
            capacity: capacity || 50,
            date: date || new Date().toLocaleDateString(),
            participants: []
        }

        this.events.push(event)
    }
}

const ticketManager = new TicketManager()
ticketManager.addEvent('AC DC', 'Buenos Aires', 500, 0, '')
ticketManager.addEvent('Afterlife', 'Bogotá DC', 2000, 1000, '')
console.log(ticketManager.getEvents());