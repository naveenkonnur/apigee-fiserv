/*
  This is the javascript file that will contain all the custom javascript code that you will be writing to customize the interactivity of the Apigee developer portal.
*/

(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 250){  
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    }
  };
}(jQuery));

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}




/* 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 */

 /*
  This is the javascript file that will contain all the custom javascript code that you will be writing to customize the interactivity of the Apigee developer portal.
*/