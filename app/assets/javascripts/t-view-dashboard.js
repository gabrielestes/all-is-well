(function($) {
  "use strict";


   //Page elements that make up the therapist-view dashboard and sub-header.
    var dashboardElements = [
       '.t-view-dashboard',
       '.t-view-header',
       '.t-view-content',
       '.t-view-dashboard-icon',
       '.t-show-dash-text',
       '.t-hide-dash-text',
       '.modal'
     ];


  //Makes the dashboard display open automatically on wider screens.
  function loadDashboardOpen() {
      dashboardElements.forEach(function(element) {
        $(element).addClass('t-dashboard-active').addClass('initial-page-load');
      });
  }

  //Gets location URL and determines if dashboard links should be displayed as active.
  function getDashboardLocation() {

    var path = location.pathname;
    var pathArr = path.split('/');

    //****Below statements for THERAPIST view dashboard links****//
    if (pathArr[1] === "therapist" && pathArr[2] === "activity") {
      $('.t-dashboard-opt').removeClass('selected');
      $('#t-activity').addClass('selected');
    }

    if (pathArr[1] === "therapist" && pathArr[2] === "calendar") {
      $('.t-dashboard-opt').removeClass('selected');
      $('#t-calendar').addClass('selected');
    }

    if (pathArr[1] === "therapist" && pathArr[2] === "note") {
      $('.t-dashboard-opt').removeClass('selected');
      $('#t-notes').addClass('selected');
    }

    if (pathArr[1] === "therapist" && pathArr[2] === "c_profile") {
      $('.t-dashboard-opt').removeClass('selected');
      $('#t-client-profile').addClass('selected');
    }

  }



  $(document).on('turbolinks:render', function() {
        //Current display width
        var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        getDashboardLocation();

        if (currentWidth >= 700) {
          loadDashboardOpen();
        }

  });

  $(document).on('turbolinks:load', function() {
        //Current display width
        var currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        getDashboardLocation();

        if (currentWidth >= 700) {
          loadDashboardOpen();
        }
  });



  //Event handler to display or hide the therapist-view dashboard.
    $(document).on('click', '.t-dashboard-toggle-container', function() {
       dashboardElements.forEach(function(element) {
          $(element).removeClass('initial-page-load').toggleClass('t-dashboard-active');
        });

          });








})(jQuery);
