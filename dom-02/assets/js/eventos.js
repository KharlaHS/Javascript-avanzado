let titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector("#btnMensaje");
let $spanError = document.querySelector("span");

//.addEventListener le da un evento al boton de html o elemento deseado
$btnMensaje.addEventListener("click", () => {
    console.log("no me presiones");
});

//la e sirve para hacer referencia al evento puede ser cualquier letra pero de preferencia se utiliza la e
$mensaje.addEventListener("keydown", (e) => {
    console.log(e.target.value);

    if(e.target.value.length < 3) {
        $spanError.classList.remove("hide");
        $spanError.classList.add("error");
    }
    else {
        $spanError.classList.add("hide");
        $spanError.classList.remove("error");
    }
    //console.log(e)
});


/*function  mostrarConsole() {
    console.log("escribiste algo");*/