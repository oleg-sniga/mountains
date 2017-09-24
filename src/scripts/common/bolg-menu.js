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

module.exports = blogMenu;
