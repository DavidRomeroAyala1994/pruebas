(function(){
    "use strict";
    //reemplazar una capa por otra
    function cambiarcapa() {
        //creamos la capa 
        let capa = document.createElement("div");
        //creamos contenido para la capa
        let texto = document.createTextNode("esta es la nueva capa");
        //llenamos la capa con el texto 
        capa.appendChild(texto);
        //reemplazar la capa1 por la capa nueva
        document.getElementsByTagName("body")[0].replaceChild(capa,document.getElementById("capa1"));
        capa.className='nueva';
    }
    //cambiar foto 
    function cambiarfoto() {
        //crear imagen
        let imagen =document.createElement('img');
        //creamos el contenido 
        let contenido= 'img/Lucy.GIF'
        //colocamos el contenido en la imagen
        imagen.setAttribute('src', contenido);
        //remplazamos la imagen
        let padre= document.getElementById("capa2");
        let hijo= document.querySelectorAll('#capa2 img');
        padre.replaceChild(imagen, hijo[0]);
    }
    //evento
    document.getElementById("botoncapa").addEventListener("click",cambiarcapa);
    document.getElementById("botonfoto").addEventListener("click",cambiarfoto);
})();