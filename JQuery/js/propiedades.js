$(function(){
    "use strict";
    //cambiamos el texto del primer párrafo
    $("p:first").text("¡Hola, mundo!");
    //cambiamos el contenido de la capa1 por nuevo código HTML
    $(".capa1").html("<h1>TÍTULO PRINCIPAL</h1>");
    //cambiamos los estilos de la capa1
    $(".capa1").css("font-family", "castellar");
    $(".capa1").css({
        "color" : "darkred",
        "background" : "lightblue"
    });
    //cambiamos el atributo id de las capas
    $(".capa1").attr("id", "Nombre1");
    $("#capa2").attr("id", "Nombre2");
    //cambiamos el ancho de la capa2
    $("#Nombre2").width(600);
});