let $titulo = document.querySelector("#titulo");
let $texto = document.querySelector(".texto");
$texto.id = "texto";
//$texto.style = "color: red; font-size: 24px";
$texto.className = "bg-purple h3";
//$texto.className = "h3";
//lo que este dentro de className lo va a remplazar
//$texto.className = "h3";
//para eliminar clases de forma selectiva se utiliza classlist
$texto.classList.add("text-center");
$texto.classList.remove("bg-purple");