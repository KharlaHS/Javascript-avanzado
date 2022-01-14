let numeros = [1, 3 , 13, 23, 532, 328, 123, 6865, 812, 213, 123];
/*ForEach(); en este caso function desechable o anonima.
el (" , ") es para que no se muestre hacia abajo sino que se separan por comas , */ 
/*numeros.forEach ((elemento,) => {
    document.write(elemento + " , ");
});*/
numeros.forEach(function (elemento) {
    document.write(elemento + " , ");
});
/*lo de arriba es una equivalencia de:
for(let i = 0; i < numeros.length; i++ ) {
    document.write(`${numeros[i]}<br />`);
*/
/*Map crea un arreglo dentro de otro arreglo */

let numero2 = numeros.map(function(elemento){
    return elemento * 2; //el * 2 crea un arreglo mltipliado por 2 o para un 10% de descuento * 0.90
});

document.write("<br>" + numero2 + "<br>");


/*let frutas = ["mango", "uva", "piña"];
let frutas2 = frutas;

document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas + "<br>");

frutas2.push("pera");
document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas + "<br>");*/

/*let frutas = ["mango", "uva", "piña"];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});

document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas2 + "<br>");

frutas2.push("pera");
document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas2 + "<br>");
*/

/*includes() se utiliza para saber si incluye un elemento o no*/
document.write("<br>" + numeros.includes(328) + "<br>");
/* .filter hace un filtro, recorre cada uno de los elementos dada una condición, la verifica y lo agrega a al arreglo */
let numerosPares = numeros.filter((elemento) =>{
    /*if (elemento % 2 == 0) {
        return true;
    } else {
        return false;
    }*/
    /*console.log(elemento % 2 == 0);*/
    /*return elemento % 2 == 0;*/

    if(elemento > 10) {
        return true;
    }
});

document.write("<br>" + numerosPares + "<br>");

let frutas = ["Mango", "Uva", "Piña", "Mandarina", "Manzana", "Agucate", "Sandia"];

let frutasFiltro = frutas.filter((fruta) => {
    /*if (fruta.includes("m") == true ) {
        return true;
    }*/
    /* toLowerCase hacee que las palabras esten en minusculas, toUpperCase las hace mayusculas
 */
    return fruta.toLowerCase().includes("m");
});

document.write("<br>" + frutasFiltro + "<br>");

/*Sort: (modifica el arreglo original) ordena los elementos >>PERO NO LO USES<< por su comportamiento */
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7]

/*document.write("<br>" + otrosNumeros.sort() + "<br>");*/

/* Reverse: invierte el orden de los elementos en un arreglo */
document.write("<br>" + numeros.reverse() + "<br>");

/* Find: devulve un sólo elemento (el primero que encuentre que cumpla con la condición) */
let frutaEncontrada = frutas.find((elemento) =>{
    return elemento.toLowerCase().includes("ma"); 
});

document.write("<br>" + frutaEncontrada + "<br>");