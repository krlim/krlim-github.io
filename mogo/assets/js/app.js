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
        $this.addClass("active");
        $("#nav a").removeClass("active");
        $("#nav").removeClass("active");
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






});
