// Initialize and add the map
function initMap() {
   // Your location
   const loc = { lat: -27.46977, lng: 153.025131 };
   // Centered map on location
   const map = new google.maps.Map(document.querySelector(".map"), {
      zoom: 14,
      center: loc
   });
   // The marker, positioned at location
   const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener("scroll", function () {
   if (window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.7;
   } else {
      document.querySelector("#navbar").style.opacity = 1;
   }
});

// Smooth Scrolling
$('a[href*=\\#]').on('click', function (e) {

   var target = this.hash;
   var $target = $(target);
   console.log(targetname);
   var targetname = target.slice(1, target.length);

   if (document.getElementById(targetname) != null) {
      e.preventDefault();
   }
   $('html, body').stop().animate({
      'scrollTop': $target.offset().top

   }, 800, 'swing', function () {
      window.location.hash = target;
   });
});