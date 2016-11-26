(function($) {
"use strict";

var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//Makes the dashboard display open automatically on wider screens.
function loadDashboardOpen() {
    dashboardElements.forEach(function(element) {
      $(element).addClass('c-dashboard-active').addClass('initial-page-load');
    });
}

//Gets location URL and determines if dashboard links should be displayed as active.
function getDashboardLocation() {

  var path = location.pathname;
  var pathArr = path.split('/');

  //****Below statements for THERAPIST view dashboard links****//
  if (pathArr[1] === "client" && pathArr[2] === "entries") {
    $('.c-dashboard-opt').removeClass('selected');
    $('#c-entries').addClass('selected');
  }

  if (pathArr[1] === "client" && pathArr[2] === "events") {
    $('.c-dashboard-opt').removeClass('selected');
    $('#c-events').addClass('selected');
  }

  if (pathArr[1] === "client" && pathArr[2] === "surveys") {
    $('.c-dashboard-opt').removeClass('selected');
    $('#c-surveys').addClass('selected');
  }

  if (pathArr[1] === "client" && pathArr[2] === "notes") {
    $('.c-dashboard-opt').removeClass('selected');
    $('#c-notes').addClass('selected');
  }

}


//Page elements that make up the client-view dashboard and sub-header.
var dashboardElements = [
 '.c-view-dashboard',
 '.c-view-header',
 '.c-view-content',
 '.c-view-dashboard-icon',
 '.c-show-dash-text',
 '.c-hide-dash-text'
];

//Event handler to display or hide the client-view dashboard.
$(document).on('click', '.c-dashboard-toggle-container', function() {
  dashboardElements.forEach(function(element) {
     $(element).removeClass('initial-page-load').toggleClass('c-dashboard-active');
   });

     });



$(document).on('turbolinks:render', function() {
 getDashboardLocation();
 if (width >= 700) {
 loadDashboardOpen();
 }
});

$(document).on('turbolinks:load', function() {

  if (width >= 700) {
 getDashboardLocation();
 loadDashboardOpen();
 }
});




})(jQuery);
