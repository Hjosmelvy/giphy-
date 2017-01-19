// JavaScript File
/* global $ */
$(document).ready(function() {


    
    
  $.getJSON("https://ajar-target.gomix.me/status",function(response) {
      //  console.log(response);
        
        //var stops= Object.getOwnPropertyNames("http://ajar-target.gomix.me/stops");
       console.log(Object.keys(response));
        
    
for( var i=0; i<response.length;i++){
        $("#info").append(response[i].name+" : "+response[i].status + "<br>");
}
        
});
        
});


