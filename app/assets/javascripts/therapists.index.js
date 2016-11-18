(function($){
"use strict";
  $(document).on('click', '.sort', function(event){
    $(event.target).parent('.sort').find('a').toggleClass('active');
    // event.preventDefault();
    if( $(event.target).find('a').hasClass('active') ){

    }
  });

})(jQuery);
