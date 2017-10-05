function authorization(){

  $('.authorization__input').on('focusin',function(){
    const label = $(this).closest('.authorization__label');
    label.toggleClass('authorization__label--focus');
    if ($('.authorization__msg')) {
      $('.authorization__msg').remove();
    }
    if (label.hasClass('authorization__label--error')) {
      label.removeClass('authorization__label--error');
    }
  }).on('focusout',function(){
    const label = $(this).closest('.authorization__label');
    label.toggleClass('authorization__label--focus');
  });

  var inputChecbox = $('#author-check');
  var titleCheck = inputChecbox.siblings('.authorization__title');
  inputChecbox.on('change',function(){
    titleCheck.css({'color': '#455a64'});
  });

  var submitForm = function (ev) {
        ev.preventDefault();
      // console.log(ev);

      var inputLogin = $('.authorization__input[name="login"]');
      var LabelLogin = inputLogin.closest('.authorization__label');

      var inputPass = $('.authorization__input[name="pass"]');
      var LabelPass = inputPass.closest('.authorization__label');

      var inputChecbox = $('#author-check');

      console.log(inputChecbox.prop('checked'));
      if (inputChecbox.prop('checked')==true) {
      } else {
        var titleCheck = inputChecbox.siblings('.authorization__title');
        titleCheck.css({'color': '#e44845'});
      }
      // var form = $(ev.target);
      if (2 < inputLogin.val().length > 0){
        console.log(inputLogin.val().length);
      } else {
        inputLogin.parent().prepend('<div class="authorization__msg">Логин менее 3-х сим.</div>');
        LabelLogin.addClass('authorization__label--error');
      }
      if (4 < inputPass.val().length > 0){
        console.log(inputPass.val().length);
      } else {
        inputPass.parent().prepend('<div class="authorization__msg">Пароль менее 5-и сим.</div>');
        LabelPass.addClass('authorization__label--error');
      }
      if (true) {

      }
  }

  $('#authorization-form').on('submit', submitForm);
}




module.exports = authorization;
