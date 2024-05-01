(function () {
  "use strict";
  let poblaciones = ["alcañiz", "andorra", "calanda"];
  let num = poblaciones.length;
  document.write(num);
  //añadir al final
  poblaciones.push("alcorisa");
  document.write("<br>" + poblaciones);
  //añadir principio
  poblaciones.unshift("albalate");
  document.write("<br>" + poblaciones);
  //ordenar
  poblaciones.sort();
  document.write("<br>" + poblaciones);
  //unir
  let poblaciones2 = ["urrea", "samper", "hijar", "puebla"];
  poblaciones = poblaciones.concat(poblaciones2);
  document.write("<br>" + poblaciones);
  //ordenar
  poblaciones.sort();
  document.write("<br>" + poblaciones);
  //eliminar
  delete poblaciones[3];
  document.write("<br>" + poblaciones);
  //añadir varios elementos con splice
  poblaciones.splice(3, 0, "casteseras");
  document.write("<br>" + poblaciones);
  poblaciones[4] = "valdealgorfa"; //quitar coma molesta
  //eliminamos un elemento en la posicion 4
  poblaciones.splice(4, 1);
  document.write("<br>" + poblaciones);
  //remplazar un elemento
  poblaciones.splice(3,1,"rafales");
  document.write("<br>" + poblaciones);
  //recortar
  poblaciones=poblaciones.slice(2);
  document.write("<br>" + poblaciones);
  

})();
