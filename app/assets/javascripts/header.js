(function($) {
  "use strict";
  $(document).on('click', '.menu-icon', function() {
    $('nav').slideToggle();
    if( $('nav').hasClass('open')) {
    }
  });

})(jQuery);
