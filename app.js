//?dependecias
const express = require('express')
    //import express from 'express'
    //?Initial configs
const port = 9000
const app = express()

//? HABILITAR RECIBIR FORMATO JSON
app.use(express.json())
    //? peticion -> request ->req
    //? respuesta -> response -> res


const todoDB = []
    //? TODO
    //  {
    //      id:5,
    //      title:"practicar expres",
    //      despcription:"ver videos de apoyo y crar otra API",
    //      is_completed :false
    //  }
let id = 1


app.get('/', (req, res) => {
        res.json({
            message: 'OK'
        })
    })
    //? /todo /todo/:id
    //? Rutas de TODO's
app.get('/todo', (req, res) => {
        res.status(200).json(todoDB)
    })
    //siempre devolver algo porque genera un bucle 
app.post('/todo', (req, res) => {
    const { title, description } = req.body
    if (title && description) {
        const newTodo = {
            id: id++,
            title,
            description,
            is_completed: false
        }
        todoDB.push(newTodo)
        res.status(200).json(newTodo)
    } else {
        res.status(400).json({ message: "Invalid Data" })
    }
})


app.get('/todo/:id', (req, res) => {
    const id = req.params.id;
    const todo = todoDB.find(item => item.id == id)
    if (todo) {
        res.status(200).json(todo)
    } else {
        res.status(404).json({ message: 'Invalid ID' })
    }
})



app.listen(port, () => {
    console.log(`server started at port ${port}`)
})

/*
//? peticion -> request ->req
//? respuesta -> response -> res

app.get('/text/:mensaje/:edad/:nombre', (req, res) => {
    const { mensaje, edad, nombre } = req.params
})


app.get('/text/:mensaje', (req, res) => {
    const mensaje = req.params.mensaje
    res.json({
        mensaje: `este es el mensaje por parametro: ${mensaje}`
    })
})
*/