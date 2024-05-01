$(function(){
    "use strict";
    //ocultamos la capa la hacer  click en ella
    $("#capa1").click(function (e) { 
        e.preventDefault();
        $(this).hide(500);
    });
    //mostramos la capa al hacer click en el boton
    $("#boton").click(function (e) { 
        e.preventDefault();
        $("#capa1").show(500);
    });
    //cambiamos el contenido de la capa al pasar por encima
    $("#capa2").mouseover(function () { 
        $(this).text("hola mundo");
    });
    $("#capa2").mouseout(function () { 
        $(this).text("hello world");
    });
    //cambiamos el aspecto  de una capa al hacer doble click en ella
    $("#capa3").dblclick(function (e) { 
        e.preventDefault();
        $(this).css({
            "color":"lightgreen",
            "background":"teal",
            "font-family":"book antiqua",
            
        });
    });
});