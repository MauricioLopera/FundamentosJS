const API_URL = 'https://swapi.dev/api/';
const PEOPLE_ID = 'people/:id';
let cantp = Number(prompt("¿Cuantos personajes deseas que carguemos?"));
const opst = { crossDomain: true };
let ids = [];


function obtenerPersonaje(id){
    //asi se declara una promesa
    return new Promise (function(resolve,reject){
        const URL_completa = `${API_URL}${PEOPLE_ID.replace(":id",id)}`;

        //conectamos con jquery
        $
        .get(URL_completa, opst, function(data){
            //solo se resuelve si la function del get es satisfactoria
            resolve(data);
        })
        .fail(() => reject(id));

    })
    
}

//funcion asincrona
async function obtenerPersonajesAsync(){
    //creo un ciclo for para obtener la cantidad de personajes solicitada al usuario
    for (i=1; i<=cantp; i++){
        //armo el array de ids
        ids.push(i);
    }

    //genero un nuevo array de promesas con los ids
    var promesas = ids.map(id => obtenerPersonaje(id))

    //bloque de validacion de errores try and catch
    try{
        //variable que almacenara los resultados de todas las promesas despues de ejecutadas
        let personaje = await Promise.all(promesas);

        //recorro nuevo array para imprimir
        for (i=0; i<personaje.length; i++){
            console.log(`El personaje ${i+1} se llama ${personaje[i].name}`);
        }
    }catch(id){
        console.log(`No pudimos encontrar el personaje con id ${id}`);
    }
}

obtenerPersonajesAsync();