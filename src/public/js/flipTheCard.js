
const cards = document.querySelectorAll(".card-box");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;



function flipTheCard(event){
  if(lockBoard){
    return;
  }


  this.classList.add("flip"); 

  if(!hasFlippedCard){
    hasFlippedCard =true;
    firstCard = this;
    console.log(firstCard);
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  console.log(secondCard);
  checkForMatch();
}


function checkForMatch(){
  const namefirstCard = firstCard.getAttribute("name");
  const nameSecondCard = secondCard.getAttribute("name")

  if(namefirstCard === nameSecondCard){
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards(){
  firstCard.removeEventListener("click", flipTheCard);
  secondCard.removeEventListener("click", flipTheCard);
  // firstCard.style.opacity = "0.8";
  // secondCard.style.opacity = "0.8";
}

function unflipCards(){
  lockBoard = true;
  setTimeout(()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1500);
}


//Evento de click
cards.forEach(card=>{
  card.addEventListener("click",flipTheCard); 
});


