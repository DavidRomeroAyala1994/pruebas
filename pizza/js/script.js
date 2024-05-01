$(function(){
    "use strict";
    $("nav .nav-link").click(function(){ 
        $("#menu").collapse("hide");
        
    });
    $(document).scroll(function(){ 
        $("#menu").collapse("hide");
        
    });
    
});