(function($) {
  "use strict";

  //Current display width
   var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  //Below function makes the dashboard display open automatically and with no transition ease


  function loadDashboardOpen() {
      dashboardElements.forEach(function(element) {
        $(element).addClass('t-dashboard-active').addClass('initial-page-load');
      });
  }

  $(document).on('turbolinks:render', function() {
    if (width >= 700) {
      loadDashboardOpen();
    }
  });

  $(document).on('turbolinks:load', function() {
    if (width >= 700) {
      loadDashboardOpen();
    }
  });

  //Page elements that make up the therapist-view dashboard and sub-header.
   var dashboardElements = [
      '.t-view-dashboard',
      '.t-view-header',
      '.t-view-content',
      '.t-view-dashboard-icon',
      '.show-dash-text',
      '.hide-dash-text'
    ];

  //Event handler to display or hide the therapist-view dashboard.
    $(document).on('click', '.t-dashboard-toggle-container', function() {
       dashboardElements.forEach(function(element) {
          $(element).removeClass('initial-page-load').toggleClass('t-dashboard-active');
        });

          });







$(document).on('turbolinks:load', function() {

});

})(jQuery);
