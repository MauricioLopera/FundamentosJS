let i = 0;
var articulosComprados = [
    {nombre:'Bici',costo:800000},
    {nombre:'Tv',costo:2000000},
    {nombre:'Radio',costo:350000},
    {nombre:'Movil',costo:3000000},
    {nombre:'Cuaderno',costo:50000},
    {nombre:'PC',costo:1900000},
    {nombre:'Mouse',costo:30000},
    {nombre:'Escoba',costo:10000}
];

var filtraArticulos = articulosComprados.filter(function(articulo){
    return articulo.costo <= 500000;
});

var mapearArticulos = articulosComprados.map(function(articulo){
    return articulo.nombre;
});

var mapeaFiltro = filtraArticulos.map(function(articulo){
    return articulo.nombre;
});

console.log(`Los articulos comprados son ${mapearArticulos} y los que tienen un valor menor a 500 mil son ${mapeaFiltro}.`);

var buscaArticuloCosto = articulosComprados.find(function(articulo){
    if(articulo.nombre === 'PC'){
        console.log('El articulo PC ya existe!!');
    }
});

buscaArticuloCosto;

var iteraArticulos = articulosComprados.forEach(function(articulo){
    i++;
    console.log(`Articulo #${i}. ${articulo.nombre}`);
});

var validaArticulo = articulosComprados.some(function(articulo){
    return articulo.costo<=30000;
});
console.log(`¿Existe al menos 1 articulo de 30.000 o menos? ${validaArticulo ?'Si' :'No'}`);