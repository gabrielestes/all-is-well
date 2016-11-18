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
        $(element).toggleClass('t-dashboard-active');
      });



//****Below function makes the dashboard automatically open if the display width is bigger than 700px****
//***Commented out because it also makes the dashboard always slide in on page load and that is weird****
//****TODO: Figure out how to get it to display without sliding in on page load.****

// $(document).on('ready', function() {
//   if (width >= 700) {
//     console.log(width);
//     dashboardElements.forEach(function(element) {
//       $(element).addClass('t-dashboard-active');
//     });
//   }
// });



  });

})(jQuery);
