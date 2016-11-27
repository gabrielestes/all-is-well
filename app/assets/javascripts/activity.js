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
        // Event-type colors
          var positiveColor = "#8CC6DB";
          var negativeColor = "#4c5fce";
          var neutralColor = "#928EA0";
        // Gets clicked event data
          var thisEventDate = $(clickedCard).find('.time').text();
          var thisEventType = $(clickedCard).find('.type-of').text().toUpperCase();
          var thisEventDescription = $(clickedCard).find('.event-content').text();



        // Updates event detail card with the clicked event data
          $('#event-date').text(thisEventDate);
          $('#event-type').text(thisEventType);
          $('#event-description').text('"' + thisEventDescription + '"');


          // Changes background color of subheader to match the event-type
            switch(thisEventType) {
              case ' POSITIVE ':
                  $('.event-type-sub-header').css('background-color', positiveColor);
                  break;
              case ' NEGATIVE ':
                    $('.event-type-sub-header').css('background-color', negativeColor);
                  break;
              case ' NEUTRAL ':
                    $('.event-type-sub-header').css('background-color', neutralColor);
                  break;
            }

        // Displays event detail card against modal
          $('.event-detail-card').addClass('active');
        }


  /* ****** if clicked card is an ENTRY CARD ******* */
  /* *********************************************** */
    if ($(clickedCard).hasClass('entry')) {
        // Gets clicked entry data
          var thisEntryDate = $(clickedCard).find('.time').text();
          var thisEntryTitle = $(clickedCard).find('.entry-title').text().toUpperCase();
          var thisEntryDescription = $(clickedCard).find('.entry-content').text();

        // Updates entry detail card with the clicked entry data
          $('#entry-date').text(thisEntryDate);
          $('#entry-title').text('Subject:  ' + thisEntryTitle);
          $('#entry-description').text('"' + thisEntryDescription + '"');

        // Displays entry detail card against modal
          $('.entry-detail-card').addClass('active');
        }

//Gets survey results from hidden elements using JQuery
  function getSurveyResults(clickedCard) {
    var answersArr = [];
    for (index = 1; index <= 9; index++) {
      var classname = '.q' + index;
      var answer = $(clickedCard).find(classname).text();
      switch(answer) {
        case ' 0 ':
          answer = "Not At All (0)";
          break;
        case ' 1 ':
          answer = "Several Days (1)";
          break;
        case ' 2 ':
          answer = "More Than Half the Days (2)";
          break;
        case ' 3 ':
          answer = "More Than Every Day (3)";
          break;
      }
      answersArr.push(answer);
    }
    console.log(answersArr);
    return answersArr;
  }

  function setAnswers(answersArr) {
    for (index = 0; index < answersArr.length; index++) {
      console.log('in loop');
      var question = '#q' + (index + 1);
      $(question).html(answersArr[index]);
    }
  }


  /* ****** if clicked card is an MOOD SURVEY CARD ******* */
  /* *********************************************** */
    if ($(clickedCard).hasClass('mood')) {
        // Gets clicked mood survey data
          var thisSurveyDate = $(clickedCard).find('.time').text();
          var thisSurveyScore = $(clickedCard).find('.score').text();
          var thisSurveyResults = $(clickedCard).find('.q2').text();
          var thisMoodIcon = $(clickedCard).find('.mood-icon').clone();


        // Updates event detail card with the clicked event data
          $('#mood-date').text(thisSurveyDate);
          $('#mood-score').text('MOOD SCORE: ' + thisSurveyScore);
          $('#mood-survey').text('Question 2 Answer ' + thisSurveyResults);
          $('#mood-icon').html(thisMoodIcon);

          var thisAnswers = getSurveyResults(clickedCard);
          setAnswers(thisAnswers);

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
