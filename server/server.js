require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/usuario', (req, res) => {
    res.json('GET Usuario');
})

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Debe ingresar un Nombre válido'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:idEntrada', (req, res) => {
    let id = req.params.idEntrada;
    let body = req.body;

    res.json({
        id,
        body
    });
});

app.delete('/usuario/:idEntrada', (req, res) => {
    let id = req.params.idEntrada;
    let body = req.body;

    res.json({
        id
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Escuhando puerto: ${process.env.PORT}`);
})