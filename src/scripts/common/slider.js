function slider(){
  const slidesLeft = $('.slider__list-left');
  const slidesRight = $('.slider__list-right');
  const next = $('#slider__btn--next');
  const previous = $('#slider__btn--prev');
  const controlsLeft = $('.slider__items-left');
  const controlsRight = $('.slider__items-right');

  var sliderL = $('.slider__list-left');
  var itemsL = sliderL.find('.slider__items-left');
  var slideActiveL = itemsL.filter('.slider--active-left');
  var leftItemN = slideActiveL.next();
  var leftItemP = slideActiveL.prev();
  // var reqIndex = reqItemN.index();
  console.log(slideActiveL.index());
  console.log(leftItemN.index());
  console.log(leftItemP.index());
  // console.log(reqIndex);

  var sliderR = $('.slider__list-right');
  var itemsR = sliderR.find('.slider__items-right');
  var slideActiveR = itemsR.filter('.slider--active-right');
  var rightItemN = slideActiveL.next();
  var rightItemP = slideActiveL.prev();
  console.log(rightItemN.index());
  console.log(rightItemP.index());

  function percent(n) {
    // var pos = n*-100;
    var position = (-n * 100) + '%';
    return position;
  }
  var posLeft = percent(slideActiveL.index());
  controlsLeft.css({'top':posLeft});

  var posRight = percent(slideActiveR.index());
  controlsRight.css({'top':posRight});

  next.on('click',function(){
    posLeft = percent(leftItemN.index());
    posRight = percent(rightItemP.index());
    controlsLeft.css({'top':posLeft});
    controlsRight.css({'top':posRight});
    console.log(posLeft)
    console.log(posRight)
  });
  previous.on('click',function(){
    posLeft = percent(leftItemP.index());
    posRight = percent(rightItemN.index());
    controlsLeft.css({'top':posLeft});
    controlsRight.css({'top':posRight});
    console.log(posLeft)
    console.log(posRight)
  });

  // posRight = percent(currentSlideRight);
  // controlsLeft.css({'top':posLeft});
  // controlsRight.css({'top':posRight});
  // var reqIndex = controlsLeft.index();
  // console.log(reqIndex);
}

function nextSlide(){

}


// осуществляет переход к слайду номер n (начиная с 0)
// function goToSlide(){
//
//
// // console.log(controlsLeft.length);
// // currentSlide = (n+slides.length)%slides.length; // остаток от деления
//   // slides[currentSlide].className = 'slide';
//   // currentSlide = (n+slides.length)%slides.length; // остаток от деления
//   // slides[currentSlide].className = 'slide showing';
// }

// // навешивает обработчики событий на элементы next и prev
// function setupListners(){
//   next.onclick = function(){
//     goToSlide(currentSlide+1);
//   };
//   previous.onclick = function(){
//     goToSlide(currentSlide-1);
//   };
// }
//
// // показывает кнопки для навигации
// function showButtons(){
//   for(var i=0; i<controls.length; i++){
//     controls[i].style.display = 'inline-block';
//   }
// }

// инициализация слайдера
// function sliderInit(){
//   if (slides.length !== 0){ // если на странице есть нужный html код
//     setupListners();
//     showButtons();
//   }
// }

module.exports = slider;
