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
    // document.querySelector('.form-wrapper').style.transform = "translateY(17rem)";
    console.log("opening");
  };
  // Closes the DropDown mobile Navigation
  function closeNav() {
    menu.style.top = ("-350px");
    toggleStatus = 0;
    // document.querySelector('.form-wrapper').style.transform = "translateY(0)";
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


  //  Tool Tip Functions
  var emailIcon = document.querySelector(".email-icon");
  var toolTip = document.querySelector(".tooltiptext");
  console.log(toolTip);

  emailIcon.onmouseover = function () { mouseOver() };
  emailIcon.onmouseout = function () { mouseOut() };
  function mouseOver() {
    toolTip.style.visibility = "visible";
  }
  function mouseOut() {
    toolTip.style.visibility = "hidden";
  }

  function tooltipTimer() {
    toolTip.innerHTML = 'Email Copied!';
    toolTip.style.color = '#000';
    toolTip.style.background = "#D5F5E3";
    toolTip.style.fontWeight = '600';
    toolTip.style.visibility = "visible";
    setTimeout(function () {
      // Timer function to set tooltip back to normal style
      toolTip.innerHTML = 'Click to copy my email address to your clipboard';
      toolTip.style.fontSize = '14px';
      toolTip.style.background = "#fafafa";
      toolTip.style.fontWeight = '400';
      toolTip.style.color = '#000';
      toolTip.style.visibility = "hidden";
    }, 1000);
  }

  // ClipboardJS
  const clipboard = new ClipboardJS('.email');
  clipboard.on('success', function () {
    tooltipTimer();
  });
  clipboard.on('error', function () {
    console.log('Error');
  });
};

