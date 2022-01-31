// http://websamuraj.pl/examples/js/projekt11/

const btnTime = document.querySelector("button.main");
const btnReset = document.querySelector("button.reset");
const stoper = document.querySelector("div.time div");
const odpal = new Date().getTime();
let active = false;
// setInterval(() => {
//     const nowTime = new Date().getTime();
//     const seconds = ((odpal / 1000 + nowTime / 1000)%60);
//     const secondsBtr = seconds.toFixed(2);
let time = 0;
let idI;

//     stoper.textContent = secondsBtr;
// })
const timer = () =>{
    if(!active){
        active = !active;
        btnTime.textContent = 'Stop';
       idI = setInterval(start,10);
    }
    else{
        active = !active;
        btnTime.textContent = 'Start';
        clearInterval(idI);
    }
}
const start = () =>{
    time++;
    stoper.textContent=(time / 100).toFixed(2);
}
const reset= () =>{
time=0;
stoper.textContent = '---';
}
btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);