(function ($) {
    "use strict";


    // preloader
    $(window).load(function() {
      $("#loading").delay(4000).fadeOut(1000);
      $("#loading-center").click(function() {
      $("#loading").fadeOut(1000);
      })
    })

    // wow active
    new WOW().init();

    // meanmenu active
    jQuery('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "991"
    });

    // Data-background
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // sticky
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 10) {
        $("#header-sticky").removeClass("sticky");
      } else {
        $("#header-sticky").addClass("sticky");
      }
    });

    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    // counterUp
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });


    // magnificPopup video
    $('.popup-video').magnificPopup({
      type: 'iframe'
  
      // other options
    });


    // magnificPopup single image
    $('.test-popup-link').magnificPopup({
       type: 'image'
       // other options
     });

    // magnificPopup img with Gallery
    $('.popup-img').magnificPopup({
      type: 'image',
      gallery: {
      enabled: true
        }
      });

    // sidebar active
    $('.info-bar').on('click',function(){
      $('.extra-info').addClass('info-open');
    })

    $('.close-icon').on('click',function(){
      $('.extra-info').removeClass('info-open');
    })

     
    // Slick slider for testimonial active
    $('.testimonial-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.test-img-active'
    });
    $('.test-img-active').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-active',
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // Brand-active
    $('.brand-active').slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // isotope active
      // Portfolio active
     var grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    })

      $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
      });

      //for portfolio menu active class
      $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });

     // magnificPopup img
    $('.popup-img').magnificPopup({
      type: 'image',
      gallery: {
      enabled: true
        }
      });

    // niceSelect
    $('select').niceSelect();

  
    
})(jQuery);