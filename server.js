// const { response } = require('express');
const express = require('express')

const app = express()
const PORT = 8080

let visitas = 0;

app.get('/',(req, res)=>{
    res.send(`<h1 style='color:blue'>Hola mundo</h1>`)
})

app.get('/visitas', (req, res)=>{
    visitas += 1
    res.send(`La cantidad de visitas es: ${visitas}`)
})

app.get('/fyh', (req, res) =>{
    const date = new Date
    res.send(date.toLocaleString())
})

const server = app.listen(PORT, ()=>{
    console.log(`servidor express escuchando en el pto: ${PORT}`);
})

server.on('error', error => {console.log(`Error en servidor ${error}`)})