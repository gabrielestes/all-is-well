(function($) {
  "use strict";

$(document).on("turbolinks:load", function() {

  var path = location.pathname;
  var pathArr = path.split('/');
  console.log(pathArr);

if (pathArr[1] === "therapist" &&  pathArr[2] === "profile" ) {
    $('#home').removeClass('selected');
    $('#account').addClass('selected');
}


if (pathArr[1] === "therapist" &&  Number.isInteger(parseFloat(pathArr[2])) === true ) {
    $('#account').removeClass('selected');
    $('#home').addClass('selected');
}









//Displays navigation menu at mobile widths on menu icon click
  $(document).on('click', '#header-nav-icon', function() {
    $('nav.header-nav').toggleClass('header-nav-active');
  });



});




})(jQuery);
