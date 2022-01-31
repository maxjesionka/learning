var max_width = window.matchMedia("(max-width: 400px)");
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

let note1 = document.getElementById("note1")
let note2 = document.getElementById("note2")
let note3 = document.getElementById("note3")
let newZIndex =2;
let timerGo;
let x;

function openNav() {
  if (max_width.matches){
     document.getElementById("mySidenav").style.width = "100%";
  }else{ 
    document.getElementById("mySidenav").style.width = "250px";
}}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

let slideIndex = [1,1];
let slideId = ["slides"]
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
   x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


let slideIndex2 = 1;



function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  slides[slideIndex2-1].style.display = "block";  
 

 
 
}
timerGo = setInterval(showSlides2, 8000); 


function timeoutDrop(){
 window.clearInterval(timerGo);
  timerGo = setInterval(showSlides2, 8000); 
 

}

nextBtn.addEventListener("click", timeoutDrop) ;
prevBtn.addEventListener("click", timeoutDrop) ;

note1.addEventListener("click", function(){
  newZIndex++
note1.style.zIndex= newZIndex
} )
note2.addEventListener("click", function(){
  newZIndex++
note2.style.zIndex= newZIndex
} )
note3.addEventListener("click", function(){
  newZIndex++
note3.style.zIndex= newZIndex
} )


