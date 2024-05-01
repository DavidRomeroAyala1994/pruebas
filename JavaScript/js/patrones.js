(function(){
    "use strict";
   //pedimos al usuario un numero de telefono de 9 cifras y lo comprobamos con un patron
   let telefono=prompt("dame el nº de telefono");
    let patron=/^[0-9]{9}$/;
    if (patron.test(telefono)) {
        document.write("el telefono es correcto");
    } else {
        document.write("el telefono NO es correcto");
    }
    //el usuario escribe un codigo postal  y comprobamos que sea correcto
    let patron2=/^[0-9]{5}$/;
    let codigo = prompt("dame un codigo postal");
    if (patron2.test(codigo)) {
        document.write("<br> el cp es correcto");
    } else {
        document.write("<br> el cp NO es correcto");
    }
})();