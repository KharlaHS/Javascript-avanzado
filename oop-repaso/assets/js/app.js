class Animalito{
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado;
        this.enfermo = false;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        //this.cantidadPacientes++;
        let mensaje = "paciente agregado <br>";
        return document.write(mensaje);
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();//llamando a otro método de esta misma clase
            //this.pacientesRevisados++;
            document.write("<br> Paciente ha sido revisado" )
        }
        else{
            document.write("Éste paciente ya fue revisado");
        }
    }

    mostrarlista(){
        for(let i = 0;i < this.listaPacientes.length; i++ ){
            document.write("" + this.listaPacientes[i].nombre)
        }
        document.write(`<br> cantidad de pacientes: ${this.cantidadPacientes} <br> pacientes revisados: ${this.pacientesRevisados} <br>`)
    }
}

const VeterinariaPanchito = new Veterinario();

//objetos creados de la clase Animalitos
const Animalito1 = new Animalito("Manchas", 5, "Perro", false);//objeto 1
const Animalito2 = new Animalito("Galleta", 2, "Gato", true);//objeto 2
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarlista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarlista();

VeterinariaPanchito.revisarPaciente(Animalito2);

//operador de corto circuito permite dejar un valor por defecto en caso de que el valor de la variable sea negativo o el usuario no ingrese el valor

