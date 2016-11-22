//TODO: use url hash instead if time to change.

document.addEventListener("turbolinks:load", function(){

  var path = window.location.search;
    $('.sort a').removeClass('actives');
  if ( path.includes('?sort_by=last_name')){
    $('#name').addClass('actives');
  } else {
    $('#wellness').addClass('actives');
  }
});
