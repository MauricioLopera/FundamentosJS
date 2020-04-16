let mayoriaEdad = prompt('Ingresa la edad legal en tu país');
let mensaje='';
let persona = {
    nombre:'',
    edad:0
}

//arrow function
const VALIDA_EDAD = (persona, legal) => persona.edad >= legal;

function imprimirAcceso(persona){
    let nuevaPersona = {
        ...persona,
        nombre:prompt('Ingresa tu nombre'),
        edad:Number(prompt('Ingresa tu edad'))
    }
    
    //validacion ternario
    VALIDA_EDAD(nuevaPersona,mayoriaEdad) ? mensaje='Bienvenido' : mensaje='DENEGADO';

    return mensaje;
}

alert(imprimirAcceso(persona));