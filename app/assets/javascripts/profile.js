(function($){
  "use strict";
  $(document).on('click','a.edit',function(event){

    $(event.target).toggleClass('active').parent().parent().next('aside').slideToggle();

    if ( $(event.target).hasClass('active') ) {
      $(event.target).parent().parent().next('aside').css('display','flex');
    }
  });

})(jQuery);
