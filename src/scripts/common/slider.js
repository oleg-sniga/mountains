function slider(){
  const slider = $('.slider__list');
  const nav = $('.slider-nav');

  $('.slider-nav__btn').on('click', function(event) {
    event.preventDefault;
  });

  $('.slider__btn').on('click',function(){

      var items = slider.find('.slider__items');
      var slideActive = items.filter('.slider--active');
      var reqItemN = slideActive.next();
      var reqItemP = slideActive.prev();


      var navButtons = nav.find('.slider-nav__items');
      var navActive = navButtons.filter('.nav--active');
      var navItemN = navActive.next();
      var navItemP = navActive.prev();

      if ($(this).hasClass('slider__btn--next')){
        if (reqItemN.length){
          var reqIndex = reqItemN.index();
          posElem = -reqIndex * 100;

          $('.slider__list').animate({"left": posElem+"%"},1000,function(){
            slideActive.removeClass('slider--active');
            reqItemN.addClass('slider--active');

            navActive.removeClass('nav--active');
            navItemN.addClass('nav--active');
          });
        }
      } else {
        if (reqItemP.length){
          var reqIndex = reqItemP.index();
          posElem = -reqIndex * 100;

          $('.slider__list').animate({"left": posElem+"%"},1000,function(){
            slideActive.removeClass('slider--active');
            reqItemP.addClass('slider--active');

            navActive.removeClass('nav--active');
            navItemP.addClass('nav--active');
          });
        }
      }
  });
}
module.exports = slider;
