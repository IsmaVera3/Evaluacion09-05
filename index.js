const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyparser = require('body-parser');
const port = 3000

app.set('view engine', 'ejs')

app.get('/index', (req, res) => {
    res.render('/crearEquipos', {
        equipos: [
            { equipo: "Barca", creacion: 1900 },
            { equipo: "belgrano", creacion: 1905 }
        ]
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
