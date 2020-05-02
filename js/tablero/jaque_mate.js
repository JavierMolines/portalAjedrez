function detectar_jaque_mate(casilla) {

    if (jaque === true) {

        let movimientos_del_rey = false;
        let acciones_disponibles = false;
        let vl_pieza_monarca = capturar_casillas_posibles_rey();
        let vl_pieza_enemiga = debilidades_pieza_atacante(casilla);
        let vl_bloqueo_distancia = validacion_movimiento_distancia();

        console.log(vl_pieza_monarca);
        console.log(vl_pieza_enemiga);

        if (movimientos_del_rey === vl_pieza_monarca && acciones_disponibles === vl_pieza_enemiga) {
            //console.log("GAME OVER");
            //movimiento_actual = "gameover";
        }

    }

}

function capturar_casillas_posibles_rey() {

    // SUMAR COMO AGUJAZ DEL RELOJ
    let validacion = false;
    let rey_pieza = crear_pieza(pos_jaque_rey);
    let validacion_movimiento_final = 0;
    let validacion_indicador_movimientos = 0;
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
            let hijo_casilla = obtener_hijo_detalles_ID(nueva_casilla);

            // SI LA CASILLA ESTA VACIA O TIENE UN CARAJITO
            if (hijo_casilla === false || hijo_casilla.color !== rey_pieza.color) {

                validacion_indicador_movimientos++;

                let casillas_obtenidas = vl_casillas_entorno(nueva_casilla, rey_pieza);
                
                for (let interno = 0; interno < casillas_obtenidas.length; interno++) {

                    let informacion = casillas_obtenidas[interno];
                    let propiedades = {
                        flujo: informacion[0],
                        casilla: informacion[1],
                        casilla_pieza: obtener_hijo_detalles_ID(informacion[1])
                    };

                    // CASILLAS ENEMIGAS
                    if (propiedades.casilla_pieza !== false && propiedades.casilla_pieza.color !== rey_pieza.color) {

                        let crear_coordenadas_nuevas = crear_coordenadas_casilla(nueva_casilla);

                        if (propiedades.casilla_pieza.tipo === "peon" && propiedades.flujo === "bishop" ||
                            propiedades.casilla_pieza.tipo === "peon" && propiedades.flujo === "bishop" &&
                            filtrar_coordenadas_peon_jaquemate(crear_coordenadas_nuevas, propiedades.casilla_pieza.coordenadas) === true ||
                            propiedades.casilla_pieza.tipo === "reina" && propiedades.flujo === "bishop" ||
                            propiedades.casilla_pieza.tipo === "reina" && propiedades.flujo === "torre" ||
                            propiedades.casilla_pieza.tipo === "bishop" && propiedades.flujo === "bishop" ||
                            propiedades.casilla_pieza.tipo === "torre" && propiedades.flujo === "torre" ||
                            propiedades.casilla_pieza.tipo === "caballo" && propiedades.flujo === "caballo") {

                            validacion_movimiento_final++;

                        }

                    }

                }

            }

        }

    }

    if(validacion_movimiento_final >= validacion_indicador_movimientos){
        validacion = true;
    }

    return validacion;

}

function debilidades_pieza_atacante(casilla) {

    let validacion = true;
    let casillas_obtenidas = vl_casillas_entorno(casilla, "normal");

    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {

        let informacion = casillas_obtenidas[contador];
        let flujo = informacion[0];
        let detalles = informacion[1];
        let pieza_interna = obtener_hijo_detalles_ID(detalles);
        if (pieza_interna !== false) {
            if (pieza_interna.color === movimiento_actual) {

                if (flujo === "bishop" && pieza_interna.tipo === "reina" || flujo === "bishop" && pieza_interna.tipo === "bishop") {
                    validacion = false;
                    break;
                }

                if (flujo === "torre" && pieza_interna.tipo === "reina" || flujo === "torre" && pieza_interna.tipo === "torre") {
                    validacion = false;
                    break;
                }

                if (flujo === "caballo" && pieza_interna.tipo === "caballo") {
                    validacion = false;
                    break;
                }

                if (flujo === "bishop" && pieza_interna.tipo === "peon") {

                    if (validar_destino_peon(pieza_interna, pos_pieza_jaque) === true) {
                        validacion = false;
                        break;
                    }

                }
            }
        }
    }

    return validacion;

}

function validacion_movimiento_distancia() {
    
}