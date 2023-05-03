
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(2000);
  });
  
  $("#stop").click(function(){
    $("#panel").stop();
  });
});