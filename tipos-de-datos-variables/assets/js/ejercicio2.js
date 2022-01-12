/*1. Almacenar el año actual en una variable. Pedirle al usuario su año de nacimiento y calcular su edad.
 */
let añoActual = document.getElementById("2022");
function año(){
    let edad = prompt("ingresa tu año de nacimiento");
    añoActual.textContent = 2022 - edad ;
}