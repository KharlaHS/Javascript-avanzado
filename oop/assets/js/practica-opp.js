/*Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.
 */

class Carro{

    constructor(marca='Chocolate', color='arcoiris', modelo=2020,velocidad=100, numeroPuertas=4){
        this.marca=marca;
        this.color=color;
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.numeroPuertas=numeroPuertas;
    }

    acelerar(){
        return this.velocidad+=1;
    }
    reversa(){
        return this.velocidad-=1;
    }
    frenar(){
        return this.velocidad=0;
    }

    toString(){
        document.write(`El auto ${this.marca} de color ${this.color}, modelo ${this.modelo} tiene ${this.numeroPuertas} puertas y va a una velocidad de ${this.velocidad} <br>`);
    }
}


const Carro1= new Carro();
Carro1.toString();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.toString();
Carro1.reversa();
Carro1.toString();
Carro1.frenar();
Carro1.toString();