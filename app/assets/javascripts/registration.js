(function($){
  "use strict";

  $(document).on('click','.register-therapist',function(event){
    $('.register-therapist , .register-client').hide();
    $('.new-therapist').addClass('active');
    $('.welcome, h1').html('Register a Therapist');
  });

  $(document).on('click','.register-client',function(event){
    $('.register-therapist , .register-client').hide();
    $('.new-client').addClass('active');
    $('.welcome, h1').html('Register a Client');

  });




})(jQuery);
