(function($) {
  "use strict";
  $(document).on('click', '#header-nav-icon', function() {
    $('nav.header-nav').toggleClass('header-nav-active');
  });

})(jQuery);
