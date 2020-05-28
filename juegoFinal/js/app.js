const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const counter = document.getElementById('counter');
const ultimoNivel = 10;

class Juego {
    constructor() {
        this.inicializar()
        //cargo la secuencia de numeros
        this.secuenciaNumeros();
        //pasamos al siguiente nivel
        this.siguienteNivel();
    }

    inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this);
        btnEmpezar.classList.add('hide');
        counter.classList.add('show');
        this.cuentaRegresiva();
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    cuentaRegresiva(){
        let i = 3;
        counter.innerHTML = i;
        setTimeout(()=>{
            i=2;
            counter.innerHTML = i;            
        },500);
        setTimeout(()=>{
            i=1;
            counter.innerHTML = i;        
        },1000);
        setTimeout(()=>{
            counter.style.display='none';    
        },1500);
    }

    secuenciaNumeros(){
        this.secuencia = new Array(ultimoNivel).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.subnivel = 0;
        this.ejecutarSecuencia();
        this.agregarEventoClick();
    }

    //funcion para obtener el color segun el numero
    obtenerColor(numero){
        switch(numero){
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }

    //funcion para obtener el numero segun el color
    obtenerNumeroColor(color){
        switch(color){
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
        }
    }

    ejecutarSecuencia(){
        //recorremos las posiciones del array hasta el nivel en el que se encuentra
        for (let i=0; i<this.nivel; i++){
            //obtenemos el color segun el numero del array
            const color = this.obtenerColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 1600 * (i + 1))
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }

    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

    agregarEventoClick(){
        //utilizamos bind para que la referencia del this al objeto Juego no cambia al boton clicado
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
        this.colores.violeta.addEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.addEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
    }

    eliminarEventoClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.violeta.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.removeEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.removeEventListener('click', this.elegirColor.bind(this))
        
    }

    elegirColor(ev){
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.obtenerNumeroColor(nombreColor);
        this.iluminarColor(nombreColor);
        //validamos si la seleccion del usuario coincide con la del juego
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++;
            if(this.subnivel === this.nivel){
                this.nivel++;
                this.eliminarEventoClick();
                if(this.nivel === ultimoNivel + 1){
                    //gano
                }else{
                   setTimeout(this.siguienteNivel, 500);
                }
            }
        }else{
            //perdio
        }
    }
}

function empezarJuego() {
    window.juego = new Juego()
}