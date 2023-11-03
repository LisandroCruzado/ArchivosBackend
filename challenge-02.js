/* Manejo de archivos
Consigna
    - Realizar una clase de nombre "ProductManager", el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).

    Aspectos a incluir
    - La clase debe contar con una variable this.path, el cual se inicializará desde el cosntructor y debe recibir la ruta de trabajar desde el momento de generar su instancia.
    - Debe guardar objetos con el siguiente formato
        - id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
        - title (nombre del producto)
        - description (descripción del producto)
        - price (precio)
        - thumbnail (ruta de imagen)
        - code (código indetificador)
        - stock (número de piezas disponibles)

    Aspectos a incluir
    - Debe terner un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo)
    - Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
    - Debe teener un método  "getProductById", el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto.
    - Debe tener un método "updateProduct", el cual debe recibir el id del producto a actualizar, asi tambien como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo NO DEBE BORRARSE SU ID
    - Debe tener un método "deleteProduct", el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
*/
const fs = require('fs')
class ProductManager {
    constructor() {
        this.getProducts = []
        this.path = './products.json'

    }


    addProduct = (objeto) => {
        const {title, description, code, price, thumbnail, stock} = objeto

        //Valida que las propiedades sean obligatorias.
        //return cierra la función addProduct
        if (!title || !description || !code || !price || !thumbnail || !stock ) return

        //Valida que el code no este repetido
        if (this.getProducts.some(product => product.code === code)){
            //some devuelve un true o un false
            console.log('Enconto un code en la DB. Detener función');
            return
        } 
        this.getProducts.push({
            id : this.getNextID(),
            title,
            description,
            code,
            price,
            thumbnail,
            stock
        })
    }

    


    //Valida que el Id
    getProductByID = ( id ) => {
        const product = this.getProducts.find( p => p.id === id )
        //find devuelve el valor del producto
        if ( product ) return product
        else console.error('Not found');
    }
    //Genera Id auto incrementable
    getNextID = () => {
        const count = this.getProducts.length
        if( count === 0 ) return 1
        const lastArticle = this.getProducts[ count - 1 ]
        return lastArticle.id + 1
    }

}

const productManager = new ProductManager()

const productToAdd = {
    title:'Cerveza',
    description:'%100 Artesanal',
    code: '1001',
    price: 1200,
    thumbnail: 'https://www.cerveza-artesanal.co/wp-content/uploads/2019/06/cerveza-saison-semillas-cilantro-kohatu-calypso-perle-1024x965.jpg',
    stock:10
}


productManager.addProduct({
    title:'Wine',
    description:'Directo de Mendoza',
    code: '1002',
    price: 2100,
    thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_fVeqYCJyeYlrzy2u2V9f2SWojoJASL9JA&usqp=CAU',
    stock: 10
})
productManager.addProduct(productToAdd)


console.log(productManager);
console.log(productManager.getProductByID(3))