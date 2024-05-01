(function(){
    "use strict";
    //eventos de javaScript

    //evento que cambia el aspecto del texto al hacer click en el boton cambiar
    //evento que quita el color del texto cuando pulsa  el boton quitar
    function cambiar(){
        let texto=document.getElementsByTagName("p");
        texto[0].innerHTML="texto nuevo";
        texto[0].style.font="bold 24px verdana";
        texto[0].style.color="darkred";
    }
    function quitar() {
        let texto=document.getElementsByTagName("p");
        texto[0].innerHTML="texto ";
        texto[0].style.font="12px verdana";
        texto[0].style.color="black";
    }
    let boton = document.getElementById("cambiar");
    boton.addEventListener("click",cambiar);
    document.getElementById("quitar").addEventListener("click",quitar);
})();