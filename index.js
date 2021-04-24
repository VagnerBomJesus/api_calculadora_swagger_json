const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');


app.use( '/api-calculadora',  swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Rotas para acessar as operações
require('./routes/routes')(app);

app.listen(3333, () => {
  console.log("server listening on port 3333");
});



