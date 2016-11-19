(function($) {
  "use strict";

 var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

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


//****Below function makes the dashboard automatically open if the display width is bigger than 700px****

  function loadDashboardOpen() {
    if (width >= 700) {
      console.log(width);
      dashboardElements.forEach(function(element) {
        $(element).addClass('t-dashboard-active').addClass('initial-page-load');
      });
    }
  }


$(document).on('turbolinks:render', function() {
    loadDashboardOpen();
});

$(document).on('turbolinks:load', function() {
    loadDashboardOpen();
});




})(jQuery);
