(function(){
    "use strict";
    function nueva(){
        //creamos la capa
        let capa = document.createElement("article");
        //creamos el contenido de la capa 
        let texto = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi rerum, consequuntur, dolore perferendis facere alias soluta totam voluptatibus quaerat quasi nesciunt distinctio modi id eius voluptas a blanditiis repellendus.");
        //colocamos el texto dentro de la capa
        capa.appendChild(texto);
        //añadimos la capa al final del contenedor
        document.getElementById("contenedor").appendChild(capa);

    }
    //eventos
    document.querySelectorAll("header")[0].addEventListener("click", nueva)
})();