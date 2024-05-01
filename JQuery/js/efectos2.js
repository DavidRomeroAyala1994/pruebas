$(function(){
    "use strict";
    // Mostar/Ocultar la capa texto cuando hacemos click en la capa título
    // Usando slideToggle
    $("#titulo").click(function (e) { 
        e.preventDefault();
        $("#texto").slideToggle(1500);
    });
    // Aparece/Desaparece la capa masinfo al hacer click en la capa info
    // Usando fadeToggle
    $("#info").click(function (e) { 
        e.preventDefault();
        $("#masinfo").fadeToggle(1000);
    });
    // Mostar/Ocultar la capa leermas cuando ponemos el ratón sobre la capa leer
    // Usando css
    $("#leer").mouseover(function () { 
        $("#leermas").css("display", "block");
    });
    $("#leer").mouseout(function () { 
        $("#leermas").css("display", "none");
    });
});