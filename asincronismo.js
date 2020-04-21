console.log('a');

//esta funcion se ejecuta en la pila de ejecucion despues de que el programa principal termina su ejecución.
setTimeout(function(){
    console.log('b');
},2000)

console.log('c');

for(i=0; i<10000000000; i++){
    //utilizamos este for para ver como ejecuta JS la pila de ejecucion
}
//aqui termina la ejecucion principal