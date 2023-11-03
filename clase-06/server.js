const http = require('http')
const { request } = require('https')

const server = http.createServer((request, response) => {
    response.end('<h2>My first server. Hello world 😎</h1>')
})

server.listen(8080, () => {
    console.log('Listening on port 8080 🏃 ...');
})