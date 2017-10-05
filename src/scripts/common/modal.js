
function modalMsg(msg){
    const modal = $('.modal');
    const modalBtn = modal.find('.modal__btn');
    const modalMsg = modal.find('.modal__msg');
    if (modal) {
        modalMsg.text(msg)
        modal.fadeToggle();

        modalBtn.on('click',function(){
            modal.fadeToggle();
            modalBtn.off('click');
        });
    } 
}

module.exports = modalMsg;