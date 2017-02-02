// JavaScript File
/* global $ */
$(document).ready(function() {




  $.getJSON("https://ajar-target.gomix.me/status", function(response) {
    //  console.log(response);

    //var stops= Object.getOwnPropertyNames("http://ajar-target.gomix.me/stops");
    console.log(Object.keys(response));
      var listOfStops = [];
        var listOfTrains=[];
       for (var i=0; i<response.length; i++){
        
         listOfTrains.push(response[i].name);
        
         
       }
       $("#userButton").click(function(){

       for(i=0;i<listOfTrains.length;i++){
        
         if( listOfTrains[i].includes($("#userSearch").val().toUpperCase()) ){
          console.log(response[i].name+":"+response[i].status);
             $("#info").append(response[i].name + " : " + response[i].status + "<br>");
         } 
       }
       });
  



    
    
     console.log(listOfTrains);









  });

});
