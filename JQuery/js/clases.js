$(function(){
    "use strict";
    // BOTÓN CLARO: fondoclaro textoazul
    $("#claro").click(function (e) { 
        e.preventDefault();
        $("div").addClass("fondoclaro textoazul");
        $("div").removeClass("fondooscuro textoblanco");        
    });
    // BOTÓN OSCURO: fondooscuro textoblanco
    $("#oscuro").click(function (e) { 
        e.preventDefault();
        $("div").removeClass("fondoclaro textoazul");
        $("div").addClass("fondooscuro textoblanco");        
    });
    //BOTÓN FINO: bordefino
    $("#fino").click(function (e) { 
        e.preventDefault();
        $("div").addClass("bordefino");
        $("div").removeClass("bordemedio");       
    });
    //BOTÓN MEDIO: bordemedio
    $("#medio").click(function (e) { 
        e.preventDefault();
        $("div").removeClass("bordefino");
        $("div").addClass("bordemedio");       
    });
    //BOTÓN BORRAR: Quita todas las clases
    $("#borrar").click(function (e) { 
        e.preventDefault();
        $("div").removeClass();
    });
    
});