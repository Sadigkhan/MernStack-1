$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});