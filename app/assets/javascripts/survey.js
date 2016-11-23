(function($){
"use strict";

document.addEventListener("turbolinks:load", function(){

  //hide all questions, 'submit' button ,and 'previous' button
  $('#new_survey').find('.question').addClass('closeQ');
  $('#last-question').hide();
  $('#new_survey').find('.button').hide();
    var numQ = 9;
    var current = 0;
  $('#next-question').on('click',function(){
    current++;
    console.log(current);
    $('#next-question').html("Next").show();
    if(current >= 1){
      $('#q' + current).addClass('openQ').removeClass('closeQ');
    }
    if(current > 1){
      $('#q' + (current - 1)).addClass('closeQ').removeClass('openQ');
      $('#last-question').show();
    }
    if(current === numQ){
      $('.button').show();
      $('#next-question').hide();
    }
    if(current < numQ){
      $('.button').hide();
    }
  });
  $('#last-question').on('click',function(){
    current--;
    console.log(current);
    if(current <= 1){
      $('#last-question').hide();
    }
    if(current > 1){
      $('#last-question').show();
      $('#q' + (current + 1)).addClass('closeQ').removeClass('openQ');
    }
    if(current >= 1){
      $('#q' + current).addClass('openQ').removeClass('closeQ');
    }
    if(current === numQ-1){
      $('#next-question').show();
    }
    if(current < numQ){
      $('.button').hide();
    }
  });
  $('#new_survey').find('.submit').on('click',function(){
    $('main.survey').append('h2').html('Thank you for submitting a survey!');
  });

});


})(jQuery);
