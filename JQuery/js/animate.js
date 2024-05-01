$(function(){
    "use strict";
    //la capa1 cambia de posicion, de tamaño de texto y de color de fondo al hacer click sobre ella
    $("#capa1").click(function (e) { 
        e.preventDefault();
        $(this).animate({
            "margin-left":"500px",
            "font-size":"20px",
            "background-color":"red"            
        },1000);
    });
    //la capa2 cambia de posicion y desaparece al hacer click sobre ella
    $("#capa2").click(function (e) { 
        e.preventDefault();
        $(this).animate({
            "left":"50%",
            "opacity":0,
                        
        },1000);
    });
    //la capa3 se mueve hacia abajo 70 pixeles y crece 50 pixeles de ancho y alto
    $("#capa3").click(function (e) { 
        e.preventDefault();
        $(this).animate({
            "margin-top":"+=70px",
            "width": "+=50px",
	        "height": "+=50px"
                        
        },1000);
    }); 

    //la capa4 hace 4 movimientos cuando hacen click en ella
    $("#capa4").click(function (e) { 
        e.preventDefault();
        $(this).animate({ "left":"+=600px" },1000);
        $(this).animate({ "top":"-=200px" },1000);
        $(this).animate({ "left":"-=200px" },1000);
        $(this).animate({ "top":"-=200px" },1000);
    }); 
});