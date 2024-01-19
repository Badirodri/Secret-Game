let numeroSecreto =0
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
};

function verificarIntento(){
    let numeroDado=parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDado){
        asignarTextoElemento('p',`Acertaste! En ${intentos} ${(intentos===1) ? 'vez': 'veces'}` )
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        // usuario no acerto
        if (numeroDado > numeroSecreto){
            asignarTextoElemento('p','El numero es menor')
            
        }else{
            asignarTextoElemento('p','El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}   

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya estan todos los numeros
    if (listaNumeroSorteados.length ==numeroMaximo){
        asignarTextoElemento('p','todos los numeros usados')
    }else{
    //si el numero generado esta en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
    
};

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero');
    asignarTextoElemento('p', `digite numeros del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //reiniciar generar numero secreto
    condicionesIniciales();
    //desabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled', true)
    return;
}

condicionesIniciales();
