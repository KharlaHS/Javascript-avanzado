let title = document.getElementById("title")

console.log(title);
title.textContent = "Este texto esta escrito desde Javascript"

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

/*parrafos[1].textContent = "Parrafos escritos desde Javascript"; */
/*se one [0] porque es la posicion en la que esta el parrafo que queremos modificar. para cambiar todos los elementos se pone a cada uno con condicionales*/

/*for(let i = 0; i< parrafos.length; i++) {
    parrafos[i].textContent = " parrafo" + i + " escritos desde Javascript ";
}*/

let email = document.getElementById("email");
let password = document.getElementById("password");

/*esta funcion hace que en consola se refleje el valor de la contraseña y el correo o cualquier informacion que queramos que se muestre */
function getInformation() {
    console.log(email.value);
    console.log(password.value);
}