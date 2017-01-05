// JavaScript File
/* global $ */
$(document).ready(function() {

    $("#userButton").click(function(){
        
    
        var userSearch=$("#userSearch").val();
    
   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q="+userSearch +"&api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
for(var i=0;i<5;i++){
               $("#gif").append("<img class='img' src=" + response.data[i].images.fixed_height.url + ">");
       
      
        
}
      }); 
});
$("#reset").click(function(){
    $(".img").remove();
});

});