$(function() {
  $("#lecturas th a, #lecturas .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
  $("#lecturas_search input").keyup(function() {
    $.get($("#lecturas_search").attr("action"), $("#lecturas_search").serialize(), null, "script");
    return false;
  });
});

function submit_form(form_name, format)
{
  form = $("#"+form_name);
  hidden_formant = form.children('input[name="format"]');

  aux = hidden_formant.val(); 
  hidden_formant.val(format); 
  form.submit(); 
  hidden_formant.val(aux); 
}

//map full screen
function map_fs(map) 
{

  googleMapWidth = $(map).css('width');
  googleMapHeight = $(map).css('height');


  $(map).css("position", 'fixed').
  css('top', 0).
  css('left', 0).
  css("width", '100%').
  css("height", '100%').
  css("z-index", '10000');
  google.maps.event.trigger(map, 'resize');


  $(map).append('<a onclick="map_fs_off(\''+map+'\',\''+googleMapWidth+'\',\''+googleMapHeight+'\'); $(this).remove()" class="btn btn-primary" style="position: fixed; bottom: 20px; right: 10px; z-index: 10001" >Salir</a>');

  return false;
}
 
function map_fs_off(map, w, h) 
{
  $(map).css("position", 'relative').
  css('top', 0).
  css('left', 0).
  css("width", w).
  css("height", h);
  google.maps.event.trigger(map, 'resize');  
}