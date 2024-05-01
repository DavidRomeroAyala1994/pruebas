$(function(){
    "use strict";
    //jquery que cambie la foto de la capa imagen al situar el reton encima de la capa1
    $("#capa1").mouseover(function () { 
        $("#imagen img").attr("src", "img/2.jpg");
    });
    
    $("#capa1").mouseout(function () { 
        $("#imagen img").attr("src", "img/1.jpg");
    });
    //jquery que cambie el color del texto y el color de fondo de la capa2al pulsar un boton
    $("#boton").click(function (e) { 
        e.preventDefault();
        $("#capa2").css({
            "color":"lightgreen",
            "background":"teal",
            "font-family":"book antiqua",
            
        });
    });
    //jquery que cambia la transparencia de la capa3 al pasar el raton
    /*$("#capa3").mouseover(function () { 
        $("#capa3").css({
            
            "opacity": 0.5,
        });
    });
    
    $("#capa3").mouseout(function () { 
        $("#capa3").css({
            "opacity": 1,
            
        });
    });*/
    $("#capa3").mouseover(function () { 
        $(this).fadeTo(500, 0.5);
    });
    $("#capa3").mouseout(function () { 
        $(this).fadeTo(500, 1);
    });
});