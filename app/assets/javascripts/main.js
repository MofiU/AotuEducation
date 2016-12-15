;(function(){

  var owlCrouselFeatureSlide = function() {
    $('#courses .owl-carousel-center').owlCarousel({
      center: true,
      items:2,
      loop:false,
      margin:10,
      nav: true,
      dots: true,
      autoHeight: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:4
        },
        1000:{
          items:4
        }
      }
    });
    $('body').on('click', '#courses .owl-carousel-center .owl-item', function(){
      var $this = $(this),
      index = $this.index();
      $('#courses .owl-carousel-center .owl-dots > div').eq(index).trigger('click');
    });
  };


  $(function(){
    owlCrouselFeatureSlide();
  });

}())
