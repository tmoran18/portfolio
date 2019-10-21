// Instatian Swup and run init function
const swup = new Swup();
init();
swup.on('contentReplaced', init);

// Check if the toggle id is on this page then run the init function.
function init() {
  if (document.querySelector('#toggle')) {
    new mobileNav();
  }
};

var mobileNavStart = new mobileNav();

function mobileNav() { // Wrapper function
  var menu = document.querySelector('.menu-container');
  var hamburger = document.getElementById('toggle');
  var toggleStatus = 0;
  // If the window is below Media query size 
  //  uncheck the hamburger Input close the mobile navigation
  function checkWindowSize(x) {
    if (!x.matches) { // If media query matches
      hamburger.checked = false;
      closeNav();
    }
  };
  // Opens the DropDown mobile Navigation
  function openNav() {
    menu.style.top = ("90px");
    toggleStatus = 1;
    document.querySelector('.form-container').style.transform = "translateY(17rem)";
    console.log("opening");
  };
  // Closes the DropDown mobile Navigation
  function closeNav() {
    menu.style.top = ("-350px");
    toggleStatus = 0;
    document.querySelector('.form-container').style.transform = "translateY(0)";
    console.log("closing");
  };
  // Toggles the opening and closing of the mobile navigation
  function toggleMenu() {
    if (toggleStatus === 0) {
      openNav();
    } else if (toggleStatus === 1) {
      closeNav();
    }
  };
  var windowSize = window.matchMedia("(max-width: 900px)")
  checkWindowSize(windowSize) // Call listener function at run time
  windowSize.addListener(checkWindowSize) // Attach listener function on state changes
  // Event listener on the Hamburger menu to open and close the navigation
  hamburger.addEventListener('click', toggleMenu);


};

