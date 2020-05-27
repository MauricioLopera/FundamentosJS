const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const counter = document.getElementById('counter');

class Juego {
    constructor() {
        this.inicializar()
    }

    inicializar() {
        btnEmpezar.classList.add('hide');
        counter.classList.add('show');
        this.cuentaRegresiva();
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
}

function empezarJuego() {
    var juego = new Juego()
}