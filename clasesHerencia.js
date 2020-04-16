//variables
let nombre, apellido, profesion = '';
let altura = 0;

//clases
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(){
        alert(`Bienvenido, ${this.nombre} ${this.apellido} a nuestra comunidad,`);
    }

    estatura(){
        if(this.altura >= 1.8){
            alert(`solo por molestar te consideramos una persona alta.`);
        }else if(this.altura >= 1.65){
            alert(`solo por molestar te consideramos una persona de altura promedio.`);
        }else{
            alert(`solo por molestar te consideramos una persona baja.`);
        }
    }
}

//clase que hereda de persona
class Desarrollador extends Persona{
    //el constructor hereda del super constructor
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }

    //sobreescribimos el metodo saludar de la clase Persona
    saludar(){
        alert(`Bienvenido, ${this.nombre} ${this.apellido} a nuestra comunidad de desarrolladores`);
    }
}

//funcion de registro
function registro(){
    nombre = prompt('Ingresa tu nombre');
    apellido = prompt('Ingresa tu apellido');
    altura = Number(prompt('Ingresa tu altura en METROS'));
    profesion = (prompt('Ingresa tu profesion u oficio')).toLowerCase();

    //valido si su profesion es desarrollador
    if(profesion === 'desarrollador' || profesion === 'desarrolladora'){
        let nuevo = new Desarrollador(nombre, apellido, altura);

        //ejecuto metodos
        nuevo.saludar();
        nuevo.estatura();
    }else{
        let nuevo = new Persona(nombre, apellido, altura);

        //ejecuto metodos
        nuevo.saludar();
        nuevo.estatura();
    }
}

//inicia aplicacion
registro();