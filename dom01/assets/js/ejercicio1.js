/*Crear un documento HTML, este contendrá un titulo que diga Hola nombre, y un botón que diga cambiar nombre. Cuando el botón se presione aparecerá un promt en donde el usuario puede colocar su nombre, después el titulo cambiara a Hola + nombre del usuario.
 */
let nombre = document.getElementById("nombre");

function changename( cambiodenombre) {
    cambiodenombre = prompt(" Escriba su nombre");
    nombre.textContent=cambiodenombre;
}
