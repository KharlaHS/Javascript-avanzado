/* Función 
Es unbloqque de código reutilizable.
Puede tener o no parametros de entrada.
Puede devolver o no un valor
*/

function sumar(numero1, numero2) {
    //operaciones o código a ejecutar
    //para devolver un valor se tiene que utilizar la palabra return seguido de la operación y debe ser la última instrucción de la función.
    return numero1 + numero2; // se necesita el return porque cada vez que se utiliza la funcion devovera su valor sólo declarada dentro de la funcion. return no siempre es necesario en la funcion
    console.log(" Hola desde la función ");
}

function restar(numero1, numero2) {

    document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br />`)
}

let numero1 = parseInt(prompt(" Número 1 "));
let numero2 = parseInt(prompt(" Número 2 "));
let suma = sumar(numero1, numero2);
//(acento invertido o backstick) ` se utiliza para esta funcionalidad: (template string) habilitan el uso de texto o string y tambien el uso de js con el simbolo de $()
document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br />`);
restar(numero1, numero2);
// su equivalente concatenado sería: se utiliza el anterior por practicidad
document.write(" La suma de " + numero1 + " y " + numero2 + " es " + suma);