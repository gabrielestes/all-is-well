(function($) {
  "use strict";

 var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

$(document).on('turbolinks:load', function() {

//allows user to toggle between tabbed views

  $('.tabbed-views-wrapper').on('click', '#tab-a-btn', function() {
    $('.tab-b').removeClass('active');
    $('.tab-a').addClass('active');

    $('#tab-b-content').removeClass('active');
    $('#tab-a-content').addClass('active');
  });

  $('.tabbed-views-wrapper').on('click', '#tab-b-btn', function() {
    $('.tab-a').removeClass('active');
    $('.tab-b').addClass('active');

    $('#tab-a-content').removeClass('active');
    $('#tab-b-content').addClass('active');
  });

  // end tabbed views functionality


});

})(jQuery);
