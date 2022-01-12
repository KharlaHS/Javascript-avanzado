let nombre = "Karla Diana";
let edad = 24;
let tienesTrabajo = false;
let variableNull = null;
let variableUndefined;


console.log(typeof(nombre)); //string o cadenas
console.log(typeof(edad)); //number
console.log(typeof(tienesTrabajo)); //Boolean
console.log(typeof(variableNull)); //null
console.log(typeof(variableUndefined)); //undefined
//=== operador estricto compara que el valor y los tipos de datos sean iguales
console.log(variableNull === variableUndefined)
console.log("1" === 1);
console.log(0 === false);
//siemre que se concatena cualquier tipo de dato con un string, el resultado siempre es string
console.log(typeof(10 + 10)); // number
console.log(typeof("10" + 10)); // string
//parseInt para convertir un texto a un número
console.log(parseInt(" 12 "));

//convertir un numero a texto o string se utiliza:
let numero = 10;
console.log(numero.toString());