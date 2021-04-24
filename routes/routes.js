module.exports = function(app){
  //SOMA
  app.get("/soma/:num1/:num2", (req, res) => {
    const c = parseInt(req.params.num1) + parseInt(req.params.num2)
    res.send(c.toString())
  });

  //SUBTRAÇÃO
  app.get("/sub/:num1/:num2", (req, res) => {
    const c = parseInt(req.params.num1) - parseInt(req.params.num2)
    res.send(c.toString())
  });

  // MULTIPLICAÇÃO
  app.get("/mult/:num1/:num2", (req, res) => {
    const c = parseInt(req.params.num1) * parseInt(req.params.num2)
    res.send(c.toString())
  });

  // DIVISÃO
  app.get("/div/:num1/:num2", (req, res) => {
    const c = parseInt(req.params.num1) / parseInt(req.params.num2)
    res.send(c.toString())
  });

}