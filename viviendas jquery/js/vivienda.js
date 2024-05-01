$(function(){
    "use strict";
    $(document).scroll(function () { 
        if($(document).scrollTop()>550){
            $("nav").addClass("menu_fijo");
        }else{
            $("nav").removeClass("menu_fijo");
        }
    });
    
});