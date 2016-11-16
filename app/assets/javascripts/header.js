(function($) {
  "use strict";
  $(document).on('click', '.menu-icon', function() {
    $('nav').slideToggle(500, 'linear');
    $('.t-show-content').toggleClass('scrunch');
  });

})(jQuery);
