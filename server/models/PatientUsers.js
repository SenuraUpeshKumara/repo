const mongoose = require('mongoose')

const PatientUsersSchema = new mongoose.Schema({
    name:String,
    number:String,
    email:String,
    age:String,
    gender:String,
    date:String
})

const PatientUsersModel = mongoose.model("patients" , PatientUsersSchema)
module.exports = PatientUsersModel