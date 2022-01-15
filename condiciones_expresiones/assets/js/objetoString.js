let cadena1 = "hola";
console.log(cadena1);

let cadena2 = new String("Adiós"); //objeto String
console.log(cadena2);

//includes() busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase().includes("a"));
// .toLowerCase o toUpperCase convierte a minusculas o mayuculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

//cohersión y conversión.

//cohersión - JavaScript convierte en automático un tipo de dato en otro.
console.log(cadena1.toLowerCase());

/* Función que recibe una palabra y la regresa invertida */

let palabra = "Hola Mundo";
let arreglo = palabra.split("");//no poner nada mas que las "" en los parentesis
console.log(arreglo);

console.log(arreglo.reverse().join(""));

function invertirPalabra(cadena){
    let arreglo = cadena.split(""); //se está convirtindo la cadena en un arreglo
    arreglo.reverse();//invierte el arreglo
    let cadenaInvertida = arreglo.join("");
    return console.log(cadenaInvertida);
}
invertirPalabra("Generation");