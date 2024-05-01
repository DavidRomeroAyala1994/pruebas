(function(){
    "use strict";
    //cambiamos la clase de la capa azul
    let capa = document.querySelectorAll(".azul");
    capa[0].className = "verde";
    //cambiamos la clase marron por la calse rojo
    capa = document.querySelectorAll(".marron");
    capa[0].className = "rojo";
    //ponemos la clase azul a la capa que no tiene
    capa = document.querySelectorAll("div:first-of-type");
    capa[0].className="azul";
    //quitamos todas las clases de la carpeta roja
    capa = document.querySelectorAll(".rojo");
    capa[0].className="";
    //añadimos la clase texto_amarillo a la primera capa
    capa = document.querySelectorAll("div");
    capa[0].className="texto_amarillo";
    //ponemos la clase marron y la clase texto_amarillo a la ultima capa
    capa = document.querySelector("div:last-of-type");
    capa[0].className="marron texto_amarillo";
})();