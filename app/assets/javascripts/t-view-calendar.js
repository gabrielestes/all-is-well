
(function($) {
  "use strict";

  $(document).ready(function() {


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
