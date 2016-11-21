(function($){
  "use strict";
  $(document).on('click','a.edit',function(event){
<<<<<<< .merge_file_01GMGa

=======
>>>>>>> .merge_file_bflyE8
    $(event.target).toggleClass('active').parent().parent().next('aside').slideToggle();

    if ( $(event.target).hasClass('active') ) {
      $(event.target).parent().parent().next('aside').css('display','flex');
<<<<<<< .merge_file_01GMGa
    }
  });

})(jQuery);
=======
      $(event.target).parent().parent().css('background', 'rgba(35, 188, 158, 0.4)').css('border-bottom','none');
    } else {
      $(event.target).parent().parent().css('background', 'rgb(107, 213, 192)').css('border-bottom','0.25px solid rgb(35, 188, 158)');
    }
  });





})(jQuery);

// TODO: make page scroll to bottom when 'view' is opened for therapist
// $('#mydiv').slideToggle('slow', function() {
//      var height = $('#mydiv').height();
//      if($(this).is(':visible')){
//          $(window).scrollTo(height);
//      }
// });
>>>>>>> .merge_file_bflyE8
