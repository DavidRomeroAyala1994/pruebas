(function(){
    "use strict";
    //cambiamos el mensaje segun idioma
    function mensaje() {
        if(document.formulario.es.checked){
            document.getElementById("mensaje").innerHTML="Bienvenido";
        }
        if(document.formulario.in.checked){
            document.getElementById("mensaje").innerHTML="Welcome";
        }
        if(document.formulario.fr.checked){
            document.getElementById("mensaje").innerHTML="bienvenue";
        }
    }
    //activamos las cajas de texto segun el valor seleccionado en el desplegable
    function contacto() {
        switch (document.formulario.contacto.value) {
            case "email":
                document.formulario.email.disabled=false;
                document.formulario.telefono.disabled=true;
                document.formulario.carta.disabled=true;
                break;
        
            case "telefono":
                document.formulario.telefono.disabled=false;
                document.formulario.email.disabled=true;
                document.formulario.carta.disabled=true;
                break;
            case "carta":
                document.formulario.carta.disabled=false;
                document.formulario.email.disabled=true;
                document.formulario.telefono.disabled=true;
                break;
            case"":
                document.formulario.email.disabled=true;
                document.formulario.telefono.disabled=true;
                document.formulario.carta.disabled=true;
                break;
        }
    }
    //eventos
    document.formulario.es.addEventListener("click",mensaje);
    document.formulario.fr.addEventListener("click",mensaje);
    document.formulario.in.addEventListener("click",mensaje);
    document.formulario.contacto.addEventListener("click",contacto)
})();