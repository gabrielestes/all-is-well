(function($){
"use strict";

document.addEventListener("turbolinks:load", function(){

  //hide all questions, 'submit' button ,and 'previous' button
  $('#new_survey').find('.question').addClass('closeQ');
  $('#last-question').hide();
  $('#new_survey').find('.survey-btn').hide();
    var numQ = 9;
    var current = 0;
  //if label clicked, corresponding radio button checked and change event initiated
  $('.choices').on('click','label', function(event){
    $(event.target).prev().prop('checked','true').change();
  });
  //change event for radio buttons to test if should show 'submit' button
  $('#new_survey').change(function(){
    if(current === numQ && $('input[name=q9]:checked').length > 0 ){
      $('.survey-btn').show();
      $('#next-question').hide();
    }
  });
  //click event for 'next-question' button
  $('#next-question').on('click',function(){

    $('#next-question').removeClass('begin-btn');


    // //if no radio buttons checked, return
    if (current >= 1) {
      var id = "q" + current;
      if (!$('input[name=' + id + ']:checked').length) {
        return;
        }
      }
      //if in initial click of 'next-question', change html and hide intro
      if (current === 0) {
        $('.survey-intro').remove();
        $('#next-question i').removeClass("fa-play").addClass("fa-angle-double-right");
        $('#next-question').show().find('span').html("Next  ");
      }
    current++;
      if(current >= 1){
        $('#q' + current).addClass('openQ').removeClass('closeQ');
        $('#next-question').show();
      }
      if(current > 1){
        $('#q' + (current - 1)).addClass('closeQ').removeClass('openQ');
        $('#last-question').show();
      }
      if(current < numQ){
        $('.survey-btn').hide();
      }
      //check if should show 'submit' if no change() event occurs
      if( current >= numQ ) {
        $('#next-question').hide();
        if ($('input[name=q9]:checked').length > 0) {
          $('.survey-btn').show();
        } else {
            $('.survey-btn').hide();
        }
      }
    });

    //click event for previous question button
  $('#last-question').on('click',function(){
    $('.survey-btn').hide();
    current--;
    if(current <= 1){
      $('#last-question').hide();
    }
    if(current >= 1){
      $('#q' + (current + 1)).removeClass('openQ').addClass('closeQ');
      $('#q' + current).removeClass('closeQ').addClass('openQ');
    }
    if(current > 1){
      $('#last-question').show();
    }
    if(current === numQ-1){
      $('#next-question').show();
    }
    // if(current === numQ) {
    //   $('#next-question').hide();
    //   $('.survey-btn').show();
    // }

    // if(current < numQ){
    //   $('.survey-btn').hide();
    // }
    });
  });



})(jQuery);
