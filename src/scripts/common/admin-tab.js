
function adminControls(){
    var controls = $('.ad-controls__link');
    var items = $('.ad-change__items');
    var controlActive = $('.ad-controls__link--active');

    function tabActive(active){
        var tabId = $(active).attr("href");
        $(tabId).fadeIn();
    }
    tabActive(controlActive);
    
    
    $('.ad-controls__link').on('click',function(event){
        event.preventDefault();

        var TabObj = $(this);
        controls.removeClass('ad-controls__link--active');
        items.fadeOut();

        TabObj.addClass('ad-controls__link--active');
        tabActive(TabObj);
        
    });
}

module.exports = adminControls;