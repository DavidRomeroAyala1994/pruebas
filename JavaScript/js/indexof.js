(function(){
    "use strict";
   /*indexof sirve para buscar un valor en un array nosdice en que posicion se encuentra el valor buscado
   Creamos un array con nombres y lo mostramos pedir un nombre al usuario y si existe mostrar un menseje con ese nombre y sino existe mostrar un mensaje de no encontrado 
   */ 
    let nombres=["ana","manolo","fernando", "noelia","oscar","eva","jaime","dalia"];
    let nom= prompt("dime el nombre a buscar");
    let posicion=nombres.indexOf(nom);
    if (posicion>=0) {
        document.write(nom+" esta en la posicion "+posicion);
        
    }else{
        document.write(nom+" no esta dentro del array");
    }    
    //funcion includes devuelve true si encuentra el elemento y false si no 
    let encontrado = nombres.includes(nom);
    if (encontrado) {
        document.write("<br>"+nom+" esta en la posicion "+posicion);
    } else {
        document.write("<br>"+nom+" no esta dentro del array");
    }
    //creamos un array y lo llenamos con 5 numeros al azar entre 1 y 10*/
    let numeros=[];
    for (let i = 0; i <5; i++) {
        numeros[i]=Math.floor(Math.random()*11);
        
    }
    //mostramos el array
    document.write("<br>"+ numeros);
    //le pedimos un numero entre 1 y 10 al usuario y decimos si se encuentra dentro del array 
    let numero =parseInt(prompt("dame un numero "));
    let pos=numeros.indexOf(numero);
    if (pos>=0) {
        document.write("<br>"+numero+" esta en la posicion "+pos);
    } else {
        document.write("<br>"+numero+" no esta dentro del array");
    }

})();