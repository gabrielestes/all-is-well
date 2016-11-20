
(function($) {
  "use strict";


  $(document).on('turbolinks:load', function() {

    var path = location.pathname;
    var pathArr = path.toString().split('/');
    var clientId = pathArr.pop();

    var clientEvents = [];


    if (pathArr[1] === "therapist" && pathArr[2] === "calendar" ) {
        console.log('on calendar page for client: ' + clientId);

        $.ajax({
          url: '/calendar/json/' + clientId,
          method: 'GET',
        }).done(function(data) {
          clientEvents = data;
          console.log(clientEvents);
        });

    //***TODO*** Loop through the events array and create a new array with objects that have properties that the calendar accepts. then pass to calendar to display******

    }



      // page is now ready, initialize the calendar...

      $('#calendar').fullCalendar({
          // put your options and callbacks here

    events: [
        {
            title  : 'event1',
            start  : '2016-11-11',
            url: 'http://www.google.com'
        },
        {
            title  : 'event2',
            start  : '2016-11-16',
            url: 'http://www.amazon.com'
        },
        {
            title  : 'event3',
            start  : '2016-11-09T12:30:00',
            allDay : false, // will make the time show
            url: 'http://www.yahoo.com'
        }
    ],

    eventClick: function(event) {
       if (event.url) {
           window.open(event.url);
           return false;
       }
   }





      });




  });


})(jQuery);
