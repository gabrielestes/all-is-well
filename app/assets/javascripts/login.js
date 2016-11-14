(function($) {
  "use strict";

  var tab = $('.tabs h3 a');

  tab.on('click', function(event) {
    event.preventDefault();
    tab.removeClass('active');
    $(this).addClass('active');

    var tab_content = $(this).attr('id');
    $('div[id$="tab-content"]').removeClass('active');
    $('div#' + tab_content).addClass('active');
  });


})(jQuery);
