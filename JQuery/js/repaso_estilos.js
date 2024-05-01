$(function(){
    "use strict";
    $("#bgrande").click(function (e) { 
        e.preventDefault();
        $("#capa1").addClass("grande");
        $("#capa1").removeClass("pequeno");
    });
    $("#bpequeno").click(function (e) { 
        e.preventDefault();
        $("#capa1").addClass("pequeno");
        $("#capa1").removeClass("grande");
    });
    $("#bverdana").click(function (e) { 
        e.preventDefault();
        $("#capa1").addClass("verdana");
        $("#capa1").removeClass("times");
    });
    $("#btimes").click(function (e) { 
        e.preventDefault();
        $("#capa1").addClass("times");
        $("#capa1").removeClass("verdana");
    });
    $("#bquitarfuente").click(function (e) { 
        e.preventDefault();
        $("#capa1").removeClass("verdana times");
    });
    $("#bcolor").click(function (e) { 
        e.preventDefault();
        $("#capa1").toggleClass("color");
    
    });
});