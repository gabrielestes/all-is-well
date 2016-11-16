(function($){
  $(document).on('click','.filter_title a',function(event){
    $('.patient_card').removeClass('hide');
    $('.filter_title a').each(function(){
      if ( $(this).hasClass('active')) {
        $(this).toggleClass('active');
      }
    });
    $(event.target).toggleClass('active');
    event.preventDefault();
    var classes = $(event.target).attr('class');
    //the activity type must be the second class named for this to work.
    var activity = classes.split(/[_ ]/)[1];
    $('.patient_card').each(function(){
      if($(this).hasClass(activity)) {
        $(this).show();
      } else if (activity === 'all'){
        $(this).show();
      }
      else {
        $(this).hide();
      }
    });
  });

})(jQuery);
