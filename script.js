// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var toggle = document.getElementById("toggle");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    toggle.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    toggle.classList.remove("sticky");
  }
}





//Dropdown Chapter
/* Open when someone clicks on the span element*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay*/
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}




//Night Mode toggle
$(document).ready(function(){
  $('.toggle').click(function(){
      $('.toggle').toggleClass('active')
      $('body').toggleClass('night')
  })
})



