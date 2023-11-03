/* Practica de modulos nativos fs + crypto
    Se creara una clase "User manager" que permitira guardar usuarios en un archivo. El usuario se recibira con una contraseña en string plano y se debera guardar la contraseña hasheada con crypto. Utilizar los modulos nativos fs y crypto, el manager debe contar con los siguientes metodos:
    El metodo "Crear usuario", de recibir (nombre, apellido, nombre de usuario y contraseña)
    EL metodo debe guardar un usuario en un archivo "Usuarios JSON", recordando que la contraseña debe estar hasheada por seguridad
     El metodo "Validar Usuario" recibira el nombre de usuario que quiero validar, seguida de la contraseña, debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparacion de contraseñas, si coinciden el suaurio y la contraseña , devolver un mensaje "LOGUEANDO", caso contrario indicar error si el usuario no existe, o si la contraseña no coincide
*/
const crypto = require('crypto')
const fs = require('fs')
const filename = './db.json'
class UserManager {

    getUsers = async () => {
        try {
            const DB = await fs.promises.readFile(filename, 'utf-8')
            return JSON.parse(DB)
        } catch(e){
            console.log('No encontro el archivo se devuelve []');
            return []
        }

    } // <-- devolvemos toda la información

    insertUser = async (user) => {
        const DB = await this.getUsers()
        user.id = DB.length + 1

        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

        DB.push(user)
        await fs.promises.writeFile(filename, JSON.stringify(DB))
    } //<--- insertamos usuario

    validateUser = async (username, password) => {
        const DB = await this.getUsers()
        const user = DB.find( u => u.username == username)
        if (!user){
            console.log('User not found');
            return
        }

        const newHash = crypto.createHmac('sha256', user.salt).update(password).digest('hex')

        if(newHash == user.password) console.log('Logged');
        else console.log('Invalid Password');
    } // <--- validamos el usuario

}

async function run(){
    const manager = new UserManager()
    // await manager.insertUser({
    //     name: 'Simon', lastname: 'Sola', username: 'simon', password: '123456'
    // })
    // await manager.insertUser({
    //     name: 'Anrea', lastname: 'Berardi', username: 'andrea', password: 'secret'
    // })
    
    // console.log( await manager.getUsers());
    manager.validateUser('andrea', 'secret')
    

}

run()
