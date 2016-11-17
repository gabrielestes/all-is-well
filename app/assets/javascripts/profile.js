(function($){
  "use strict";
  $(document).on('click','a.edit',function(event){
    $(event.target).toggleClass('active').parent().parent().next('aside').slideToggle();
    if ( $(event.target).hasClass('active') ) {
      $(event.target).parent().parent().next('aside').css('display','flex');
      $(event.target).parent().parent().css('background', 'rgba(35, 188, 158, 0.4)');
    } else {
      $(event.target).parent().parent().css('background', 'rgb(107, 213, 192)');
    }
  });





})(jQuery);
