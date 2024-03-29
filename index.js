const express = require("express");
const app = express();
const cors = require("cors");



app.use(cors());

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

app.get('/', function(req, res){
  res.redirect('/api-calculadora');
});

app.use( '/api-calculadora',  swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Rotas para acessar as operações
require('./routes/routes')(app);

app.listen(8080, () => {
  console.log("server listening on port 8080");
});



