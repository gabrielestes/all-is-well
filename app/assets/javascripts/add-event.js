(function($){

  //click event for 'next-question' button
  $(document).on('click','.make_event', '.button',function(event){
    //if no radio buttons checked, return
      if (!$('input[name=event_type]:checked').length) {
        event.preventDefault();
      }



  $('.radio-choices').on('click','label', function(event){
    $('.radio-choices').find('input').prop('checked',false);
    $(event.target).prev().prop('checked','true').change();
  });


  });








  })(jQuery);
