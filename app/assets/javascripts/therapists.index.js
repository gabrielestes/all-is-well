(function($){
"use strict";
  $(document).on('click', '.sort', function(event){
    $(event.target).parent('.sort').find('a').toggleClass('active');

  });

})(jQuery);
