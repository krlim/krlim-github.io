$(function() {
    //**** Header ****
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();
    checkScroll(scrollPos, introH);
    $(window).on("scroll load resize",function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    //**** Burger ****
    let burger = $("#burger");
    burger.on("click", function() {
        $(this).toggleClass("active");
    });






});
