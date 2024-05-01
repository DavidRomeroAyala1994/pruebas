(function(){
    "use strict";
    //cambiamos el color de fondo de el area de texto al colocarnos dentro 
    function cambiarfondo() {
        let caja = document.formulario.comentario;
        caja.style.backgroundColor="gold";
    }
    //cambiamos borde, fondo y tipo de letra al pulsar una tecla en la caja nombre
    function cambiarestilo() {
        let caja=document.formulario.nombre;
        caja.style.border="thin solid blue";
        caja.style.background="gold";
        caja.style.fontFamily="verdana";
        //caja.setAttribute("style","border: thin solid blue; background:gold; font-family:verdana;")
    }
    //aparece dentro del area de texto un mensaje cuando seleccionamos el sexo
    function mensaje() {
        let opcion = document.formulario.sexo_0;
        if (opcion.checked) {
            document.formulario.comentario.setAttribute("placeholder","eres mujer");
        } 
        let opcion2 = document.formulario.sexo_1;
        if (opcion2.checked) {
            document.formulario.comentario.setAttribute("placeholder","eres hombre");
        } 
    }
    //activamos la caja de email cuando se maraca la casilla de verificacion
    function activaremail() {
        if(document.formulario.email.checked){
            document.formulario.direccion.disabled=false;
            document.formulario.direccion.focus();
        }else{
            document.formulario.direccion.disabled=true;
            document.formulario.direccion.value="";
        }

    }
    //eventos
    document.formulario.comentario.addEventListener("focus",cambiarfondo);
    document.formulario.nombre.addEventListener("keypress",cambiarestilo);
    document.formulario.sexo_0.addEventListener("click",mensaje);
    document.formulario.sexo_1.addEventListener("click",mensaje);
    document.formulario.email.addEventListener("click",activaremail);
    
})();