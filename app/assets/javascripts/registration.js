(function($){
  "use strict";

  $(document).on('click','.register-therapist',function(event){
    $('.register-therapist , .register-client').hide();
    $('.new-therapist').addClass('active');
  });
  $(document).on('click','.register-client',function(event){
    $('.register-therapist , .register-client').hide();
    $('.new-client').addClass('active');
  });

})(jQuery);
