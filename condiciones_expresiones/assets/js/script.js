/* Operadores Aritméticos */
// + - * / %(modulo o residuo) ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5/2 * 4;
console.log(operacion2);

/* Operadores Racionales */
// < menor que, > mayor que, <=, >=, ==, ===, !=, !==
// Dan como resultado un boolean de true o false

console.log(7 < 7); // no estamos incluyendo el numero a comparar
console.log(7 <= 7); // incuye el número a comparar

console.log(7 == "7"); // compara el valor, pero no el tipo de dato
console.log(7 === "7"); //el operador estricto compara el valor y el tipo de dato

console.log(7 != "7");
console.log(7 !== "7"); //operador de diferencia estricto evalua el valor como el tipo de dato

/* Incremento y decremento */
// +=, -=, *=, /= aumentan en uno o mas

let incremento = 5;
incremento += 5; //es una version simplificada, es como si dijeramos que a incremento = incremento + 5
console.log(incremento) //10

incremento -= 5;
console.log(incremento); //5

incremento *= 5;
console.log(incremento); //25

incremento /= 5;
console.log(incremento); //5

/* Operador unario */
// ++, --
//sumar uno o restar uno

let sumar = 0;
console.log(sumar + " linea 44 ");
sumar++;
console.log(sumar + " línea 46 ");
sumar++;
console.log(sumar)//2
sumar--; 
sumar--;
sumar--;
console.log(sumar);//-1


/*  */
for(let i = 0; i < 10; i++ ){
    /* código */
}
/* 
++variable = preincremento (primero modifica el valor y    despues hace uso de la variable).
variable++ = posincremento (usando la variable y despues hace el incremento).
*/
let num = 5;
console.log(num++);//5
console.log(num);//6

for(let i = 0; i < 5; i++ ){
    //iteracion
    //cada que el for hace una primera iteracion, se detiene para que el...
    console.log(" este es el ciclo padre ")
    for(let j = 0; j < 5; j++ ){
    // ... segundo for pueda hacer sus iteraciones (repeticiones) propias
    console.log(" este es el ciclo hijo ")   
    }
}
/*Los for anidados se utilizan mucho cuando tenemos arrays multidimensionales
Es decir, que en las posiciones del array haya dentro otro array
Para recorrerlos
*/