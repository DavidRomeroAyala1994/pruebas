(function(){
    "use strict";
    //uso de los nodos del dom
    /*
    herramientas para localizar elementos del dom
    parentnode
    children
    firstelementchild
    lastelementchild
    nexElementSibling
    previous elementSibling*/

    //parentnode
    //poner un color de fondo al padre del h1
    document.querySelectorAll('h1')[0].parentNode.style.background="lightpink";
    //children
    //ponemos todos los elementos li en un children y les ponemos un color diferente
    let lista= document.getElementsByTagName("ul");
    for (let i = 0; i < lista[0].children.length; i++) {
        lista[0].children[i].style.color="lightgreen";
        
    }
    lista[0].firstElementChild.style.textDecoration="underline";
    lista[0].lastElementChild.style.textDecoration="line-through";
    document.getElementById('logo').nextElementSibling.style.border="5px  groove blue";
    document.getElementById("direcion").previousElementSibling.style.borde='5px groove orange';
})();