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



.fullscreen
{
  width: 100%;
  height: 100%;
}