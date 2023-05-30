import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import User from '../User.js'
import Ejercicio from '../Ejercicio.js'
import { ejerciciosData } from './ejercicio.js'

let newUsers = async (users) => await User.insertMany(users)
let newEjercicio = async (ejercicios) => {
    for (let ejercicio of ejercicios) {
        await Ejercicio.create(ejercicio);
    }
};

let newData = async () => {
    await newUsers(users)
    await newEjercicio(ejerciciosData)
    console.log('done!')
}

newData()
