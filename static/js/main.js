var navbar = document.querySelector('.navbar');

// When the user scrolls the page, execute checkPositions
window.onscroll = function() {checkPositions()}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function checkPositions() {
    const pageYOffset = window.pageYOffset,
          change = navbar.offsetHeight;
    window.innerHeight
    if(pageYOffset==0){
        navbar.classList.remove("bg-light");
    } else{
        navbar.classList.add("bg-light")
    }
} 
