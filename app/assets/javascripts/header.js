(function($) {
  "use strict";
  $(document).on('click', '.menu-icon', function() {
    $('nav').slideToggle(500, 'linear');
    $('.t-view-dashboard').toggleClass('scrunch');
    $('.t-view-content').toggleClass('scrunch');
  });

})(jQuery);
