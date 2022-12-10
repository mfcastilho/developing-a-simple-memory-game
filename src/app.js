const express = require("express");
const app = express();
const port = 8000;

const homeRouter = require("./routes/homeRouter.js");

const path = require("path");

// const CardController = require("./controllers/CardController.js");
// const cardsList = CardController.shufflingCards();
// console.log(cardsList);







//1º parâmetro - Mostrando para o express que iremos usar
//uma template engine
//2º parâmetro - Indicando que iremos usar especificamente
//o ejs 
app.set("view engine", "ejs")

//Mostrando para o express aonde se encontra a pasta views
app.set("views", path.resolve("src", "views"));

//avisando ao express, que queremos que a entrada e saida
//seja convertido em json
app.use(express.json());

//tornando a pasta public em estática(global)
app.use(express.static(path.resolve("src", "public")));

app.use(homeRouter);












app.listen(port, ()=>{
  console.log(`Servidor rodando na porta: ${port}`);
});