//para declarar un arreglo: const nombre = [elementos] o linea 3
//const numeros = [];
let numeros = new Array();
numeros = [1, 3 , 13, 23, 532, 328, 123, 6865, 812, 213, 123];
//para imprimir un nuero 
//document.write(numeros[5]);
console.log(numeros.length);
//con .length sabemos el tamaño del arreglo
/*la letra i es una variable que se usa como contador en el for, cada vez que se realiza una ejecución, i va cambiando de valor, (de uno en uno por la expresión i++) si quiero que vaya de dos en dos se pone i+2 o de tres en tres i+3*/
//para imprimir todo el tamaño del arreglo:
for(let i = 0; i < numeros.length; i++ ) {
    document.write(`${numeros[i]}<br />`); //forma 1
    //forma 2 const numero = numeros[i];
    //document.write(numero + "<br>");
}