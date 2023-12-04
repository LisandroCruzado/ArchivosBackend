import UserModel from './models/users.model.js'
import mongoose from 'mongoose'

const mongoUrl = 'mongodb+srv://seveen08:4V60UrVOunUCIlfn@lisandrodb.f1dwo4x.mongodb.net/'


await mongoose.connect(mongoUrl, {dbName: 'clase16_55'})
console.log('DB connected 😎')

const result = await UserModel.find({first_name: 'Celia'}).explain('executionStats')
console.log(result)

/**
 * .find() 2 milisegundos
 * .find('Celia') 3 milisegundos
 * .find('Celia', index: true) 1 milisegundos
 */