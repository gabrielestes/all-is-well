(function($){
"use strict";

document.addEventListener("turbolinks:load", function(){

  //hide all questions, 'submit' button ,and 'previous' button
  $('#new_survey').find('.question').addClass('closeQ');
  $('#last-question').hide();
  $('#new_survey').find('.button').hide();
    var numQ = 9;
    var current = 0;
  //if label clicked, corresponding radio button checked and change event initiated
  $('.choices').on('click','label', function(event){
    $(event.target).prev().attr('checked','true').change();
  });

  //click event for 'next-question' button
  $('#next-question').on('click',function(){
      //if no radio buttons checked, return
      if (current > 0) {
      var id = "q" + current;
      if (!$('input[name=' + id + ']:checked').length) {
        return;
        }
      }

        $('.survey-intro').remove();
        current++;
        $('#next-question i').removeClass("fa-play").addClass("fa-angle-double-right");
        $('#next-question').show().find('span').html("Next  ");

        if(current >= 1){
          $('#q' + current).addClass('openQ').removeClass('closeQ');
        }
        if(current > 1){
          $('#q' + (current - 1)).addClass('closeQ').removeClass('openQ');
          $('#last-question').show();
        }
        //change event for radio buttons to test if should show 'submit' button
        $('#new_survey').change(function(){
          if(current === numQ && $('input[name=q9]:checked').length > 0 ){
            $('.button').show();
            $('#next-question').hide();
          }
        });
        if(current < numQ){
          $('.button').hide();
        }
      });

  $('#last-question').on('click',function(){
    current--;
    if(current <= 1){
      $('#last-question').hide();
    }
    if(current >= 1){
      $('#q' + (current + 1)).addClass('closeQ').removeClass('openQ');
      $('#q' + current).addClass('openQ').removeClass('closeQ');
    }
    if(current > 1){
      $('#last-question').show();
    }
    if(current === numQ-1){
      $('#next-question').show();
    }
    if(current < numQ){
      $('.button').hide();
    }

  });

});


})(jQuery);
