(function($){
  "use strict";
  $(document).on('click','a.edit',function(event){

    //assign click event to 'Submit' button to refresh page
    $('.button').on('click',function(){
      location = location.href;
    });

    //add .active to the link and show the following aside.
    $(event.target).toggleClass('active').parent().parent().next('aside').toggleClass('disappear');

    //if the link is .active, make sure the display is set to flex.
    if ( $(event.target).hasClass('active') ) {
      $(event.target).parent().parent().next('aside');
    }
  });
})(jQuery);
