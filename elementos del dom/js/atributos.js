(function(){
    "use strict";
    //mostrar todos los elementos li del dom 
    let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        document.write(li[i].innerHTML+"<br>");
        
    }
    //mostrar todos los elementos del h2 del dom
    let h2 = document.querySelectorAll("h2");
    for (let i = 0; i < h2.length; i++) {
        document.write(h2[i].innerHTML+"<br>");
        
    }
    //cambiar el texto del h1
    let h1 = document.querySelectorAll("h1");
    h1[0].innerHTML="hello world";
    //cambiar el color de fondo de la capa 1
    let capa1 = document.querySelectorAll("#capa1");
    //capa1[0].style.background= "teal";
    capa1[0].setAttribute("style","background : teal");

    //cambiar color de texto h1
    h1[0].style.color="orange";
    //centrar la imaden en la capa2
    let imagen = document.querySelectorAll("#capa2 img");
    /*imagen[0].style.display="block";
    imagen[0].style.margin="0 auto";*/

    imagen[0].setAttribute("style","margin:0 auto; display:block;");
    //le ponemos un nombre al ul
    let ul=document.querySelectorAll("ul");
    ul[0].setAttribute("id","enlaces");

    //cambiar el texto de los elementos con la clase verde
    let verdes=document.querySelectorAll(".verde");
    verdes[0].innerHTML="texto nuevo";

    //quitar la clase verde al parrafo con setAttribute
    for (let i = 0; i  < verdes.length; i++) {
        verdes[i].setAttribute("class","");
        
    }
    //cambiamos la foto de la capa2 por lucy
    imagen[0].setAttribute("src","img/Lucy.gif");
    //cambiamos el primer enlace de los li y ponemos w3schools
    let enlace = document.querySelectorAll("ul li a");
    enlace[0].setAttribute("href","https://www.w3schools.com");
    enlace[0].setAttribute("target","_blank");
    //anular cambiar pagina de estilos
    let estilo =document.querySelectorAll("link");
    estilo[0].setAttribute("href","");
})();