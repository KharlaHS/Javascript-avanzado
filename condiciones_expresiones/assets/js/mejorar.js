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