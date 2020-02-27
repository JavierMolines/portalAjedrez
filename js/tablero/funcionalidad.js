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

    // VARIABLES DE JUGADA
    let movimiento_valido = false;
    let comer_pieza = false;
    let pieza_en_movimiento = pieza[0];

    // SI LA CASILLA DESTINO ESTA OCUPADA SE PROCEDE A VALIDAR
    if (casilla.childNodes.length > 0) {
        if (casilla.childNodes[0].style.color !== movimiento_actual) {
            movimiento_valido = true;
            comer_pieza = true;
        }
    } else {
        movimiento_valido = true;
    }

    // ACCIONES CUANDO SE MUEVE LA PIEZA
    if (movimiento_valido === true) {

        // COMER PIEZA SI LA CASILLA ES VALIDA
        if (comer_pieza === true) {
            casilla.removeChild(casilla.childNodes[0]);
        }

        // MOVER PIEZA
        pieza_en_movimiento.parentElement.removeChild(pieza_en_movimiento);
        casilla.appendChild(pieza_en_movimiento);

        // CONTINUAR FLUJO
        deshabilitar_enroque(pieza[2]);
        comprobar_jaque(pieza_en_movimiento);
        validar_promocion_peon(pieza_en_movimiento, casilla);
        cambiar_turno(pieza_en_movimiento.style.color);
        
    }

}