(function($) {
  "use strict";

 var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//Page elements that make up the client-view dashboard and sub-header.
 var dashboardElements = [
    '.c-view-dashboard',
    '.c-view-header',
    '.c-view-content',
    '.c-view-dashboard-icon',
    '.show-dash-text',
    '.hide-dash-text'
  ];

//Event handler to display or hide the therapist-view dashboard.
  $(document).on('click', '.c-dashboard-toggle-container', function() {
     dashboardElements.forEach(function(element) {
        $(element).removeClass('initial-page-load').toggleClass('c-dashboard-active');
      });

        });


//****Below function makes the dashboard automatically open if the display width is bigger than 700px****

  function loadDashboardOpen() {
    if (width >= 700) {
      console.log(width);
      dashboardElements.forEach(function(element) {
        $(element).addClass('c-dashboard-active').addClass('initial-page-load');
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
