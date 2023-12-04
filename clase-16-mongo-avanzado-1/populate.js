import mongoose from "mongoose";
import studentModel from './models/students.model.js'
import CourseModel from './models/courses.model.js'

const mongoURL = 'mongodb+srv://seveen08:4V60UrVOunUCIlfn@lisandrodb.f1dwo4x.mongodb.net/'

await mongoose.connect(mongoURL, {dbName: 'clase16_55'})
console.log('DB connected 😎');


//Crear un Estudiante

// const result = await studentModel.create({
//     first_name: 'Mario',
//     last_name: 'Rodriguez',
// })

// console.log({result});
// //656ce9804fdd09a1981b35b0


//Crear un curso

// const result = await CourseModel.create({
//     title: 'Defensa contra las artes oscuras',
//     description: 'Saber defenderse de ataques oscuros',
//     difficult: 5,
//     topics: ['Spectro Patronus', 'Spectro PatronUz','Spectro Patronus'],
//     professor: 'Lupin'
// })

// console.log({result});
// //656ce9a7e7655f1c41b6a571


// const student = await studentModel.findById('656ce9804fdd09a1981b35b0')
// console.log(student);
// student.courses.push({course: '656ce9a7e7655f1c41b6a571'})
// const result = await studentModel.updateOne({_id: '656ce9804fdd09a1981b35b0'}, student)
// console.log({result});

const student = await studentModel.findOne({_id:'656ce9804fdd09a1981b35b0'})
console.log(JSON.stringify(student, null, '\t'))