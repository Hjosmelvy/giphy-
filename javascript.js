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
             $("#info").append("<h4 id='delayInfo'> <strong>"+ response[i].name + " : " + response[i].status + "</strong> </h1> <br>");
         } 
       }
       });
  
     console.log(listOfTrains);
  });

});

$("#userSearch").keyup(function(event){
    if(event.keyCode === 13){
        $("#userButton").click();
    }
});