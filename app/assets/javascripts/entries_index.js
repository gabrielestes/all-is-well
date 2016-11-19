document.addEventListener("turbolinks:load", function(){
"use strict";


  //on button click, show previous entries and shrink buttons
  $(document).on('click','#view-previous-entries-btn',function(event){
    if( $('.button-box').hasClass('shrink') ) {
      $('.add_entry').addClass('disappear');
    } else {
      $('.previous_entries').removeClass('disappear');
      $('.button-box').addClass('shrink');
    }
  });
  //on button click, show add entry page and shrink buttons
  $(document).on('click','#add-new-entry-btn',function(event){
    if( $('.button-box').hasClass('shrink')){
      $('.previous_entries').addClass('disappear');
    } else {
      $('.add-entry').removeClass('disappear');
      $('.button-box').toggleClass('shrink');
    }
  });





});
