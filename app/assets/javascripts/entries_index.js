document.addEventListener("turbolinks:load", function(){
"use strict";

  //on button click, show previous entries and shrink buttons
  $(document).on('click','.button-box .button',function(event){
    var pressed = '#' + $(event.target).attr("id");
    var notPressed = '#' + $(event.target).siblings('.button').attr('id');

    //if the pressed button's view is not hidden, hide both views and expand the buttons
    if( ! ($('pressed').hasClass('disappear')) ) {
      console.log('pressed does not have class disappear');
      $('.entry-view').addClass('disappear');
      $('.button-box').removeClass('shrink');

    //if the pressed button's view is hidden, show that view only and shrink the buttons
    } else {
      console.log('pressed has class disappear');
      $('pressed').removeClass('disappear');
      $('.button-box').addClass('shrink');
    if( ! ($('notPressed').hasClass('disappear')) ){
      $('notPressed').addClass('disappear');
      }
    }

    });



});
