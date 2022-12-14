
const startButton = document.querySelector("[data-start-button]");
const pauseButton = document.querySelector("[data-pause-button]");
const resetButton = document.querySelector("[data-reset-button]");


let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;


let cron;


function start(){
  pause();

  console.log("Clicou")
  
  cron = setInterval(timer, 10);
}

function pause(){
  clearInterval(cron);
}

function reset(){
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;


  document.getElementById("hour").innerHTML = `00`;
  document.getElementById("minute").innerHTML = `00`;
  document.getElementById("second").innerHTML = `00`;
  document.getElementById("millisecond").innerHTML = `000`;

}

function timer(){
  
  console.log("Entrou")

  millisecond += 10
  if((millisecond) == 1000){
    
    millisecond = 0;
    second++;
  }
  if(second == 60){
    second = 0;
    minute++;
  }
  if(minute == 60){
    minute = 0;
    hour++;
  }

  console.log("final")
  console.log(millisecond)
  document.getElementById("hour").innerText = returnData(hour);
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
  document.getElementById("millisecond").innerText = returnData(millisecond);
}

function returnData(input){
  return input > 10 ? input : `0${input}`;
}

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

const stopwatch_box = document.querySelector(".stopwatch_box");

