//?dependecias
const express = require('express')
    //?Initial configs
const port = 9000
const app = express()



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