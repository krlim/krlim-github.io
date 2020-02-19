// Filter
$(function () {
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();
        let cat = $(this).data('filter');
        if (cat === 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
             $("[data-cat]").each(function () {
            let workCat = $(this).data('cat');
            if(workCat != cat) {
                $(this).addClass('hide');
            }
            else $(this).removeClass('hide');
            });
        }
    });

});


// Modal
const modalCall = $('[data-modal]');
const modalClose = $('[data-close]');

// open modal
modalCall.on("click", function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $(modalId).addClass('show');
    $('body').addClass('no-scroll');
    setTimeout(function(){
        $(modalId).find('.modal__dialog').css({
           transform: "rotateX(0)"
        });
    }, 200);
});


// close modal by click close button
modalClose.on("click", function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find('.modal__dialog').css({
           transform: "rotateX(90deg)"
        });

     setTimeout(function(){
        modalParent.removeClass('show');
        $('body').removeClass('no-scroll');
     }, 200);
});

// close modal by click on dark region
$('.modal').on("click", function(event) {
    event.preventDefault();
    let $this = $(this);
    $this.find('.modal__dialog').css({
           transform: "rotateX(90deg)"
        });

      setTimeout(function(){
        $this.removeClass('show');
        $('body').removeClass('no-scroll');
      }, 200);
});
$('.modal__dialog').on("click", function(event) {
    event.stopPropagation();
});


// Slider: slick https://kenwheeler.github.io/slick/
$('#worksSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

});
