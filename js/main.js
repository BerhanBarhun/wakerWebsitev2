/*Navbar shrink*/
$(window).on("scroll",function(){
  if($(this).scrollTop() > 90){
    $(".navbar").addClass("navbar-shrink");
  }
  else{
    $(".navbar").removeClass("navbar-shrink");
  }

/*Carousel*/
  $('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:2,
      }
  }
});
/* Games swiper

var swiper = new Swiper(".image-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  loop:false,
  pagination: {
    el: ".swiper-pagination",
  },
});*/

/*Scroll*/
$.scrollIt({
    topOffset: -50  
});

/*navnar collapse*/

$(".nav-link").on("click",function(){
  $(".navbar-collapse").collapse("hide");
})
/*library */
$(function(){
  $('.tip').tooltip();
});

});