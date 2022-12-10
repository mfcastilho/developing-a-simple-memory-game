// const dataBase = require("../database/database.js");
const CardController = require("./CardController.js")

const HomeController = {
  showHome: (req, res)=>{
    const firstArray = CardController.shufflingCards();
    const secondArray = CardController.shufflingCards();

    const newArray = firstArray.concat(secondArray);


    return res.render("index.ejs", {dataBase:newArray});
  }
  
}

module.exports = HomeController;