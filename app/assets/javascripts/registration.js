(function($){
  "use strict";

  $(document).on('click','.register-therapist',function(event){
    $(event.target).toggleClass('active');
    $('.register-therapist ~ .new-therapist').slideToggle();
    console.log($(".register-therapist ~ .new-therapist"));
  });

})(jQuery);
