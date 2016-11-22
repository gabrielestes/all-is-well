(function($){
"use strict";

document.addEventListener("turbolinks:load", function(){

//hide all questions
$('#new_survey').find('.question').hide();

//on click, begin survey
$('#next-question').on('click',function(){
  //hide #begin-survey, show questions
  $('#next-question').html("Next");
  var numQ = 9;
  var current = 1;

  //add click events to progression buttons
  $('#next-question').on('click',function(){
      current++;
      //show next question, hide previous question
      $('#q' + current).slideToggle();
      if(current > 1){
        $('#q' + (current - 1)).slideToggle();
      }
      if(current === numQ){
        $('#next-question').hide();
      }
  });
  $('#last-question').on('click',function(){
      current--;
      // show last question, hide current question
      current++;
      //show next question, hide previous question
      $('#q' + current).slideToggle();
      if(current > 1){
        $('#q' + (current - 1)).slideToggle();
      }
      if(current === numQ){
        $('#next-question').hide();
      }
  });

});


});//end of turbolinks event listener

})(jQuery);
