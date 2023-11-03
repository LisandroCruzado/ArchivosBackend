const array = ['asd', 123, true, 'asdsa']
function myFunction(item){
    return item + item
}

const arrayNew = array.map( myFunction )
console.log(arrayNew);