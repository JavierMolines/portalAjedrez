function movimiento_pieza(pieza, tipo){

    if (pieza.style.color == movimiento_actual) {

        setTimeout(()=>{

            pieza_seleccionada = [pieza, obtener_posicion_pieza(pieza), tipo];

            if (ayuda_movimientos == 1) {

                pre_movimiento(pieza);  

            }

        }, 10);
        
    }
    
}

function pre_movimiento(pieza) {

    let propiedades_pieza = obtener_ID_pieza(pieza);
    let localizacion = obtener_posicion_base_ID(pieza);

    if (propiedades_pieza.tipo == "peon") {

        validar_premovimiento_peon(localizacion, propiedades_pieza);

    } else if (propiedades_pieza.tipo == "caballo") {

        validar_premovimiento_caballo(localizacion, propiedades_pieza);

    } else if (propiedades_pieza.tipo == "bishop") {

        validar_premovimiento_bishop(localizacion, propiedades_pieza);

    } else if (propiedades_pieza.tipo == "torre") {

        validar_premovimiento_torre(localizacion, propiedades_pieza);

    } else if (propiedades_pieza.tipo == "reina") {

        validar_premovimiento_bishop(localizacion, propiedades_pieza);
        validar_premovimiento_torre(localizacion, propiedades_pieza);

    } else if (propiedades_pieza.tipo == "rey") {

        validar_premovimiento_rey(localizacion, propiedades_pieza);

    }

}

function asignar_movimiento_piezas() {

    borrar_premovimiento();

    /*  - VALIDACION - */

    if (pieza_seleccionada == "") {
        return ;
    }

    /*  - VARIABLES - */

    let posicion = obtener_posicion(this);
    let posicionamiento = {

        flujo: pieza_seleccionada[0].style.color,
        posY: parseInt(pieza_seleccionada[1][0]),
        posX: parseInt(pieza_seleccionada[1][1]),
        targetPosY: parseInt(posicion[0]),
        targetPosX: parseInt(posicion[1])

    };    

    /*  - MOVIMIENTOS - */

    if (pieza_seleccionada[2] == "peon") {

        validar_movimiento_peon(posicionamiento, this);

    } else if (pieza_seleccionada[2] == "bishop") {

        validar_movimiento_bishop(posicionamiento, this);

    } else if (pieza_seleccionada[2] == "caballo") {

        validar_movimiento_caballo(posicionamiento, this);
        
    } else if (pieza_seleccionada[2] == "torre") {

        validar_movimiento_torre(posicionamiento, this);
        
    } else if (pieza_seleccionada[2] == "reina") {

        validar_movimiento_bishop(posicionamiento, this);
        validar_movimiento_torre(posicionamiento, this);

    } else if (pieza_seleccionada[2] == "rey") {
        
        validar_movimiento_rey(posicionamiento, this);

    }

    // LIMPIAR PIEZA SELECCIONADA PARA QUE SEA NECESARIO DAR CLICK
    pieza_seleccionada = "";
    borrar_premovimiento();

}

function interaccion_pieza(pieza, casilla) {

    // INDICAR JUGADA
    let acciones = false;

    // SI LA CASILLA DESTINO ESTA OCUPADA SE PROCEDE A VALIDAR
    if (casilla.childNodes.length > 0) {
        if (casilla.childNodes[0].style.color !== movimiento_actual) {

            // INDICAR QUE HUBO MOVIMIENTOS
            acciones = true;

            // COMER PIEZA
            pieza[0].parentElement.removeChild(pieza[0]);
            casilla.removeChild(casilla.childNodes[0]);
            casilla.appendChild(pieza[0]);

        }
    } else {

        // INDICAR QUE HUBO MOVIMIENTOS
        acciones = true;

        // MOVER PIEZA
        pieza[0].parentElement.removeChild(pieza[0]);
        casilla.appendChild(pieza[0]);

    }

    if (acciones === true) {

        deshabilitar_enroque(pieza_seleccionada[2]);
        comprobar_jaque(pieza[0]);
        cambiar_turno(pieza[0].style.color);
        
    }

}