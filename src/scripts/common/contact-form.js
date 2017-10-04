const modalMsg = require('./modal');

function contactForm(){

  const submitForm = function (ev) {
    ev.preventDefault();

    const form = $(ev.target);

    var inName = $(form).find('.feedback-form__input[name="name"]');
    var inEmail = $(form).find('.feedback-form__input[name="email"]');
    var inMsg = $(form).find('.feedback-form__textarea[name="text"]');
    var minMsg = 5;//Минимальное количество символов в сообщении

    function checkField(value) { //Проверка поля ввода
      const id = $(value).attr('name');
      const content = $(value).val();

      if (id == 'name') {
        if (content.length!=0) {
          return "OK";
        } else {
          return "Введите свое имя.";
        }
      }

      if (id == 'email') {
        if (content.length!=0) {
          return "OK";
        } else {
          return "Введите адрес електроной почты.";
        }
      }

      if (id == 'text') {
        if (minMsg <= content.length > 0) {
          return "OK";
        } else {
          return "Напешите ваше сообщение не менее "+minMsg+" символов";
        }
      }

    }

    var checkName = checkField(inName);
    var checkEmail = checkField(inEmail);
    var checkMsg = checkField(inMsg);

    if (checkName=='OK'){
      if (checkEmail=='OK'){
        if (checkMsg=='OK'){

        } else {modalMsg(checkMsg);}
      } else {modalMsg(checkEmail);}
    } else {modalMsg(checkName);}

  }
  $('#feedback').on('submit', submitForm);

}

module.exports = contactForm;
