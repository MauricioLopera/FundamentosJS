//Aplicacion que recibe N cantidad de personas y valida cuales son altas y cuales son bajas
let persona = {
    nombre:'',
    estatura:0
}
let arrayPersonas= [];
let cantidadPersonas = Number(prompt('Ingresa la cantidad de persona a validar'));
let nombreBajas, nombreAltas;

for(i=1; i<=cantidadPersonas; i++){
    let nuevaPersona = {
        ...persona,
        nombre: prompt(`Ingresa el nombre de la persona ${i}`),
        estatura: Number(prompt(`Ingresa la estatura de la persona ${i} en METROS`))
    }

    arrayPersonas.push(nuevaPersona);
}

let esBaja = ({estatura}) => estatura <= 1.6;
let esAlta = ({estatura}) => estatura >= 1.8;

//filtro
let personasBajas = arrayPersonas.filter(esBaja);
let personaAltas = arrayPersonas.filter(esAlta);

function validaBajas(){
    //valido tamaño de los array de resultado
    if(personasBajas.length !== 0){
        for(i=0; i<personasBajas.length; i++){
            if(i === 0){
                nombreBajas = personasBajas[0].nombre;
            }else{
                nombreBajas = nombreBajas + ',' + personasBajas[0].nombre;
            }
            
        }

        return nombreBajas;
    }else{
        nombreBajas = '-';
        return nombreBajas;
    }
}

function validaAltas(){
    //valido tamaño de los array de resultado
    if(personaAltas.length !== 0){
        for(i=0; i<personaAltas.length; i++){
            if(i === 0){
                nombreAltas = personaAltas[0].nombre;
            }else{
                nombreAltas = nombreAltas + ',' + personaAltas[0].nombre;
            }
            
        }

        return nombreAltas;
    }else{
        nombreAltas = '-';
        return nombreAltas;
    }
}

//valido si alguno no tiene personas
let nombrePersonasAltas = validaAltas();
let nombrePersonasBajas = validaBajas();

if(nombrePersonasBajas === '-' && nombrePersonasAltas === '-'){
    alert(`Todas las personas ingresadas tienen una estatura promedio`);
}else if(nombrePersonasAltas === '-'){
    alert(`Las personas bajas son: ${nombrePersonasBajas} y las demas tienen una estatura promedio`);
}else if(nombrePersonasBajas === '-'){
    alert(`Las personas altas son: ${nombrePersonasAltas} y las demas tienen una estatura promedio`);
}else{
    alert(`Las personas bajas son: ${nombrePersonasBajas} y las personas altas son: ${nombrePersonasAltas}, las demas tienen una estatura promedio`);
}
