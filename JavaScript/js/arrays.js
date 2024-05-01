(function(){
    "use strict";
   //mostrar los nombres de personas de un array 
   const nombres =["ana","dani","mateo","elena"];
   for (let i = 0; i < nombres.length; i++) {

    document.write(nombres[i]+"<br>");
    
   }
   //Guardamos en un array 3 numeros que escribe el usuario
    const numeros =[];
    for (let i = 0; i < 3; i++) {
        numeros[i]= parseFloat(prompt("escribe un numero"));
        
    }   
    for (let i = 0; i  < numeros.length; i++) {
        
        document.write(numeros[i]+"<br>");
    }
    //script que guarda 4 nombres que introduce en un array 
    const nombres2 =[];
    for (let i = 0; i <= 3; i++) {
        nombres2[i]= prompt("escribe un nombre");
        
    }   
    for (let i = 0; i  < nombres2.length; i++) {
        
        document.write(nombres2[i]+"<br>");
    }
    //mostrar el array anterior ordenado
    nombres2.sort();
    for (let i = 0; i  < nombres2.length; i++) {
        
        document.write(nombres2[i]+"<br>");
    }
    
})();