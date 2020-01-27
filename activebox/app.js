$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    checkScroll(scrollPos, introH);

    $(window).on("scroll load resize", function(){
       scrollPos = $(this).scrollTop();
       introH = intro.innerHeight();
       checkScroll(scrollPos, introH);

    });

     function checkScroll(scrollPos, introH){
        if(scrollPos > introH){
           header.addClass("fixed");
        } else{
        header.removeClass("fixed");
        }
     }
    header.addClass("fixed");

//    smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 70
        },700);

    });

//    Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });


});
