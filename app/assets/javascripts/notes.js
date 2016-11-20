(function($) {
  "use strict";

 var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

$(document).on('turbolinks:load', function() {

var shared = $('#shared-boolean').innerHTML();

console.log(shared);



});

})(jQuery);
