function menuHamburger(){
    $('.nav-btn').on('click',function(e){
        e.preventDefault;
    
        var svgLine1 = $('#nav-btn__line-1');
        var svgLine2 = $('#nav-btn__line-2');
        var svgLine3 = $('#nav-btn__line-3');
    
        svgLine1.attr('y1',17).attr('y2',17);
        svgLine3.attr('y1',17).attr('y2',17);
        svgLine2.hide();
    
    
        var navObj = $(this).siblings('.hamburger-nav');
        // navObj.addClass('hamburger-nav--active');
        navObj.slideToggle("fast");
    });
}

module.exports = menuHamburger;
