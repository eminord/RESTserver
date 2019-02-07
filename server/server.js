require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URL_DB, (err, res) => {
    if (err) throw err;

    console.log('DB online');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuhando puerto: ${process.env.PORT}`);
})