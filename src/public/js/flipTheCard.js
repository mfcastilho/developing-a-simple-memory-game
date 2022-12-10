
const cards = document.querySelectorAll(".card-box");

let count = 0;

let index = "";


function flipTheCard(event){

  
  this.classList.toggle("flip");
  
}


cards.forEach(card=>{
  
 
  card.addEventListener("click",flipTheCard);
 
});