(function(){
    "use strict";
    //cambiar el texto de la capa logo por "importaciones amparito"
    let logo = document.querySelectorAll("#logo");
    logo[0].innerHTML="importaciones amparito";
    //poner negrita todos los textos de los botones
    let botones = document.querySelectorAll("ul li a");
    for (let i = 0; i < botones.length; i++) {
        botones[i].setAttribute("style","font-weight: bold")
        
    }

    //cambiar el color de fondo del nav
    let nav = document.querySelectorAll("nav");
    nav[0].setAttribute("style","background: blue;")
    //cambiar el tipo y tamaño de letra de los articulos
    let letra= document.querySelectorAll(".color");
    for (let i = 0; i < letra.length; i++) {
        
        letra[0].setAttribute("style","font: 12px cambria, serif")
        
    }
    //añadir una clase a los articulos llamada .justificar
    let clase=document.querySelectorAll("article");
    for (let i = 0; i < clase.length; i++) {
        clase[i].className=".justificar";
        
    }
    //centrar el contenido de la clase .bloque
    let con=document.querySelectorAll(".bloque");
    con[0].setAttribute("style","text-align: center");
    //poner un borde a la imagen
    let imagen=document.querySelectorAll("img");
    imagen[0].setAttribute("style","border:6px solid #231b1c");
    //poner una clase al ultimo h2 llamada .resaltado
    let clase2=document.querySelectorAll("h2:last-of-type");
    
        clase2[0].className+="resaltado";
        
    
    //poner sombra a los textos de los botones
    let textos=document.querySelectorAll("ul li a");
    for (let i = 0; i < textos.length; i++) {
        textos[i].setAttribute("style","text-shadow: 2px 2px #231b1c;");
        
    }
    //cambiar el tipo de letra y el tamaño del footer
    let footer= document.querySelectorAll("footer");
    for (let i = 0; i < footer.length; i++) {
        
        footer[i].setAttribute("style","font: 18px cambria, serif");
        
    }
    //cambiar la imagen del aside por m01.jpeg
    imagen[0].setAttribute("src","img/m01.jpeg");
    imagen[0].style.width="90%"
})();