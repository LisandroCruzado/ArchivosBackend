import { Router } from "express"

const router = Router()

const foods = [
    {name: 'Banana', price: 10},
    {name: 'Vino', price: 150},
    {name: 'Hot dog', price: 130},
    {name: 'Choripan', price: 110}
]

router.get('/', (req,res) => {

    const user = {
        name: 'Lisandro',
        isAdmin: true // admin o user

    }

    res.render('index',{
        user,
        foods,
        style: 'index.css',
        title: 'Pagina de termos'
    })
})

router.get('/register', (req,res) =>{
    res.render('register', {})
})


export default router