
(function($) {
  "use strict";


  $(document).on('turbolinks:load', function() {

    var path = location.pathname;
    var pathArr = path.toString().split('/');
    var clientId = pathArr.pop();

    var displayEvents = [];



    if (pathArr[1] === "therapist" && pathArr[2] === "calendar" ) {
        console.log('on calendar page for client: ' + clientId);

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
        console.log(displayEvents);

        $('#calendar').fullCalendar(
          {
            events: displayEvents,

            eventClick: function(event) {
               if (event.url) {
                   window.open(event.url);
                   return false;
               }
            }
        });



        });

    //***TODO*** Loop through the events array and create a new array with objects that have properties that the calendar accepts. then pass to calendar to display******

    }



      // page is now ready, initialize the calendar...

      // $('#calendar').fullCalendar(
      //   {
      //     events: displayEvents,
      //
      //     eventClick: function(event) {
      //        if (event.url) {
      //            window.open(event.url);
      //            return false;
      //        }
      //     }
      // });






  });


})(jQuery);
