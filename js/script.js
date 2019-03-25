$(function () {
    //   new WOW().init(); 

    $('.products').owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoplayHoverPause: false,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
        },
    });


    (function ($) {
        "use strict";


        /*==================================================================
        [ Focus Contact2 ]*/
        $('.input2').each(function () {
            $(this).on('blur', function () {
                if ($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                } else {
                    $(this).removeClass('has-val');
                }
            })
        })


    })(jQuery);



    $("a.smooth-scroll").click(function (event) {
        //prevents to perform the default operation
        event.preventDefault();

        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 40,
        }, 1250, "easeInOutExpo");
    });


});
