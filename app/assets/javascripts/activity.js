(function($){
  $(document).on('click','.filter_title a',function(event){
    var type = $('event.target').attr();
    console.log(type);
    $('.filter_title a').each(function(){
      if ( $(this).hasClass('active')) {
        $(this).toggleClass('active');
      }
    });
    $(event.target).toggleClass('active');
    event.preventDefault();
  });

})(jQuery);
