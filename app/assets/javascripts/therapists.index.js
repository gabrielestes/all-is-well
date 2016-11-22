//TODO: use url hash instead if time to change.

document.addEventListener("turbolinks:load", function(){

    //on page load, remove .actives from either title.
    $('.sort a').removeClass('actives');

    //check storage for existing activeItem
    var storage = localStorage.getItem('activeItem') || "wellness";

    //assign .actives to most recently chosen item based on what was stored in localStorage
        var id = "#" + storage;
        $(id).addClass('actives');
        localStorage.setItem('activeItem',storage);
  //on click, re-assign .actives to clicked element and store it in localStorage under that element
  $(document).on('click', '.sort a', function(event){
    //get id of clicked element and store in localStorage
    var newStorage = $(event.target).attr("id");
    localStorage.setItem('activeItem',newStorage);
    //assign .actives to the clicked element to apply styling
    $('#' + newStorage).addClass('actives');
    console.log('#' + newStorage);
  });


});
