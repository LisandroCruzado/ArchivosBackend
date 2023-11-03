import express from "express";

const app = express()

//Estas listas nos permite recibir la información en formato JSON
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let products = [
    {id: 1, name:'Beers', price: 100, stock:29},
    {id: 2, name:'Vinos', price: 150, stock:13},
]

app.get('/',(req,res)=>res.send('ok'))

app.get('/api/products', (req,res) => res.json(products))
app.get('/api/products/:id', (req,res) =>{
    const id = parseInt(req.params.id)
    const product = products.find(p=>p.id === id)
    if(!product){
        return res.status(404).json({error: 'Product Not Found'})
    }
    res.json(product)
})
app.post('/api/products', (req,res)=>{
    const product = req.body

    if(!product.name || !product.price || !product.stock){
    return res.status(400).json({error: 'Faltan datos para el producto'})
}

    product.id = product.length + 1
    products.push(product)
    res.status(201).send({status:'success',message:'Product Created'}) //aviso de recurso creado(201)
})

//EDITAR con PUT
app.put('/api/products/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const product = req.body
    if(!product.name || !product.price || !product.stock){
        return res.status(400).json({error: 'Faltan datos para el producto'})
    }
    const idxProduct = products.findIndex(p => p.id ===id)
    if(idxProduct < 0){
        return res.status(404).json({error: 'Product not found'})
    }
    products[idxProduct] = product
    res.json({status: 'success', message: 'Product updated'})
})

app.delete('/api/products/:id', (req,res) => {
    const id = parseInt(req.params.id)
    if(!products.some(p => p.id == id )){
        return res.status(404).json({error: 'Error product not found'})
    }
    products = products.filter(p => p.id !== id)

    res.send({status:'success', message: 'Product deleted!'})
})

app.listen(8080,()=>{console.log(`Runing 🏃`)})