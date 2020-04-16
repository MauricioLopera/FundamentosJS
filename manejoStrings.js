var nombre = 'Mauricio', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

var ultimaLetra = nombre.substr(nombre.length - 1, 1);

console.log(`La ultima letra de tu nombre es ${ultimaLetra}`);
