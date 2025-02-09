// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoheight: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

setTimeout(function () {
    $(".owl-image-carousel").trigger('refresh.owl.carousel');
}, 500);
 
/** google_map js **/

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

$(document).ready(function(){
    $(".owl-image-carousel").owlCarousel({
      loop: true,               // Infinite loop
      nav: true,                // Show navigation arrows
      dots: true,               // Show dots navigation
      autoplay: true,           // Auto play slider
      autoplayTimeout: 3000,    // Change image every 3 seconds
      autoplayHoverPause: true, // Pause on hover
      items: 1,
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }   
    });
  });
