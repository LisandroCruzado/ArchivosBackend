import express from 'express'
import handlebars from 'express-handlebars'
//Importo variable __dirname nos permite trabajar con rutas absolutas
import __dirname from './utils.js'
import pokeRouter from './routes/poke.router.js'
import mongoose from 'mongoose'

//Inicializamos las variables
const app = express()
//Iniciamos conectividad con Mongo Atlas
const mongoURL = 'mongodb+srv://seveen08:4V60UrVOunUCIlfn@lisandrodb.f1dwo4x.mongodb.net/'
const mongoDBName = 'Poke-Practica'

// Para traer info de POST como JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Configurar el motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//Carpeta publica
app.use(express.static(__dirname + '/public'))

//Rutas
app.get('/', (req, res) => res.render('index', {}))
app.get('/health', (req, res) => res.send ('OK'))
app.use('/pokemon', pokeRouter)

//Conectamos a DB y corremos el Server

mongoose.connect(mongoURL, {dbName: mongoDBName})
    .then(() => {
        console.log('DB connected 😎')
        app.listen(8080, () => console.log('Listening 🏃'))
    })
    .catch(e => console.error('Error to connect 🚨'))
