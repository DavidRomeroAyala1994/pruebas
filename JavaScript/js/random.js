(function(){
    "use strict";
    /* ESCRIBIR LA COMBINACIÓN GANADORA DE LA PRIMITIVA */
    /* DEBEMOS OBTENER 7 NÚMEROS ALEATORIOS ENTRE 1 Y 49 */
    for (let i = 1;i <= 7;i++)
    {
    document.write(Math.floor(Math.random()*50));
    document.write("<br>");
    }
})();