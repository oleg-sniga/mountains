

$('.section__btn--modal').on('click', function(){
    $('.form__modal').fadeToggle();
  });
  
  var submitForm = function (ev) {
        ev.preventDefault();
      // console.log(ev);
  
      var form = $(ev.target);
  
      var request = ajaxForm(form);
  
      request.done(function(msg) {
          var mes = msg.mes,
              status = msg.status;
          if (status === 'OK') {
            $('.form__modal').fadeToggle(function(){
              $(this).children('.modal__text').text(mes);
            });
  
              // form.append('<p class="success">' + mes + '</p>');
          } else{
            $('.form__modal').fadeToggle(function(){
              $(this).children('.modal__text').text(mes);
            });
              // form.append('<p class="error">' + mes + '</p>');
          }
      });
  
      request.fail(function(jqXHR, textStatus) {
        $('.form__modal').fadeToggle(function(){
          $(this).children('.modal__text').text("Request failed: " + textStatus);
        });
          // alert("Request failed: " + textStatus);
      });
  }
  
  var ajaxForm = function (form) {
  
      var url = form.attr('action'),
          data = form.serialize();
      return $.ajax({
          type: 'POST',
          url: url,
          data: data,
          dataType: 'JSON'
      });
  
  }
  $('#order-form').on('submit', submitForm);