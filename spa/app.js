$(function() {
    //**** Header ****
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();
    let burger = $("#burger");
    let nav = $("#nav");
    checkScroll(scrollPos, introH);
    $(window).on("scroll load resize",function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
        nav.removeClass("show");
        burger.removeClass("active");
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    //**** Burger ****

    burger.on("click", function() {
        event.preventDefault();
        $(this).toggleClass("active");
        nav.toggleClass("show");
    });


    //**** Nav ****

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset -70
        },700);

    });







});
