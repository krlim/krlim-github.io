$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;

    //    Fixed header
    scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);
    $(window).on("scroll", function(){
        $("#nav").removeClass("active");
        $("#nav-toggle").removeClass("active");
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
        function checkScroll(scrollOffset){
           if(scrollOffset >= introH) {
            header.addClass("fixed");
            }
            else {
                header.removeClass("fixed");
            }
        }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass("active");
        $this.addClass("active");
        $("#nav-toggle").removeClass("active");
        $("html, body").animate({
            scrollTop : blockOffset
        }, 500);

    });


    // Menu nav toggle
    $("#nav-toggle").on("click", function(event){
         event.preventDefault();
         $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // Collapse
    $("[data-collapse]").on("click", function(event){
         event.preventDefault();
         var $this = $(this),
             blockId = $(this).data("collapse");
          $(this).toggleClass("active");
         $(blockId).slideToggle();


    });

    // Slider
    $('[data-slider]').slick({
         infinite: true,
         fade: true,
         slidesToShow: 1,
         slidesToScroll: 1
    });



});
