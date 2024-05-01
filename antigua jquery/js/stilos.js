$(function(){
    "use strict";
    $("#boton_subir a").click(function (e) { 
        e.preventDefault();
        $(document).scrollTop();
        $("html").animate({
            "scroll-top":0,
            
            
        },500);    
    });
    //mostrar el boton para subir cuando sea necesario
    $(document).scroll(function () { 
        if ($(document).scrollTop()) {
            $("#boton_subir").css("display","block");
        }else{
            $("#boton_subir").css("display","none");
        }
    });
    
});