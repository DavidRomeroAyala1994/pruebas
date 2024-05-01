$(function(){
    "use strict";
    //menu fijo en parte superior al hacer scroll
    $(document).scroll(function () { 
        if($(document).scrollTop()>550){
            $("nav").addClass("menu_fijo");
        }else{
            $("nav").removeClass("menu_fijo");
        }
    });
    //scroll con animacion, tanto para subir como para bajar
    $("article a").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            "scroll-top":0
        },1500);    
    });
    
    //efecto titulos article
    $("h3").mouseover(function () { 
        $(this).css({
            'font':'italic 24px bold ',
            'color': 'red'
        });
    });
    $("h3").mouseout(function () { 
        $(this).css({
            'font':' 26px "Century Gothic"',
            'color': 'cornflowerblue'
        });
    });
    //efecto en los titulos header 
    //h1
    $("h1").mouseover(function () { 
        $(this).css({
            'font':'italic 24px bold ',
            'color': 'blueviolet'
        });
    });
    $("h1").mouseout(function () { 
        $(this).css({
            'font':'italic 36px "Book Antiqua"',
            'color': 'cornflowerblue'
        });
    });

    //h2
    $("h2").mouseover(function () { 
        $(this).css({
            'font-size':'32px',
            'color': 'aqua'
        });
    });
    $("h2").mouseout(function () { 
        $(this).css({
            "font": '28px "Lucida Console"',
            'color': 'dodgerblue'
        });
    });
//formulario
    $("#enviar").click(function (e) { 
        if ($("#viaje").val()=="") {
            $("#viaje").next().show();
        }
        if ($("#nombre").val()=="") {
            $("#nombre").next().show();
        }
        if ($("#apellidos").val()=="") {
            $("#apellidos").next().show();
        } 
        if ($("#dirypoblacion").val()=="") {
            $("#dirypoblacion").next().show();
        } 
        let patron= /^[0-9|XYZxyz][-]?[0-9]{7}[-]?[a-zA-Z]$/;
        if(!patron.test($("#dni").val())){
            $("#dni").next().show();
        }
        let patron2= /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/;
        if(!patron2.test($("#tarjeta").val())){
            $("#tarjeta").next().show();
        }
    });
    $("#viaje").change(function (e) { 
        e.preventDefault();
        $(this).next().hide();
        
    });
    $("#nombre").keypress(function (e) { 
        $(this).next().hide();
    });
    $("#apellidos").keypress(function (e) { 
        $(this).next().hide();
    });
    $("#dirypoblacion").keypress(function (e) { 
        $(this).next().hide();
    });
    $("#dni").keypress(function (e) { 
        $(this).next().hide();
    });
    $("#tarjeta").keypress(function (e) { 
        $(this).next().hide();
    });
});