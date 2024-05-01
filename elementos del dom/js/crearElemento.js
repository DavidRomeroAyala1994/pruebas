(function(){
    "use strict";
    function crear() {
        //crear elemento parrafo
        let parrafo= document.createElement("p");
        //creamos el contenido para el parrafo nuevo
        let texto = document.createTextNode("nuevo parrafo");
        //colocamos el texto dentro del parrafo
        parrafo.appendChild(texto);
        //situamos el parrafo al final de la capa 
        document.getElementById("capa1").appendChild(parrafo);
    }
    document.getElementById("boton").addEventListener("click",crear);
    
})();