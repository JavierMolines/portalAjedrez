function detectar_jaque_mate(pieza_en_movimiento, casilla) {

    if (jaque === true) {

        let movimientos_del_rey = false;
        let acciones_disponibles = false;
        let vl_pieza_monarca = capturar_casillas_posibles_rey();
        let vl_pieza_enemiga = debilidades_pieza_atacante(casilla);

        if (movimientos_del_rey === vl_pieza_monarca && acciones_disponibles === vl_pieza_enemiga) {
            console.log("GAME OVER");
            movimiento_actual = "gameover";
        }

    }

}

function capturar_casillas_posibles_rey() {

    // SUMAR COMO AGUJAZ DEL RELOJ
    let validacion = false;
    let rey_pieza = crear_pieza(pos_jaque_rey);
    let propiedades = [

        {
            posX: pos_jaque_rey.posX,
            posY: pos_jaque_rey.posY + 1,
        },
        {
            posX: pos_jaque_rey.posX + 1,
            posY: pos_jaque_rey.posY + 1,
        },
        {
            posX: pos_jaque_rey.posX + 1,
            posY: pos_jaque_rey.posY,
        },
        {
            posX: pos_jaque_rey.posX + 1,
            posY: pos_jaque_rey.posY - 1,
        },
        {
            posX: pos_jaque_rey.posX,
            posY: pos_jaque_rey.posY - 1,
        },
        {
            posX: pos_jaque_rey.posX - 1,
            posY: pos_jaque_rey.posY - 1,
        },
        {
            posX: pos_jaque_rey.posX - 1,
            posY: pos_jaque_rey.posY,
        },
        {
            posX: pos_jaque_rey.posX - 1,
            posY: pos_jaque_rey.posY + 1,
        }

    ];

    for (let contador = 0; contador < propiedades.length; contador++) {

        let posicion = propiedades[contador];
        if (posicion.posX > 0 && posicion.posX < 9 &&
            posicion.posY > 0 && posicion.posY < 9) {
            let nueva_casilla = document.getElementById(`cuadro[${posicion.posY},${posicion.posX}]`);
            let casillas_obtenidas = vl_casillas_entorno(nueva_casilla, "normal");
            let filtro_casillas = vl_casillas_capturadas(casillas_obtenidas, rey_pieza, nueva_casilla, true);
            if (filtro_casillas === false) {
                let hijo_detalles = obtener_hijo_detalles_ID(nueva_casilla);
                if (hijo_detalles.color !== movimiento_actual) {
                    validacion = true;
                    break;
                }
            }
        }

    }

    return validacion;

}

function debilidades_pieza_atacante(casilla) {

    let validacion = false;
    let casillas_obtenidas = vl_casillas_entorno(casilla, "normal");

    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {

        let informacion = casillas_obtenidas[contador];
        let flujo = informacion[0];
        let detalles = informacion[1];
        let pieza_interna = obtener_hijo_detalles_ID(detalles);
        if (pieza_interna !== false) {
            if (pieza_interna.color === movimiento_actual) {

                if (flujo === "bishop" && pieza_interna.tipo === "reina" || flujo === "bishop" && pieza_interna.tipo === "bishop") {
                    validacion = true;
                    break;
                }

                if (flujo === "torre" && pieza_interna.tipo === "reina" || flujo === "torre" && pieza_interna.tipo === "torre") {
                    validacion = true;
                    break;
                }

                if (flujo === "caballo" && pieza_interna.tipo === "caballo") {
                    validacion = true;
                    break;
                }

                if (flujo === "bishop" && pieza_interna.tipo === "peon") {

                    let new_pos_peon = {
                        pos_Y_modificada: pieza_interna.coordenadas.posY,
                        pos_X_modificada_minus: pieza_interna.coordenadas.posX,
                        pos_X_modificada_plus: pieza_interna.coordenadas.posX
                    };

                    if (pieza_interna.color === ggValidaciones[1]) {
                        new_pos_peon.pos_Y_modificada += 1;
                    } else if (pieza_interna.color === ggValidaciones[0]) {
                        new_pos_peon.pos_Y_modificada -= 1;
                    }

                    new_pos_peon.pos_X_modificada_minus -= 1;
                    new_pos_peon.pos_X_modificada_plus += 1;

                    if ((pos_pieza_jaque.posX === new_pos_peon.pos_X_modificada_minus || pos_pieza_jaque.posX === new_pos_peon.pos_X_modificada_plus) &&
                        pos_pieza_jaque.posY === new_pos_peon.pos_Y_modificada) {

                        validacion = true;
                        break;

                    }

                }
            }
        }
    }

    return validacion;

}