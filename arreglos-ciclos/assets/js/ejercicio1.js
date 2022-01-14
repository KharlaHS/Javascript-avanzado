//Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio.
let numeros = [1, 25 , 10, 11, 71, 17, 62, 64, 97, 195, 376, 281, 645, 987, 526, 23, 61, 12, 94, 20];
document.write("<br>" + numeros + "<br>")

let total = 0;
let promedio = 0;

for(let i = 0; i < numeros.length; i++) {
    total += numeros[i];
    promedio = total / numeros.length;
}

document.write("<br>" + " el total es " + total + "<br>");
document.write("<br>" + " el promedio es " + promedio + "<br>");

