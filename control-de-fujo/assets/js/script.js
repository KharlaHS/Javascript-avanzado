/* flujo: orden en que se ejecutan las declaraciones */

let miVariable = 10;
console.log(miVariable);

/* *Estructuras de control de flujo */

let edad = 17;
let tienesINE = true;
/* && (las dos condiciiones se deben cumplir) || (or una de las dos condiciones) */
if(edad >= 18 || tienesINE == true)
{
    console.log(" Puedes entrar ")
} /*else {
    console.log(" No puedes entrar")
}*/

/* Operación ternario */
/*(condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso;
*/

let edad1 = 19;

edad1 >= 18 
     ? console.log(" Mayor de edad ") 
    : console.log(" Menor de edad");
/*
? se ejecuta si se cumple la condiciòn
: se ejecuta si la condición es falsa
*/

let pregunta = (edad1 >= 18)
? " Mayor de edad"
: " Menor de edad";

console.log(pregunta);

let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? " Mayor" 
: " Menor"} de edad`;

console.log(preguntaEdad);

/*
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sabado - 6

*/

/*if (dia === 0){
    console.log(" Domingo ");
}
if (dia === 1){
    console.log(" lunes ");
}
if (dia === 2){
    console.log(" martes ");
}
if (dia === 3){
    console.log(" miercoles ");
}
if (dia === 4){
    console.log(" jueves ");
}
if (dia === 5){
    console.log(" viernes ");
}
if (dia === 6){
    console.log(" sábado ");
}*/

//Switch - case

/*
Switch(variable a evaluar){ 
     case valor:
        -codigo a ejecutar - 
        break;
     case valor:
        -codigo a ejecutar - 
        break;
     default: 
         -codigo a ejecutar si sale de las opciones -
         break;
}
*/
//por cada case se utiliza un break para que detenga la ejecucion del switch
let dia = 2;


switch (dia) {
    case 0:
        console.log(" Domingo ");
        break;
    case 1:
        console.log(" Lunes ");
        break;
    case 2:
        console.log(" Martes ");
        break;
    case 3:
        console.log(" Miércoles ");
        break;
    case 4:
        console.log(" Jueves ");
        break;
    case 5:
        console.log(" Viernes ");
        break;
    case 6:
        console.log(" Sábado ");
        break;
    default:
        console.log(" No es un día válido ");
        break;
}

let cuponDescuento = "Oro"
let descuento; 
console.log(descuento);

switch (cuponDescuento) {
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "Oro":
        descuento = 15;
        break;
    default:
        console.log("Cupón erróneo");
        break;
}

console.log(descuento);