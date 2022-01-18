/*let titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.textContent = "título escrito desde JS";*/

//el signo de $ se usa para indicar que una variable guarda algún elemento del dom, o de HTML en sí

/*
.clase
#id
etiqueta
*/
let $titulo = document.querySelector("#titulo");
$titulo.textContent = "título escríto desde JS";

let $parrafo = document.querySelector("p");
//console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll("p");
//console.log($parrafos[1].textContent);

//createElement solo se refleja en memoria lo cual permite modificar e contenido del elemento
let subtitulo = document.createElement("h3");
subtitulo.textContent = "Este es un subtitulo desde JS";
//document.body.apped agrega un elemento dentro de body al final.
$titulo.insertAdjacentElement("afterend",subtitulo);
//se tienen que hacer los tres pasos anteriores para que se refleje en pantalla
$titulo.remove();

let $contenido =document.querySelector("#contenido");
//console.log($contenido.textContent ="<br/>");//devuelve texto no permite colocar etiquetas html com <br/>
//console.log($contenido.innerHTML = "<br />");//devuelve todo el contenido que haya en este si se le pueden aregar etiqueta html
//console.log($contenido.outerHTML = "Hola");//modifica todo desde afuera incluido el elemento 
let contenidoParrafo = document.createElement("p");
contenidoParrafo.textContent = "contenido de mi nuevo parrafo";
$contenido.appendChild(contenidoParrafo);//appendChild hace que lo que coloques dentro del contenido pero al final
