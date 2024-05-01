$(function(){
    "use strict";
    // CUANDO HACEN CLICK EN LA CAPA1 DESAPARECE LENTAMENTE
    $("#capa1").click(function(){
        $(this).fadeOut(1000);
    });
    // CUANDO HACEN CLICK EN CAPA2 CAMBIA EL COLOR DE FONDO
    $(".capa2").click(function(){
        $(this).css(
            {
                "background-color":"teal",
                "color":"yellow"
            });
      });
    // CUANDO HACEN CLICK EN H1 CAMBIA EL TIPO DE LETRA Y EL COLOR
    $("h1").click(function (e) { 
        e.preventDefault();
        $(this).css({
            "font-family":"verdana",
            "font-size":"40px",
            "color":"maroon"
        });
        
    });
});