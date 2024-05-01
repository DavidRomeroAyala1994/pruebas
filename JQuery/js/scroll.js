$(function(){
    "use strict";
    //cuando hacemos click sobre la capa1 ns muestra una ventana con la posicion n px de la pagina
    //para obtener la posicion enpx de la pagina se usa scrolltop()
    $("#capa1").click(function (e) { 
        e.preventDefault();
        alert($(document).scrollTop()+"px");
    });
    //cuando pulsan el boton volver subimos al inicio de la pagina con una animacion
    $("#volver").click(function (e) { 
        e.preventDefault();
      //  $("html").scrollTop(0);
        $("html").animate({
            "scroll-top": 0
            
        },1500);
    });
    //cuando pulsamos la flecha de subir vamos al inicio de la pagina con una animacion
    $("#subir").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            "scroll-top": 0
            
        },1500);
        
    });
    //mostrar la flecha de subir solo cuando sea necesaria
    $(document).scroll(function () { 
        if ($(document).scrollTop()>260) {
            $("#subir").css("display", "block");
        }else{
            $("#subir").css("display", "none");
        }
    });
    

});