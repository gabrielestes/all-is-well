
(function($) {
  "use strict";

  $(document).on('turbolinks:load', function() {

    var path = location.pathname;
    var pathArr = path.split('/');
    var clientId = pathArr.pop();

    var displayEvents = [];


  //Checks the page location before making GET request for event data
    if (pathArr[1] === "therapist" && pathArr[2] === "calendar" ) {

        $.ajax({
          url: '/calendar/json/' + clientId,
          method: 'GET',
        }).done(function(data) {
          //Arrays for sorting events by event type
          var positiveEvents = [];
          var negativeEvents = [];
          var neutralEvents = [];
          //Loops through events and assigns properties that are needed to display properly once passed to calendar. Then pushes event to corresponding event type array.
          data.forEach(function(event) {
            event.start = event.date;
            event.title = "EVENT";
            if (event.event_type === "negative") {
              negativeEvents.push(event);
            } else if (event.event_type === "positive") {
              positiveEvents.push(event);
            } else if (event.event_type === "neutral") {
              neutralEvents.push(event);
            }
          }
        );

        var positiveColor = "#5EAAED";
        var negativeColor = "#b1269e";
        var neutralColor = "#A49097";

        var positiveEventsObj = {
          events: positiveEvents,
          backgroundColor: positiveColor,
          color: positiveColor
        };

        var negativeEventsObj = {
          events: negativeEvents,
          backgroundColor: negativeColor,
          color: negativeColor
        };

        var neutralEventsObj = {
          events: neutralEvents,
          backgroundColor: neutralColor,
          color: neutralColor
        };





        $('#calendar').fullCalendar(
          {
            header: {
              left:   'today prev,next',
              center: 'title',
              right:  'month, basicWeek'
            },

            eventSources: [
                positiveEventsObj,
                negativeEventsObj,
                neutralEventsObj
            ],


            eventClick: function(calEvent, jsEvent, view) {
              console.log('in cal');
                $('.event-detail-card').addClass('active');
                // Formats event date for display
                var displayDate = moment(calEvent.date).format("MMMM Do[,] YYYY");

                // Updates event detail card with the clicked event data
                 $('#event-date').html(displayDate);
                 $('.event-type-sub-header').removeClass("positive negative neutral").addClass(calEvent.event_type);
                 $('#event-type').html(calEvent.event_type.toUpperCase());
                 $('#event-description').html('"' + calEvent.description + '"');

                 // Displays modal and event detail card
                 $('.modal').css("display", "flex");

             }
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




        });
     }

  });

})(jQuery);
