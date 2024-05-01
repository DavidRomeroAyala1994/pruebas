$(function(){
    "use strict";
    //validacion de un formulario
    $("#enviar").click(function (e) { 
        e.preventDefault();
        if ($("#nombre").val()=="") {
            $("#nombre").next().show();
        }    
        if ($("#edad").val()<18 ||$("#edad").val()>100 || $("#edad").val()=="") {
            $("#edad").next().show();
        }
        let patron= /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        if(!patron.test($("#email").val())){
            $("#email").next().show();
        }
        if ($("#idioma").val()=="") {
            $("#idioma").next().show();
        }
        if(!$("#condiciones").is(":checked")){
            $(".error").eq(4).show();
        }
    });
    //ocultamos mensajes de error cuando el usuario intenta rectificar en las casillas
    $("#nombre").keypress(function (e) { 
        $(this).next().hide();
    });
    $("#edad").change(function (e) { 
        e.preventDefault();
        $(this).next().hide();
    });
    $("#email").keypress(function (e) { 
        $(this).next().hide();
    });
    $("#idioma").change(function (e) { 
        e.preventDefault();
        $(this).next().hide();
    });
    $("#condiciones").change(function (e) { 
        e.preventDefault();
        $(this).next().next().hide();
    });
});