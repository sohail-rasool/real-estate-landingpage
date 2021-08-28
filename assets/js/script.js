$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
    $( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
  });
