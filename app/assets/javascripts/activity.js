(function($){
  $(document).on('click','.filter_title a',function(event){

    console.log(event.target);
    $('.filter_title a').each(function(){
      if ( $(this).hasClass('active')) {
        $(this).toggleClass('active');
      }
    });
    $(event.target).toggleClass('active');
    event.preventDefault();
  });

})(jQuery);
