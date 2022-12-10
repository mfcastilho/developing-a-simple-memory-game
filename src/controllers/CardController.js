const dataBase = require("../database/database.js");


const CardController ={

  // Método para randomizar array
  shufflingCards: ()=>{
    // Loop em todos os elementos
    for(let i = dataBase.length - 1; i > 0; i--){

      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i+1));

      // Reposicionando elemento
      [dataBase[i], dataBase[j]] = [dataBase[j], dataBase[i]];
    }

    // Retornando array com aleatoriedade
    return dataBase;
  }
}


module.exports = CardController;