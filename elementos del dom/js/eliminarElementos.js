(function(){
    "use strict";
    function borrarli() {
        //guardamos el elemento padre en una variable
        let padre = document.getElementById("lista");
        //guardamos el ultimo hijo en una variable
        let hijo = padre.lastElementChild;
        //borramos el ultimo li
        padre.removeChild(hijo);
    }
    function borrartodo() {
        //guardamos el padre en una variable
        let padre=document.querySelectorAll("body");
        //guardamos el hijo en una variable
        let hijo=document.getElementById("lista");
        //eliminamos el hijo
        padre[0].removeChild(hijo);
    }
    document.getElementById("botonli").addEventListener("click", borrarli);
    document.getElementById("botontodo").addEventListener("click", borrartodo);
})();