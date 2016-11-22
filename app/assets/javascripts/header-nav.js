(function($) {
  "use strict";


//Gets location URL and determines if header links should be styled appropriately if user is on home or account page.
function getHeaderLocation() {

  var path = location.pathname;
  var pathArr = path.split('/');


  if (pathArr[1] === "therapist" && pathArr.length === 2 || pathArr[1] === "client" && pathArr.length === 2 || pathArr[1] === "" && pathArr.length === 2) {
    $('#nav-account').removeClass('selected');
    $('#nav-home').addClass('selected');
  }

  if (pathArr[1] === "therapist" &&  pathArr[2] === "profile" || pathArr[1] === "client" &&  pathArr[2] === "profile" ) {
      $('#nav-home').removeClass('selected');
      $('#nav-account').addClass('selected');
  }

}


$(document).on("turbolinks:load", function() {

//Gets page location to assign correct styling of header links on page load
  getHeaderLocation();


//Displays navigation menu at mobile widths on menu icon click
  $(document).on('click', '#header-nav-icon', function() {
    $('nav.header-nav').toggleClass('header-nav-active');


  });
});



$(document).on("turbolinks:render", function() {
  //Gets page location to assign correct styling of header links on page render
  getHeaderLocation();
});



})(jQuery);
