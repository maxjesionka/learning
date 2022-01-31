// var inputColor = document.getElementById("startingValue").value
const btnStart = document.getElementById("btnStart")
const btnStop = document.getElementById("btnStop")
const bgColor = document.getElementById("bgColor")

const CBXred = document.getElementById("CBXred")
const CBXgreen = document.getElementById("CBXgreen")
const CBXblue = document.getElementById("CBXblue")
const iCopy = document.getElementById("iCopy")

var redS = ""
var greenS = ""
var blueS= ""
var myInterval; 



function getVal1() {
    const val = document.querySelector('input.startValue1').value;
    return val
  }
  function getVal2() {
    const val = document.querySelector('input.startValue2').value;
    return val
  }
  function getVal3() {
    const val = document.querySelector('input.startValue3').value;
    return val
  }




btnStart.addEventListener("click", function(){
  window.clearInterval(myInterval); 
   if( redS = getVal1()){}else redS = "0"
   if( greenS = getVal2()){}else greenS = "0"
   if( blueS = getVal3()){}else blueS = "0"

    console.log(redS)
    bgColor.style.backgroundColor = `rgb(${redS},${greenS},${blueS})`

    myInterval = setInterval(()=>{
      if(redS > 254){redS}else if(CBXred.checked){redS++}else{redS}
      if(greenS > 254){greenS}else if(CBXgreen.checked){greenS++}else{greenS}
      if(blueS > 254){blueS}else if(CBXblue.checked){blueS++}else{blueS} 


      bgColor.style.backgroundColor = `rgb(${redS},${greenS},${blueS})`
      console.log(redS)
      console.log(greenS)
      console.log(blueS)
      
      clipNumbers.innerHTML="RGB("+redS+","+greenS+","+blueS+")"
    },100);
   
})

btnStop.addEventListener("click", function(){
 window.clearInterval(myInterval); 
})

function copyToClip(){
  var copyText = document.getElementById("clipNumbers")
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy')

  alert("Copied!");
}
