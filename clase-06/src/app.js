import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send('<h1>Welcome to the jungle 🎸</h1>')
})

app.get('/saludo', (request, response) => {
    response.send('<h3>Saludos para mi amigo Alejandro</h3>')
})

app.get('/health', (request, response) => {
    response.send('OK')
})

app.listen(8080, () => {
    console.log('Server is running 🏃 ...');
})