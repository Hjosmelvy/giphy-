// JavaScript File
/* global $ */
$(document).ready(function() {


    var userDemand="stops";
    
   $.getJSON("http://ajar-target.gomix.me/"+userDemand,function(response) {
        console.log(response);
        
        var stops= Object.keys("http://ajar-target.gomix.me/stops");
        
        
});
});
