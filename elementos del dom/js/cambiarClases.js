(function(){
    "use strict";
    function azul() {
        let capa=document.getElementById("capa1");
        capa.className="azul"
    }
    function rojo() {
        let capa=document.getElementById("capa1");
        capa.className="rojo"
    }
    function verde() {
        let capa=document.getElementById("capa1");
        capa.className="verde"
    }
    document.getElementById("rojo").addEventListener("click",rojo);
    document.getElementById("azul").addEventListener("click",azul);
    document.getElementById("verde").addEventListener("click",verde);
})();