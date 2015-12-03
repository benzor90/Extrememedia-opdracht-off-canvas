  
// intro slider home (index.html)
  var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction: true,
      paginationClickable: true,
      spaceBetween: 15,
      speed: 1000
  });





    var swiper2 = new Swiper('.swiper2', {
        pagination: '.swiper-pagination2',
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        spaceBetween: 15,
        speed: 1000,
        paginationClickable: true
    });
   






  $(document).ready( function () {

  // slider 3 to 1, section news
  	$('.responsive').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false,

            }

        },
         {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                
            }
        }]
    });

    // tabs-plugin on professionals.html
    $('#tabs').tabulous(); 

  });