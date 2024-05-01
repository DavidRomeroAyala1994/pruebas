$(function(){
    "use strict";
    //Boton padre
    $("#boton1").click(function (e) { 
        e.preventDefault();
        $("#elemento").parent().addClass("padre");
    });
    //boton hijos
    $("#boton2").click(function (e) { 
        e.preventDefault();
        $("#elemento").children().addClass("hijos");
    });
    //boton descendientes
    $("#boton3").click(function (e) { 
        e.preventDefault();
        $("#elemento").find("*").addClass("descendientes");
    });
    //boton ancestros
    $("#boton4").click(function (e) { 
        e.preventDefault();
        $("#elemento").parents().addClass("ancestros");
    });
    //boton hermanos
    $("#boton5").click(function (e) { 
        e.preventDefault();
        $("#hijo1").siblings().addClass("hermanos");
    });
});