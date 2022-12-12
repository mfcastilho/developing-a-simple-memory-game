// const dataBase = require("../database/database.js");
const CardController = require("./CardController.js")

const HomeController = {
  showHome: (req, res)=>{
    const array = CardController.shufflingCards();
    
    return res.render("index.ejs", {dataBase:array});
  }
  
}

module.exports = HomeController;