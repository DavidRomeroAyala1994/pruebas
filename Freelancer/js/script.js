$(function(){
    "use strict";
    //CERRAMOS EL MENÚ DEL MÓVIL AL PULSAR EN ÉL
    $(".nav-link").click(function(){
        $("#menu").collapse("hide");
    });
    //CAMBIAMOS EL TAMAÑO DEL MENÚ AL HACER SCROLL
    $(window).scroll(function(){
        if ($(document).scrollTop() > 100)
        {
            $("nav").addClass("nav-reducido");
        }
        else
        {
            $("nav").removeClass("nav-reducido");
        }
    });
});