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


module.exports = flipperInit;
