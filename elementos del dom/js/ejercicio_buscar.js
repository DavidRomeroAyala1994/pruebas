(function(){
    "use strict";
    //cambiar algo del header - borde
    let cabecera = document.querySelectorAll("header");
    cabecera[0].style.border = "5px solid gold";
    //let cabecera = document.getElementsByTagName("header");

    //cambiar algo del logotipo - texto
    let logo=document.getElementById("logotipo");
    logo.innerHTML="Texto nuevo";
    // let logo= document.querySelectorAll("#logotipo");
    //logo[0].innerHTML="Texto nuevo";

    //cambiar algo de los botones - color de fondo
    let botones=document.getElementsByClassName("boton");
    for (let i = 0; i < botones.length; i++) {
        botones[i].style.background="darkgrey";
        
    }
    //let botones=document.querySelectorAll(".boton");
})();