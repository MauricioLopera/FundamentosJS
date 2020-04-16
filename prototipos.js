function registro() {
    let nombre = prompt('Indícanos tu nombre');
    let apellido = prompt('Indícanos tu apellido');
    let altura = Number(prompt('Indícanos tu altura en METROS'));
    //creo la copia del objeto
    let person = new Persona(nombre, apellido, altura);

    //clase o prototipo persona
    function Persona(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;

    }

    //metodo saludar
    Persona.prototype.saludar = function () {
        alert(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }

    //metodo es alto
    Persona.prototype.soyAlto = function () {
        if(this.altura >= 1.8){
            alert(`y soy una persona alta`);
        }else if(this.altura >= 1.65){
            alert(`y soy una persona de altura promedio`);
        }else{
            alert(`y soy una persona baja`);
        }
    }  

    person.saludar();
    person.soyAlto();
    
}

registro();
