
function softScroll(){

    const linkUp = $('.arrow-up__link');
    const linkDown = $('.arrow-down__link');

    function actionScroll(elem){
        const elementClick = $(elem).attr("href");
        const destination = $(elementClick).offset().top;

        $('html').animate( { scrollTop: destination }, 800 );

        return false;
    }

    linkUp.on('click',function () {
        actionScroll(this);
    });
    linkDown.on('click',function () {
        actionScroll(this);
    });
}

module.exports = softScroll;