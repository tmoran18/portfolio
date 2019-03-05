
// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
   if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
         {
            scrollTop: $(hash).offset().top - 90
         },
         800
      );
   }
});


// Change navigation colour on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
   var navbar = document.getElementById('navbar');
   var logo = document.getElementById('logo');

   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      logo.className = ('logo-scroll')
      navbar.className = ('navbar-scroll');
   } else {
      navbar.className = ('navbar');
      document.getElementById('navbar').style.transition = "all 1s";
      document.getElementById('logo').style.transition = "all 3s";
      logo.className = ('logo');
   }
}

// Show more reveal
var moreCards = document.getElementById("more-cards");
var button = document.getElementById("show-more");

button.onclick = function(){

   if(moreCards.className == "open") {
      //Shrink Box
      moreCards.className = "";
      button.innerHTML = "Show More"
   } else {
      //expand the box
      moreCards.className = "open";
      button.innerHTML = "Show Less"
   }
};