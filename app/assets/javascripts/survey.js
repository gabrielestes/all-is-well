(function($){
"use strict";

document.addEventListener("turbolinks:load", function(){

//hide all questions
$('#new_survey').find('.question').hide();

//on click, begin survey
$('#begin-survey').on('click',function(){
  //hide #begin-survey, show questions
  $('#begin-survey').hide();


});


// $('#new_survey').first('next-question').on('click',function(event){
// var numQ = 9;
// var index = 1;
// while(index <= numQ){
//   console.log('#q' + 1);
//
//   $('#q' + numQ).show();
//   $('#q' + numQ - 1).hide();
//   $('#q' + numQ).find('.next-question').on('click', function(event){
//     index++;
//   });
// }
//
// });//end of start button click event
//
});//end of turbolinks event listener

})(jQuery);
