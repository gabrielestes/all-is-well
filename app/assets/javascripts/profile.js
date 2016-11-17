(function($){
  "use strict";
  $(document).on('click','a.edit',function(event){
    $(event.target).toggleClass('active').parent().parent().next('aside').toggleClass('disappear');
    console.log($(event.target).parent().parent().next('aside'));
    // event.preventDefault();
  });





})(jQuery);
