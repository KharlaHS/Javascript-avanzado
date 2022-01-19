/*Código sincrono */

let variableSincrona;
variableSincrona =10 * 3;
console.log(variableSincrona);

/* Código asincrono */

let variableAsincrona;
//setTimeout: ejecuta el código que este dentro despues de un tiempo determinado
setTimeout(() => {
    variableAsincrona = 10 * 3;
    console.log(variableAsincrona);
}, 2000);//2000 milisegundos

/*Peticiones HTTP con fetch (hacer peticiones a un servidor) */
//JSON = JavaScript Object Notation, http = protocolo de transferencia de hipertexto


