
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
          var clientEvents = [];
          var positiveEvents = [];
          var negativeEvents = [];
          //Loops through events and assigns properties that are needed to display properly once passed to calendar
          data.forEach(function(event) {
            event.start = event.date;
            event.title = event.event_type.toUpperCase();
            if (event.event_type === "negative") {
              negativeEvents.push(event);
            } else if (event.event_type === "positive") {
              positiveEvents.push(event);
            }
          }
        );

        var positiveColor = "#5EAAED";
        var negativeColor = "#b1269e";

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





        $('#calendar').fullCalendar(
          {
            header: {
              left:   'today prev,next',
              center: 'title',
              right:  'month, basicWeek'
            },

            eventSources: [
                positiveEventsObj,
                negativeEventsObj
            ],


            eventClick: function(calEvent, jsEvent, view) {

         alert('Event: ' + calEvent.title);
         alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
         alert('View: ' + view.name);

         // change the border color just for fun
         $(this).css('border-color', 'red');

     }
        });



        });
     }

  });

})(jQuery);
