
const cards = document.querySelectorAll(".card-box");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

let checkbox = document.querySelector("#mute-button-checkbox-id");
checkbox.disabled = true;

let muteButton = document.querySelector(".mute-button");

let startAudio = true;

let countTotalMatchs = 0;



function flipTheCard(event){
  if(lockBoard) return;
  
  //Tratamento para o duplo clique
  if(this === firstCard) return;


  this.classList.add("flip"); 

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    console.log(firstCard);

    const dinoName = firstCard.getAttribute("name")
    audioDinoName(dinoName);
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  console.log(secondCard);
  audioDinoName(secondCard.getAttribute("name"));
  console.log("\n---------------//----------");
  checkForMatch();
}

function checkForMatch(){
  const namefirstCard = firstCard.getAttribute("name");
  const nameSecondCard = secondCard.getAttribute("name")

  if(namefirstCard === nameSecondCard){
    disableCards();
    countTotalMatchs++;
    if(countTotalMatchs < 16){
      audioFoundTheMatch(namefirstCard);
    }else if(countTotalMatchs == 16){
      audioFinishingTheGame();
    }
    return;
  }

  unflipCards();
}

function disableCards(){
  firstCard.removeEventListener("click", flipTheCard);
  secondCard.removeEventListener("click", flipTheCard);
  // firstCard.style.opacity = "0.5";
  // secondCard.style.opacity = "0.8";


  resetBoard();
}

function unflipCards(){
  lockBoard = true;
  setTimeout(()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    

    resetBoard();
  }, 1500);
}


function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function audioDinoName(dinoName){

  if(!startAudio){
    return;
  }

  console.log(dinoName);
  let audio = new Audio();
  const url = `../sounds/${dinoName}.mp3`;
  console.log(url);
  audio.src = url;

  setTimeout(()=>{
    audio.play();
  }, 500)
  
}

function audioFoundTheMatch(dinoName){

  if(!startAudio){
    return;
  }

  
  let audio1 = new Audio();
  const url1 = `../sounds/Parabéns-Encontrou-a-dupla-de.mp3`;
  audio1.src = url1;

  let audio = new Audio();
  const url = `../sounds/${dinoName}s.mp3`;
  audio.src = url;

  lockBoard = true;
  setTimeout(()=>{
    audio1.play();
    setTimeout(()=>{
      audio.play();
    },3000);
    
    setTimeout(()=>{
      lockBoard = false;
    },4000)
  }, 2500)
  
}

function audioFinishingTheGame(){

  if(!startAudio){
    return;
  }
  let audio = new Audio();
  const url = `../sounds/parabens-voce-terminou-o-jogo.mp3`;
  audio.src = url;

  setTimeout(()=>{
    audio.play();
  }, 2500)
}

//Evento de click
cards.forEach(card=>{
  card.addEventListener("click",flipTheCard); 
});

muteButton.addEventListener("click", ()=>{

  const checkbox = document.querySelector("#mute-button-checkbox-id");

  if(startAudio){
    startAudio = false;

    muteButton.style.backgroundColor = "orangered";
    muteButton.style.color = "#FFF";

    checkbox.checked = true;
    checkbox.disabled = false;

  }else{
    startAudio = true;

    muteButton.style.backgroundColor = "#ddd2d2";
    muteButton.style.color = "#000"; 
    
    checkbox.checked = false;
    checkbox.disabled = true;
  }
  
});


