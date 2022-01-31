const daysEl = document.getElementById("days") ;
const hoursEl = document.getElementById("hours") ;
const minutesEl = document.getElementById("mins") ;
const secondsEl = document.getElementById("seconds") ;

const currentYear = new Date().getFullYear() +1;
const newYear = '1 Jan '+currentYear;
function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = Math.floor(newYearsDate - currentDate) / 1000;

    const seconds = Math.floor(totalSeconds % 60) ;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400);
    
    daysEl.innerHTML=days; 
    hoursEl.innerHTML=nicerTime(hours);
    minutesEl.innerHTML=nicerTime(minutes); 
    secondsEl.innerHTML=nicerTime(seconds); 
}
function nicerTime(time){
    return time<10 ? (`0${time}`) :time;
}

//cloak caller
countdown()
setInterval(countdown, 1000)