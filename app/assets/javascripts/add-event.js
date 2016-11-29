(function($){

  //click event for 'submit' button
  $(document,'.make_event').on('click', '.event-btn',function(event){
    //if no radio buttons checked, return
      if (!$('input[name=event_type]:checked').length) {
        event.preventDefault();
      }
    });


  //when radio button clicked, unclick all radio buttons and then re-click the current one
  $(document,'.radio-choices').on('click','label', function(event){
    $('.radio-choices').find('input').prop('checked',false);
    $(event.target).prev().prop('checked','true').change();
  });










  })(jQuery);
