var persona = {
    nombre : '',
    edad : 0
}

function mostrarInformacion (persona){
    var nuevaPersona = {
        ...persona,
        nombre : prompt('Ingresa tu nombre'),
        edad : prompt('Ingresa tu edad')
    }
    //imprimimos la informacion del nuevo objeto
    console.log(nuevaPersona);

    return(`Tu nombre es ${nuevaPersona.nombre} y tu edad es ${nuevaPersona.edad} años`);
}

//mostramos el resultado de la funcion
alert(mostrarInformacion(persona));

//conservamos el estado de nuestro objeto global
console.log(persona);

