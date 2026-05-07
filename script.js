let workTime = 25*60;
let sBreak = 5*60;
let lBreak = 15*60;
let timeLeft= workTime;
let timeLeftId= workTime;
let timerInterval;
let isRunning = false;
let playButton = document.getElementById("start-pause");
let workButton = document.getElementById("work");
let sBreakButton = document.getElementById("sBreak");
let lBreakButton = document.getElementById("lBreak");
let display = document.getElementById("display");
let taskInput = document.getElementById("task-input");
function updateDisplay(){
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    display.textContent =
      String(minutes).padStart(2, '0') + ":" +
      String(seconds).padStart(2, '0');
}
function start_stop(){
    if(isRunning){
        isRunning=false;
        playButton.style.backgroundImage = "url('images/play.png')";
        clearInterval(timerInterval);
    }
    else{
        isRunning=true;
        playButton.style.backgroundImage = "url('images/pause.png')";
        timerInterval = setInterval(() => {
            if (isRunning) {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                }
                else{
                    clearInterval(timerInterval);
                    reset();
                }
            }
        },1000);
    }
}
function reset(){
    isRunning=false;
    playButton.style.backgroundImage = "url('images/play.png')";
    const minutesId = Math.floor(timeLeftId / 60);
    const secondsId = timeLeftId % 60;
    display.textContent =
      String(minutesId).padStart(2, '0') + ":" +
      String(secondsId).padStart(2, '0');
    timeLeft = timeLeftId;
    clearInterval(timerInterval);

}
function setWork(){
    timeLeft = workTime;
    timeLeftId=workTime;
    updateDisplay();
    isRunning = false;
    playButton.style.backgroundImage = "url('images/play.png')";
    clearInterval(timerInterval);
    workButton.style.backgroundColor = "#ffd0d0";
    sBreakButton.style.backgroundColor = "lemonchiffon";
    lBreakButton.style.backgroundColor = "lemonchiffon";
}
function setShortBreak(){
    timeLeft = sBreak;
    timeLeftId=sBreak;
    updateDisplay();
    isRunning = false;
    playButton.style.backgroundImage = "url('images/play.png')";
    clearInterval(timerInterval);
    workButton.style.backgroundColor = "lemonchiffon";
    sBreakButton.style.backgroundColor = "#ffd0d0";
    lBreakButton.style.backgroundColor = "lemonchiffon";
}
function setLongBreak(){
    timeLeft = lBreak;
    timeLeftId=lBreak;
    updateDisplay();
    isRunning = false;
    playButton.style.backgroundImage = "url('images/play.png')";
    clearInterval(timerInterval);
    workButton.style.backgroundColor = "lemonchiffon";
    sBreakButton.style.backgroundColor = "lemonchiffon";
    lBreakButton.style.backgroundColor = "#ffd0d0";
}
function addtask(){
    const task = taskInput.value.trim();
    if(task === "")return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;
    span.onclick = function(){
        span.style.textDecoration = "line-through";
    }
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.id = "delete-button";
    deleteButton.onclick = function(){
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(deleteButton);
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
}