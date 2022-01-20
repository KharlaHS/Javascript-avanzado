//Clases, molde que nos permite crear objetos

class Animal{
    /*nombre;
    especie;*/
    //constructor es una función
    constructor(nombre, especie){
        //this hace referenciaal contexto en que se está utilizando
        this.nombre = nombre; 
        this.especie = especie;
    }

    //getters y setters
    //sólo tiene este propósito leer o modificar el atributo
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie
    }

    set setEspecie(especie){
        this.especie =especie;
    }

    //métodos == función
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje =`Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return document.write(mensaje);
    }

    //Métodos estáticos 
    //pertenece solo a la clase y no se hereda a los objetos
    static saludar(){
        return console.log("Hola, soy un método estático");
    }
}


//Animal.presentarse()
//console.log(Animal.getNombre);

Animal.saludar();

//heredan os atributos y los metodos de la clase que estan utilizando
const Animal1 = new Animal("Scooby", "Perro");//creamos un objeto
//instanciar = hacer una copia, crear un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);


Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrappy";
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre("Oddie"); //metodo para cambiar el valor

//Getters y Setters 
//get = obtener el valor de un atributo
//set = fijar o cabiar 

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);
//Animal1.saludar();
/*

function constructor(){

}*/