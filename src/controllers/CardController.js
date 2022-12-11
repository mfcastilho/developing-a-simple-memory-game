let dataBase = require("../database/database.js");


const CardController ={

  // Método para randomizar array
  shufflingCards: ()=>{


    let db = dataBase;
    let db2 = dataBase;
    const array = db.concat(db2);

    console.log("============");
    console.log(array.length);
    console.log("============");
    console.log(array);
    for(let i = array.length - 1; i > 0; i--){

      console.log(array[i].name);

      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i+1));

      // Reposicionando elemento
      [array[i], array[j]] = [array[j], array[i]];
    }

    // Retornando array com aleatoriedade
    return array;
  }
}


module.exports = CardController;