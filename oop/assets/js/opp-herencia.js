class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //métodos
    atacar(){
        return console.log(`${this.nombre} está atacando.` )
    }
}




class Pikachu extends Pokemon{
    constructor(nombre, tipo, edad){
        super(nombre, tipo);
        this.edad = edad;
    }

    //métodos
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando.`)
    }
}

class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad);
        this.color = color;
    }
}

const Electrico1 = new Electrico("Panchito", "Electrico", 4, "Gris");
console.log(Electrico1);

const Pikachu1 = new Pikachu("Juan", "Eléctrico", 3);//pertenece a la clase Pikachu
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon("Charmander", "Fuego");//pertenece a la clase pokemon
Pokemon1.atacar();