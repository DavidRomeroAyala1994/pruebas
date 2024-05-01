(function(){
    "use strict";
    //escribimos los numeros hasta una cifra que escribe el usuario 
    let num = parseInt(prompt("dame el numero final"));
    let i=1;
    while (i<= num) {
        document.writeln(i+"<br>");
        i++;
    }

    //le pedimos numeros al usuario hasta que introduzca un 4
    let cifra = 0;
    while (cifra != 4) {
        cifra= parseInt(prompt("dame una cifra"));
    }
    document.writeln("por fin has puesto el 4");

    //el script pedira numeras al usuario y los sumara hata que la suma de los valores introducidos sea mayor de 100
    let suma= 0;
    while (suma<=100) {
        suma=suma + parseInt(prompt("dame un numero"));
        
    }
    document.writeln("por fin llegamos a cien. la suma es:"+suma);

    //le pedimos al usuario un numero minimo y uno maximo y mostramos todos los numeros entre esos dos
    let min=parseInt(prompt("dame un minimo"));
    let max=parseInt(prompt("dame un maximo"));
    while(min<=max){
        document.write(min+"<br>");
        min++;
    }
})();