//variables globales
let arrayMarcas = ['Mazda','Renault','Chevrolet','Dodge','Citroen','Peugeot','BMW','Mercedez Benz'];

function autos (marca, modelo, puertas) {
    this.marca = marca,
    this.modelo = modelo,
    this.puertas = puertas
}

//ciclo de 30 autos
for (i=1 ; i<=30 ; i++){
    //variables locales de ejecucion por cada vuelta del ciclo
    let randomModelo = Math.floor(Math.random() * (2020 - 1999) + 1999);
    let randomPuerta = Math.floor(Math.random() * (4 - 1) + 2);
    let randomMarca = arrayMarcas[Math.floor(Math.random() * 7)];

    //creo nueva instancia del objeto
    var auto = new autos(randomMarca,randomModelo,randomPuerta);

    //imprimo
    console.log(auto);
}
