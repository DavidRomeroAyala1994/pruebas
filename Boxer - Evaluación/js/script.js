$(function(){
    "use strict";
    $("nav .nav-link").click(function(){ 
        $("#menu").collapse("hide");
        
    });
    $(document).scroll(function(){ 
        $("#menu").collapse("hide");
        
    });

    $(".subir a").click(function (e) { 
        e.preventDefault();
        $(document).scrollTop();
        $("html").animate({
            "scroll-top":0,
        },500);    
    });
    //mostrar el boton para subir cuando sea necesario
    $(document).scroll(function () { 
        if ($(document).scrollTop()) {
            $(".subir").css("display","block");
        }else{
            $(".subir").css("display","none");
        }
    });
});