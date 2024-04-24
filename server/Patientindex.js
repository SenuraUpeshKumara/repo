const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PatientModel = require('./models/PatientUsers')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://senurak306:1097822801255738429@cluster0.yfh1ciw.mongodb.net/")


app.get("/" , (req,res) => {
    PatientModel.find({})
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})




app.get("/getPatient/:id" , (req,res) => {
    const id = req.params.id;
    PatientModel.findById({_id:id})
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})

app.put('/updatepatients/:id' , (req,res) => {
    const id = req.params.id;
    
    PatientModel.findByIdAndUpdate({_id:id},{
        name: req.body.name , 
        number: req.body.number , 
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        date: req.body.date
    })
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})

app.post("/createpatients" , (req,res) => {
    PatientModel.create(req.body)
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})





app.delete('/deletePatient/:id' , (req,res) => {
    const id = req.params.id;
    PatientModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001 , () => {
    console.log("Server is running")
})


