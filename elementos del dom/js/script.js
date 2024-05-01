(function(){
    "use strict";
    //herramientas para buscar elementos en el dom
    /*metodos para buscar elementos:
    -buscar elemento por su id
    buscar elemento por su clase
    buscar elemento por su etiqueta
    buscar elemento por su css
    */
    /*guardamos en una variable la capa 1*/
    let capa= document.getElementById("capa1");
    //vamos a cambiar el color del texto de la capa
    capa.style.color="red";
    //guadamos en una variable la etiqueta h1
    let titulo=document.getElementsByTagName("h1");
    //cambiamos el texto de la etiqueta
    titulo[0].innerHTML = "hello world"; 
    //guardamos en una variable todos los elementos de la clase verde
    let verde = document.getElementsByClassName("verde");
    //cambiamos el color de fondo del primer elemento con la clase verde
    verde[0].style.background="lightblue";
    //buscamos un elemento como si fuera css
    let elementocss=document.querySelectorAll("article h2");
    //cambiamos el tipo de letra del elemento anterior
    elementocss[0].style.font="14px Verdana";
    //cambiamos el color de la letra de todos los articles
    let articulos=document.querySelectorAll("article");
    for (let i = 0; i < articulos.length; i++) {
        articulos[i].style.color="green";
        
    }
})();