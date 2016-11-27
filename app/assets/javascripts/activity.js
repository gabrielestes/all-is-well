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



  /* ************ ACTIVITY-DETAIL-CARD MODAL FUNCTIONALITY BELOW ************* */
  /* **************************************************************** */

  $(document).on('click', '.activity-card', function(event) {

  // The clicked card element
    var clickedCard = event.currentTarget;

  // Removes the active class from all detail cards before adding it to clicked card.
    var detailCards = ['.event-detail-card', '.entry-detail-card', '.mood-detail-card'];
      detailCards.forEach(function(card) {
        $(card).removeClass('active');
      });



 /* ****** if clicked card is an EVENT CARD ******* */
 /* *********************************************** */
    if ($(clickedCard).hasClass('event')) {
        // Gets clicked event data
          var thisEventDate = $(clickedCard).find('.time').html();
          var thisEventType = $(clickedCard).find('.type-of').html().toUpperCase();
          var thisEventDescription = $(clickedCard).find('.event-content').html();

        // Updates event detail card with the clicked event data
          $('#event-date').html(thisEventDate);
          $('#event-type').html(thisEventType);
          $('#event-description').html('"' + thisEventDescription + '"');

        // Displays event detail card against modal
          $('.event-detail-card').addClass('active');
        }


  /* ****** if clicked card is an ENTRY CARD ******* */
  /* *********************************************** */
    if ($(clickedCard).hasClass('entry')) {
        // Gets clicked event data
          var thisEntryDate = $(clickedCard).find('.time').html();
          var thisEntryTitle = $(clickedCard).find('.entry-title').html().toUpperCase();
          var thisEntryDescription = $(clickedCard).find('.entry-content').html();

        // Updates event detail card with the clicked event data
          $('#entry-date').html(thisEntryDate);
          $('#entry-title').html('"' + thisEntryTitle + '"');
          $('#entry-description').html('"' + thisEntryDescription + '"');

        // Displays entry detail card against modal
          $('.entry-detail-card').addClass('active');
        }



  /* ****** if clicked card is an MOOD SURVEY CARD ******* */
  /* *********************************************** */
    if ($(clickedCard).hasClass('mood')) {

        // Displays mood survey detail card against modal
          $('.mood-detail-card').addClass('active');
        }




  // Displays modal and selected event detail card
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
