const timeDisplay = document.getElementById('timeDisplay')
const btnStart = document.getElementById('btnStart')
const btnContinue = document.getElementById('btnContinue')
const btnStop = document.getElementById('btnStop')
const btnReset = document.getElementById('btnReset')
const timeSaved = document.getElementById('timeSaved')

let timeSeconds = 0
let timeMinutes = 0
let stoper
let formatMinutes
function btnStartF(){
    timeSeconds = 1
    timeMinutes = 0
    if(stoper){
        clearInterval(stoper)
        stoper = setInterval(stoperTime, 1000)
    }else
    {
        stoper = setInterval(stoperTime, 1000)
    }}
    


function stoperTime(){
   
    if(timeSeconds>=60){
        timeSeconds=0 
        timeMinutes++
        }
    if(timeMinutes<=9){formatMinutes="0"+timeMinutes}else{formatMinutes=timeMinutes}    
        if(timeSeconds <= 9){
            timeDisplay.innerHTML =formatMinutes+":0" + timeSeconds++
        }else{
            timeDisplay.innerHTML = formatMinutes+ ":" + timeSeconds++
        }
}




function btnContinueF(){
    clearInterval(stoper)
    stoper = setInterval(stoperTime, 1000)
}

function btnStopF(){
    clearInterval(stoper)
}

function btnResetF(){
    timeDisplay.innerHTML="00:00"
    timeSeconds=0
    timeMinutes=0
    clearInterval(stoper)
}

function btnSaveF(){
    var tag = document.createElement("p");
    var text = document.createTextNode(timeDisplay.textContent);
    tag.appendChild(text);
    timeSaved.appendChild(tag);
}