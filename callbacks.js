//variables
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
let nombrePokemon = (prompt('Ingresa el nombre de tu pokemon favorito')).toLowerCase();
const opst = { crossDomain: true }
const URL_completa = API_URL + nombrePokemon;

//funcion que pasaremos como parametro, lo que se llama callback
const onResponse = function (data){
    alert(`Datos Basicos de ${data.name}, Altura: ${data.height}m, Peso: ${data.weight}kg, Experiencia Base: ${data.base_experience}pts`); 
}

//request con jquery
$.get(URL_completa, opst, onResponse).fail(()=> {
    alert(`Ha ocurrido un error de red, verifica tu conexion`);
});
