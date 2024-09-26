
// owl carasal start
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            // nav:true
        },
        600:{
            items:2,
            // nav:true
        },
        1000:{
            items:3,
            // nav:true,
            
        }
    }

  
})
  $('.js-preloader').preloadinator({
        animationDuration: 400
      })

;
  });


//   wow js starts 

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

