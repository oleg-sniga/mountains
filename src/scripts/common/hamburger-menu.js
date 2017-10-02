function menuHamburger(){
    $('.nav-btn').on('click',function(e){
        e.preventDefault;

        var svgLines = $('.nav-btn__line');
        var svgLine2 = $('.nav-btn__line-01');
        var svgLine2 = $('.nav-btn__line-02');
        var svgLine3 = $('.nav-btn__line-03');

        $(this).toggleClass('nav-btn--active');
        if($(this).hasClass('nav-btn--active')) {
          $('body').css({'overflow':'hidden'});
        } else {
          $('body').css({'overflow':'visible'});
        }


        var navObj = $(this).siblings('.hamburger-nav');
        navObj.slideToggle("fast");
    });
}

module.exports = menuHamburger;
