'use strict'

var app = require('./app');
var port = process.env.PORT || 3678;

app.listen(port,() => console.log(`ApiRest escuchando en el puerto http://localhost:${port}`));