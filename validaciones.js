let persona = {
    nombre:'',
    edad:0
}

function imprimirEdad(persona){
    let nuevaPersona = {
        ...persona,
        nombre:prompt('Ingresa tu nombre'),
        edad:Number(prompt('Ingresa tu edad'))
    }

    //valido edad
    if(nuevaPersona.edad <= 0){
        return `Bienvenido Óvulo fecundado`;
    }else if(nuevaPersona.edad > 0 && nuevaPersona.edad <= 12){
        return `${nuevaPersona.nombre} según tu edad sabemos que eres un niño`;
    }else if(nuevaPersona.edad > 12 && nuevaPersona.edad <= 18){
        return `${nuevaPersona.nombre} según tu edad sabemos que eres un adolecente`;
    }else if(nuevaPersona.edad > 18 && nuevaPersona.edad <= 30){
        return `${nuevaPersona.nombre} según tu edad sabemos que eres un adulto joven`;
    }else if(nuevaPersona.edad > 30 && nuevaPersona.edad <= 70){
        return `${nuevaPersona.nombre} según tu edad sabemos que eres un adulto`;
    }else if(nuevaPersona.edad > 70 && nuevaPersona.edad <= 99){
        return `${nuevaPersona.nombre} según tu edad sabemos que eres un anciano`;
    }else{
        return `Bienvenido Matusalen`;
    }
}

alert(imprimirEdad(persona));