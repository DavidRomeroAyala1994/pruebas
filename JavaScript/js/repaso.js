(function () {
  "use strict";

  //crear un array de 4 elementos con nombres de frutas que pediremos al usuario
  let frutas = [];
  for (let i = 0; i < 4; i++) {
    frutas[i] = prompt("indica una fruta");
  }
  document.write("<br>1" + frutas);
  //añadir piña al final del array
  frutas.push("piña");
  document.write("<br>2" + frutas);
  //añadir cereza al principio del array
  frutas.unshift("cereza");
  document.write("<br>3" + frutas);
  //ordenar el array
  frutas.sort();
  document.write("<br>4" + frutas);
  //crear un array nuevo con uva, pera , limon llamado frutas2
  let frutas2 = ["uva", "pera", "limon"];
  document.write("<br>5" + frutas2);
  //unir los dos arrays
  frutas=frutas.concat(frutas2);
  document.write("<br>6" + frutas);
  //eliminar el ultimo elmento del array
  frutas.pop();
  document.write("<br>7" + frutas);
  //eliminar el primer elemento del array
  frutas.shift();
  document.write("<br>8" + frutas);
  //eliminar el elemento numero 3 con splice
  frutas.splice(3, 1);
  document.write("<br>9" + frutas);
})();
