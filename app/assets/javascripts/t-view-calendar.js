
(function($) {
  "use strict";


  $(document).on('turbolinks:load', function() {

    var path = location.pathname;
    var pathArr = path.split('/');
    var clientId = pathArr.pop();

    var displayEvents = [];


  //Checks the location to 
    if (pathArr[1] === "therapist" && pathArr[2] === "calendar" ) {

        $.ajax({
          url: '/calendar/json/' + clientId,
          method: 'GET',
        }).done(function(data) {
          var clientEvents = [];
          data.forEach(function(event) {
            event.start = event.date;
            event.title = event.event_type;
            clientEvents.push(event);
          }
        );

        displayEvents = clientEvents;


        $('#calendar').fullCalendar(
          {
            header: {
              left:   'today prev,next',
              center: 'title',
              right:  'month, basicWeek'
            },

            events: displayEvents,

            eventClick: function(event) {
               if (event.url) {
                   window.open(event.url);
                   return false;
               }
            }
        });



        });


    }



  });


})(jQuery);
