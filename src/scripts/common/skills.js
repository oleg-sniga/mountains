function skills(){
  var target = $('.circles');
  var circles = target.find('.circles__svg-second');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  var switchC = false;

  function actionSkill(circles){
    $(circles).each(function(index){
        var circle = $(circles[index]);
        var percentCircle = 'circle-'+circle.attr('data-skill');
        circle.addClass(percentCircle);
    });
  }

  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){

      if(switchC==false){
        setTimeout(function(){
          actionSkill(circles);
        },700);

        switchC = true;
      }
    }
  });

}
module.exports = skills;
