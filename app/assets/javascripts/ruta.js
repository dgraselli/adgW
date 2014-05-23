# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
  var progresspump = setInterval(function(){
    /* query the completion percentage from the server */
    $.get("/ruta/update-progress", function(data){
      /* update the progress bar width */
      $("#progress").css('width',data+'%');
      /* and display the numeric value */
      $("#progress").html(data+'%');

      /* test to see if the job has completed */
      if(data > 99.999) {
        clearInterval(progresspump);
        $("#progressouter").removeClass("active");
        $("#progress").html("Done");
      }
    })
  }, 1000);});