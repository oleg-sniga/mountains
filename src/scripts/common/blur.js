var blur = (function(){
    var wrapper = document.querySelector('.reviews__content'),
        feedback = document.querySelector('.reviews__blur');

    return {
        set: function () {
            var imgWidth = document.querySelector('.reviews__blur-bg').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop;
                blurCss = feedback.style;

            blurCss.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCss.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
}());

// blur.set();
// window.onresize = function () {
//     blur.set();
// }

module.exports = blur;