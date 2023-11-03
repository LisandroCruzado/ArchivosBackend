/*Consigna:
Realizar una clase “ProductManager” que gestione un conjunto de productos. ✅
Aspectos a incluir:
Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
Cada producto que gestione debe contar con las propiedades:
- title (nombre del producto) ✅
- description (descripción del producto) ✅
- price (precio) ✅
- thumbnail (ruta de imagen) ✅
- code (código identificador) ✅
- stock (número de piezas disponibles) ✅
Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial. ✅
Validar que no se repita el campo “code” y que todos los campos sean obligatorios ✅
Al agregarlo, debe crearse con un id autoincrementable ✅
Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found” ✅
*/

class ProductManager {
    constructor() {
        this.getProducts = []
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
