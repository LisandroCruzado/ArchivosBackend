const fs = require('fs')
class ManagerUser {
    constructor(filename){
        this.filename = filename
        this.format = 'utf-8'
    }
    getUser = async () => {
        if(!fs.existsSync(this.filename)) return []
        return fs.promises.readFile(this.filename, this.format)
                .then( content => JSON.parse(content))
                .catch( e => {
                    console.log('ERROR', e );
                    return []
            })
    }

    createUser = async ( firstname, lastname, age, course ) => {
        return this.getUser()
            .then(users => {
                users.push ({firstname, lastname, age, course})
                return users
            })
            .then(newUsers => fs.promises.writeFile(this.filename, JSON.stringify(newUsers)))
    }
}

async function run(){
    const manager = new ManagerUser('./users.json')
    await manager.createUser('Ezequiel', 'Canan', 23, 'JS Backend')
    console.log( await manager.getUser() );
}

run()