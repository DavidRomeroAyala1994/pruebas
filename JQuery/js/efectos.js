$(function(){
    "use strict";
    // mostar/ocultar la capa persiana al poner el ratón en la cabecera
    $("#cabecera").mouseover(function(){
        $("#persiana").slideDown("slow");
    });
    $("#cabecera").mouseout(function(){
        $("#persiana").slideUp("slow");
    });
    // al hacer click en la capa1 cambia su opacidad al 0.4
    $("#capa1").click(function (e) { 
        e.preventDefault();
        $(this).fadeTo("slow", 0.4);
    });
    // al quitar el ratón de la capa1 cambia la opacidad a 1
    $("#capa1").mouseout(function (e) { 
        e.preventDefault();
        $(this).fadeTo("slow", 1);
    });
    // la capa2 aparece o desaparace al pulsar el botón
    $("input[type=button]:first").click(function (e) { 
        e.preventDefault();
        $("#capa2").fadeToggle(1000);
    });
    // la capa3 sube o baja al pulsar el botón 2
    $("input[type=button]:last").click(function (e) { 
        e.preventDefault();
        $("#capa3").slideToggle(1000);
    });
});