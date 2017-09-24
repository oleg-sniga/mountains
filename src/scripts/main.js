const $ = require('jquery');// если будет нужен
// const $ = require('./jquery/jquery.min.js');// если будет нужен


// const slider = require('./common/slider');
//const hamburger = require('./common/hamburger-menu');
const blur = require('./common/blur');
// const blogMenu = require('./common/blog-menu');
// const flipper = require('./common/flipper');

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
menuHamburger();

function flipperInit(){
    var Flip = $('.flipper');

    $('.login-btn').on('click',function(e){
        e.preventDefault;
        
        if (Flip.hasClass('flipper--active')) {
            Flip.removeClass('flipper--active');
        } else {
            Flip.addClass('flipper--active');
        }
    });
    $('.authorization--index').on('click',function(e){
        e.preventDefault;
        if (Flip.hasClass('flipper--active')) {
            Flip.removeClass('flipper--active');
        } else {
            Flip.addClass('flipper--active');
        }
    });
}
flipperInit();

function blogMenu() {
    
        $('.blog-nav__btn').on('click',function(event){
            event.preventDefault;
        
            var blogMenu = $(this).closest('.blog__left');
            
            if(blogMenu.hasClass('blog__left--active')) {
                blogMenu.removeClass('blog__left--active');
            } else {
                blogMenu.addClass('blog__left--active');
            }
            
        });
    }
blogMenu();

if (document.querySelector('.reviews__content')) {
    blur.set();
    window.onresize = function () {
        blur.set();
    }
}

// $('.blog-nav__btn').on('click',function(event){
//     event.preventDefault;

//     var blogMenu = $(this).closest('.blog__left');
    
//     if(blogMenu.hasClass('blog__left--active')) {
//         blogMenu.removeClass('blog__left--active');
//     } else {
//         blogMenu.addClass('blog__left--active');
//     }
// });

