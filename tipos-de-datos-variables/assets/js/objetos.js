/*let miObjeto = { //objeto es una estructura de información
    //pares de clave valor
    //a la clave no se le pone comillas en este caso nombre
    nombre: "Karla Herrera"
};*/

let nombre = "Karla Herrera";
let edad = 24;
let direccion = "Naucalpan, Estado de México"
let numero = 5566778899

console.log(nombre)
// a esta estructura se le conoce como objeto.  
let persona = {
    nombre:{
        apellidopaterno: "Herrera",
        apellidomaterno: "Sebastian",
        nombre: "Karla Diana"
    },
    edad: 24,
    direccion: {
        ciudad: "naucalpan de Juárez",
        estado: "Estado de México"
    },
    numero: [
        5566778899,
        5511223344,
    ]
};
// para declarar {objetos}(cuando se necesita una estructura clara), para declarar [arreglos](para guardar informacion)
// arreglos vs objetos
//ambos almacenan información de cualquier tipo
/*["valor1", "valor2", "valor3"];
arreglo[1];

let otroObjeto = {
    nombre: "ghsjf"
    apellidos:"gdysdjs"
}*/
console.log(persona.nombre)

let jersey = {
    equipo:{
        equipo1: "Dallas Cowboys",
        equipo2: "Kansas City Chiefs",
        equipo3: "49ers"
    },
    talla: [
        "small",
        "medium",
        "large"
    ],
    color:{
        color1: "blue",
        color2: "red",
        color3: "wine",
        color4: "white",
        color5: "black"
    }, 
    jugador:{
        jugador1: "Dak Prescott",
        jugador2: "Patrick Mahomes",
        jugador3: "Jimmy Garoppolo"
    }
}
console.log(jersey.talla[1])