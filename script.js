var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;

carousel();
carousel2();
carousel3();


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


function carousel2() {
  var i2;
  var x2 = document.getElementsByClassName("mySlides2");
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x2.length) {slideIndex2 = 1}
  x2[slideIndex2-1].style.display = "block";
  setTimeout(carousel2, 2000); // Change image every 2 seconds
}



function carousel3() {
  var i3;
  var x3 = document.getElementsByClassName("mySlides3");
  for (i3 = 0; i3 < x3.length; i3++) {
    x3[i3].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x3.length) {slideIndex3 = 1}
  x3[slideIndex3-1].style.display = "block";
  setTimeout(carousel3, 2000); // Change image every 2 seconds
}



const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});



cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

