function movimiento_pieza(pieza, tipo) {
    let tiempo_seteo_propiedades = 10;
    if (pieza.style.color == movimiento_actual) {
        setTimeout(() => {
            pieza_seleccionada = [pieza, obtener_posicion_pieza(pieza), tipo];
            if (ayuda_movimientos == 1) {
                pre_movimiento(pieza);
            }
        }, tiempo_seteo_propiedades);
    }
}

function pre_movimiento(pieza) {

    let propiedades_pieza = obtener_ID_pieza(pieza);
    let localizacion      = obtener_posicion_base_ID(pieza);

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

    // - VALIDACION -
    if (pieza_seleccionada !== "") {

        let posicion = obtener_posicion(this);
        let posicionamiento = {
            flujo      : pieza_seleccionada[0].style.color,
            posY       : parseInt(pieza_seleccionada[1][0]),
            posX       : parseInt(pieza_seleccionada[1][1]),
            targetPosY : parseInt(posicion[0]),
            targetPosX : parseInt(posicion[1])
        };

        // - MOVIMIENTOS -
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
}

function interaccion_pieza(pieza, casilla) {

    // VARIABLES DE JUGADA
    let respaldo_peon_paso  = false;
    let enroque             = false;
    let pieza_para_comer    = false;
    let movimiento_valido   = false;
    let comer_pieza         = false;
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

        // MOVIMIENTO ANTICIPADO DEL REY PARA SU PROTECCION
        let obtener_rey = obtener_ID_pieza(pieza_en_movimiento);
        if(obtener_rey.tipo === "rey"){
            let resultado = rey_saque(pieza_en_movimiento, casilla);
            if(resultado === true){
                return;
            }
        }

        // COMPROBAR SI SE ESTA EN JAQUE
        if (detectar_jaque(pieza_en_movimiento, casilla, jaque) !== true) {

            // VALIDAR PEON AL PASO
            if (peon_al_paso.estatus === true && peon_al_paso.by !== movimiento_actual) {
                respaldo_peon_paso = asignar_data_objeto(peon_al_paso);
                desactivar_doble_paso();
            }

            // COMER PIEZA SI LA CASILLA ES VALIDA
            if (comer_pieza === true) {
                pieza_para_comer = casilla.childNodes[0];
                casilla.removeChild(pieza_para_comer);
            }

            // MOVER PIEZA
            pieza_en_movimiento.parentElement.removeChild(pieza_en_movimiento);
            casilla.appendChild(pieza_en_movimiento);

            // CONTINUAR FLUJO
            jaque = false;
            deshabilitar_enroque(pieza[2]);
            comprobar_jaque(pieza_en_movimiento);
            validar_promocion_peon(pieza_en_movimiento, casilla);
            guardar_movimiento(pieza, casilla, pieza_para_comer, enroque, respaldo_peon_paso);
            cambiar_turno(pieza_en_movimiento.style.color);

            // VALIDACION FIN DEL JUEGO
            detectar_jaque_mate(casilla);
        }
    }
}