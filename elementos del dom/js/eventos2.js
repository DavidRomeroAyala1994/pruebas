(function(){
    "use strict";
    //cambiamos el fondo de la capa texto al poner el raton sobre la imagen
    //ponemos un borde a la imagen al poner el raton sobre el texto
    //necesitamos 4 funciones para los cutro eventos
    //ponerfondo, quitarfondo, ponerborde, quitarborde
    function ponerfondo() {
        let capa = document.getElementById("texto");
        capa.style.background="lightgreen";

    }
    function quitarfondo() {
        let capa = document.getElementById("texto");
        capa.style.background="transparent";
        
    }
    function ponerborde() {
        let capa = document.getElementById("imagen");
        capa.style.border="4px groove maroon";

    }
    function quitarborde() {
        let capa = document.getElementById("imagen");
        capa.style.border="none";

    }
    document.getElementById("imagen").addEventListener("mouseover",ponerfondo);
    document.getElementById("imagen").addEventListener("mouseout",quitarfondo);
    document.getElementById("texto").addEventListener("mouseover",ponerborde);
    document.getElementById("texto").addEventListener("mouseout",quitarborde);
})();