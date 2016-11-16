(function($) {
  "use strict";
  $(document).on('click', '.t-view-dashboard-icon', function() {
    $('.t-view-dashboard').toggleClass('t-dashboard-active');
    $('.t-view-header').toggleClass('t-dashboard-active');
    $('.t-view-content').toggleClass('t-dashboard-active');
    $('.t-view-dashboard-icon').toggleClass('t-dashboard-active');
  });

})(jQuery);
