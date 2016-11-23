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
      console.log(this);
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



  /* ************ ACTIVITY-DETAIL-CARD MODAL FUNCTIONALITY BELOW ************* */
  /* **************************************************************** */

  $(document).on('click', '.activity-card', function(event) {
  

    var clickedCard = event.target;
    console.log(clickedCard);

    var detailCards = ".event-detail-card .entry-detail-card survey-detail-card";
    $(detailCards).removeClass('active');

    if ($(clickedCard).hasClass('event')) {
      console.log('in');
      $('.event-detail-card').addClass('active');
    }


    // Displays modal and event detail card
    $('.modal').css("display", "flex");
  });

  // Hides modal and event detail card if you click anywhere outside of event detail card
  $(document).on('click', '.modal-background', function(event) {
    event.preventDefault();
    $('.modal').css("display", "none");
  });

  // Hides modal and event detail card if you click on "x" on event detail card
  $(document).on('click', '.x-btn', function(event) {
    event.preventDefault();
    $('.modal').css("display", "none");
  });

})(jQuery);
