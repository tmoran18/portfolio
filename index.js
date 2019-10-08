// Mobile Menu Toggle
var menu = document.querySelector('.menu-container');
var hamburger = document.getElementById('toggle');
var toggleStatus = 0;

const swup = new Swup();

// If the window is below Media query size
//   uncheck the hamburger Input
//   close the mobile navigation
function checkWindowSize(x) {
  if (!x.matches) { // If media query matches
    hamburger.checked = false;
    closeNav();
  }
}

var windowSize = window.matchMedia("(max-width: 900px)")
checkWindowSize(windowSize) // Call listener function at run time
windowSize.addListener(checkWindowSize) // Attach listener function on state changes


// Opens the DropDown mobile Navigation
function openNav() {
  menu.style.top = ("90px");
  toggleStatus = 1;
}
// Closes the DropDown mobile Navigation
function closeNav() {
  menu.style.top = ("-350px");
  toggleStatus = 0;
}
// Toggles the opening and closing of the mobile navigation
function toggleMenu() {
  if (toggleStatus === 0) {
    openNav();
  } else if (toggleStatus === 1) {
    closeNav();
  }
}
// Event listener on the Hamburger menu to open and close the navigation
hamburger.addEventListener('click', toggleMenu);