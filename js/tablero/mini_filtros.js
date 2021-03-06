function mostrar_premovimiento(posiA, posiB) {

    if (posiA === null || posiA === "" || posiA === undefined || posiB === null || posiB === "" || posiB === undefined) {
        return;
    }

    let casilla_modificar = document.getElementById(`cuadro[${posiA},${posiB}]`);
    let pre_movimiento_puntero = document.createElement("p");
    
    pre_movimiento_puntero.innerHTML = "&#10060;";
    pre_movimiento_puntero.classList.add("pre_movimiento_fijo");

    casilla_modificar.appendChild(pre_movimiento_puntero);

}

function borrar_premovimiento() {

    let selector = document.querySelectorAll("#tablero_principal_ajedrez p");
    if (selector.length > 0) {
        for (let contador = 0; contador < selector.length; contador++) {
            selector[contador].remove();
        }
    }

}

function ubicacion_plano(posicion1, posicion2) {

    if (posicion1 < 1 || posicion1 > 8 || posicion2 < 1 || posicion2 > 8) {
        return false;
    }

    let enviar = {

        target_posY: posicion1,
        target_posX: posicion2

    };

    return enviar;

}

function obtener_posicion(elemento) {

    let posicion = elemento.id.replace("cuadro", "");
    let final = posicion.replace("[", "").replace("]", "").split(",");
    return final;

}

function obtener_posicion_pieza(elemento) {

    let posicion = elemento.parentElement.id.replace("cuadro", "");
    let final = posicion.replace("[", "").replace("]", "").split(",");
    return final;

}

function obtener_ID_pieza(pieza) {

    let separacion = pieza.id.split("_");
    let propiedades = {

        tipo: separacion[0],
        color: separacion[1],
        identificador: separacion[2],

    };
    return propiedades;

}

function crear_objeto_coordenadas(posicion_x, posicion_y) {

    let objeto = {
        posX: parseInt(posicion_x),
        posY: parseInt(posicion_y)
    };
    return objeto;
    
}

function obtener_posicion_base_ID(pieza) {

    let string_con_posicion = obtener_coordenadas_base_id(pieza.parentNode.id)
    return crear_objeto_coordenadas(string_con_posicion[1], string_con_posicion[0]);

}

function crear_coordenadas_casilla(pieza) {

    let string_con_posicion = obtener_coordenadas_base_id(pieza.id);
    return crear_objeto_coordenadas(string_con_posicion[1], string_con_posicion[0]);

}

function obtener_coordenadas_base_id(texto_ingresado) {

    return texto_ingresado.replace("cuadro", "").replace("{", "").replace("}", "").replace("[", "").replace("]", "").split(",");
    
}

function obtener_posicion_pieza_objeto(elemento) {

    let posicion = elemento.parentElement.id.replace("cuadro", "");
    let final = posicion.replace("[", "").replace("]", "").split(",");
    return crear_objeto_coordenadas(final[1], final[0]);

}

function capturar_casilla_padre(hijo) {

    let posicion = hijo.parentElement;
    return posicion;

}

function obtener_hijo_detalles_ID(casilla) {

    let informacion = false;
    if (casilla.childNodes.length > 0) {

        let hijo = casilla.childNodes[0];
        let detalles_ID = obtener_ID_pieza(hijo);
        detalles_ID.coordenadas = crear_coordenadas_casilla(casilla);
        informacion = detalles_ID;

    }

    return informacion;

}

function detectar_hijo_casilla(casilla) {

    let validacion = false;
    if(casilla.childNodes.length > 0){
        validacion = true;
    }
    return validacion;
    
}

function coordenadas_cartesianas(nuevo_posY, nuevo_posX, casos) {

    let cuadrantes = [

        "",
        "I",
        "II",
        "III",
        "IV"

    ];
    let propiedades = {

        targetPosX: nuevo_posX,
        targetPosY: nuevo_posY,
        posicion_plano: cuadrantes[casos]

    };
    return propiedades;

}

function cambiar_turno(pieza_jugada) {

    if (pieza_jugada == ggValidaciones[0]) {

        movimiento_actual = ggValidaciones[1];

    } else {

        movimiento_actual = ggValidaciones[0];

    }

}

function deshabilitar_enroque(pieza_jugada) {

    if (pieza_jugada == "rey" && movimiento_actual == ggValidaciones[0]) {

        enroque_negro = [false, false];

    } else if (pieza_jugada == "rey" && movimiento_actual == ggValidaciones[1]) {

        enroque_blanco = [false, false];

    }

}

function filtrar_calculos_obtenidos_para_mostrar(posY, posX) {

    let nueva_casilla = document.getElementById(`cuadro[${posY},${posX}]`);
    if (nueva_casilla.childNodes.length > 0) {
        let colorsito = nueva_casilla.childNodes[0].id.split("_");
        if (colorsito[1] == movimiento_actual) {
            return "cortalo";
        } else {
            mostrar_premovimiento(posY, posX);
            return "cortalo";
        }
    } else {
        mostrar_premovimiento(posY, posX);
        return "normal";
    }

}

function activar_doble_paso(posicion) {

    peon_al_paso.estatus = true;
    peon_al_paso.posX    = posicion.targetPosX;
    peon_al_paso.posY    = posicion.targetPosY;
    peon_al_paso.by      = movimiento_actual;

}

function desactivar_doble_paso() {

    peon_al_paso.estatus     = false;
    peon_al_paso.peon_pasado = false;
    peon_al_paso.posX        = 0;
    peon_al_paso.posY        = 0;

}

function asignar_data_objeto(objeto_completo) {
    let nuevo = {};
    let data = Object.keys(objeto_completo);
    for (let iterator of data) {
        nuevo[iterator] = objeto_completo[iterator];
    }
    return nuevo;
}

function crear_casilla_data(coordenadas) {
    
    let retornar = false;

    if(coordenadas.posX !== 0 && coordenadas.posY !== 0){
        retornar = document.getElementById(`cuadro[${coordenadas.posY},${coordenadas.posX}]`);
    }
    
    return retornar;
    
}

function crear_pieza(coordenadas) {

    if(coordenadas.posX === 0 || coordenadas.posY === 0){
        return false;
    }

    let casilla = document.getElementById(`cuadro[${coordenadas.posY},${coordenadas.posX}]`);
    let nueva_pieza = obtener_hijo_detalles_ID(casilla);
    return nueva_pieza;
    
}

function crear_pieza_hibrida(local_pieza) {

    let pieza = document.getElementById(`${local_pieza.tipo}_${local_pieza.color}_${local_pieza.identificador}`);
    let casilla = obtener_posicion_pieza_objeto(pieza);
    return casilla;
    
}

function comprobar_peon_al_paso(destino, indicador) {

    let validacion = false;
    let array_BOOL = [false, false];

    if (destino.posY === peon_al_paso.posY) {

        let flujo = 0;

        if (movimiento_actual === ggValidaciones[1]) {
            flujo = -1;
        } else {
            flujo = 1;
        }

        let casilla = { posiA: { posX: 0, poxY: 0 }, posiB: { posX: 0, poxY: 0 } };
        let posible_peon_al_paso1 = document.getElementById(`cuadro[${destino.posY},${destino.posX - 1}]`);
        let posible_peon_al_paso2 = document.getElementById(`cuadro[${destino.posY},${destino.posX + 1}]`);

        if (posible_peon_al_paso1 !== null) {
            casilla.posiA = crear_coordenadas_casilla(posible_peon_al_paso1);
        }

        if (posible_peon_al_paso1 !== null) {
            casilla.posiB = crear_coordenadas_casilla(posible_peon_al_paso2);
        }

        if (peon_al_paso.posX === casilla.posiA.posX && peon_al_paso.posY === casilla.posiA.posY) {
            array_BOOL[0] = true; 
        }

        if (peon_al_paso.posX === casilla.posiB.posX && peon_al_paso.posY === casilla.posiB.posY) {
            array_BOOL[1] = true;
        }

        if (indicador === "pre" && array_BOOL[0] === true || array_BOOL[1] === true) {
            mostrar_premovimiento(peon_al_paso.posY - (flujo), peon_al_paso.posX);
        }

        if (indicador === "normal") {

            if(array_BOOL[0] === true){
                validacion = true;
                posible_peon_al_paso1.childNodes[0].remove();
            }

            if(array_BOOL[1] === true){
                validacion = true;
                posible_peon_al_paso2.childNodes[0].remove();
            }

        }

    }

    return validacion;

}

/*

    FILTROS MOVIMIENTOS DISTANTES

*/

function filtrar_movimientos_alfil(localizacion, saltos, cuadrante) {

    let indicador = false;

    switch (cuadrante) {
        case "cuadranteI":
            for (let contador = 1; contador <= saltos; contador++) {

                let validarY = localizacion.posY + contador;
                let validarX = localizacion.posX + contador;
                let casilla_validar = document.getElementById(`cuadro[${validarY},${validarX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (localizacion.targetPosY == validarY && localizacion.targetPosX == validarX && casilla_validar.childNodes[0].style.color != localizacion.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }

            break;
        case "cuadranteII":
            for (let contador = 1; contador <= saltos; contador++) {

                let validarY = localizacion.posY + contador;
                let validarX = localizacion.posX - contador;
                let casilla_validar = document.getElementById(`cuadro[${validarY},${validarX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (localizacion.targetPosY == validarY && localizacion.targetPosX == validarX && casilla_validar.childNodes[0].style.color != localizacion.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }

            break;
        case "cuadranteIII":
            for (let contador = 1; contador <= saltos; contador++) {

                let validarY = localizacion.posY - contador;
                let validarX = localizacion.posX - contador;
                let casilla_validar = document.getElementById(`cuadro[${validarY},${validarX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (localizacion.targetPosY == validarY && localizacion.targetPosX == validarX && casilla_validar.childNodes[0].style.color != localizacion.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }

            break;
        case "cuadranteIV":
            for (let contador = 1; contador <= saltos; contador++) {

                let validarY = localizacion.posY - contador;
                let validarX = localizacion.posX + contador;
                let casilla_validar = document.getElementById(`cuadro[${validarY},${validarX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (localizacion.targetPosY == validarY && localizacion.targetPosX == validarX && casilla_validar.childNodes[0].style.color != localizacion.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }

            break;
        default:
            break;
    }

    return indicador;

}

function filtrar_movimientos_torre(posicionamiento, movimiento) {

    let indicador = false;
    let saltosVerticalArriba = posicionamiento.targetPosY - posicionamiento.posY;
    let saltosVerticalAbajo = posicionamiento.posY - posicionamiento.targetPosY;
    let saltosHorizontalArriba = posicionamiento.targetPosX - posicionamiento.posX;
    let saltosHorizontalAbajo = posicionamiento.posX - posicionamiento.targetPosX;

    if (movimiento == "vertical") {

        for (let contador = 1; contador <= saltosVerticalArriba; contador++) {

            if (posicionamiento.posY < posicionamiento.targetPosY) {

                let validarY = posicionamiento.posY + contador;
                let casilla_validar = document.getElementById(`cuadro[${validarY},${posicionamiento.posX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (posicionamiento.targetPosY == validarY && casilla_validar.childNodes[0].style.color != posicionamiento.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }

        }

        for (let contador = 1; contador <= saltosVerticalAbajo; contador++) {

            if (posicionamiento.posY > posicionamiento.targetPosY) {

                let validarY = posicionamiento.posY - contador;
                let casilla_validar = document.getElementById(`cuadro[${validarY},${posicionamiento.posX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (posicionamiento.targetPosY == validarY && casilla_validar.childNodes[0].style.color != posicionamiento.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }

        }

    } else if (movimiento == "horizontal") {

        for (let contador = 1; contador <= saltosHorizontalArriba; contador++) {

            if (posicionamiento.posX < posicionamiento.targetPosX) {

                let validarX = posicionamiento.posX + contador;
                let casilla_validar = document.getElementById(`cuadro[${posicionamiento.posY},${validarX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (posicionamiento.targetPosX == validarX && casilla_validar.childNodes[0].style.color != posicionamiento.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }

        }

        for (let contador = 1; contador <= saltosHorizontalAbajo; contador++) {

            if (posicionamiento.posX > posicionamiento.targetPosX) {

                let validarX = posicionamiento.posX - contador;
                let casilla_validar = document.getElementById(`cuadro[${posicionamiento.posY},${validarX}]`);

                if (casilla_validar.childNodes.length > 0) {
                    if (posicionamiento.targetPosX == validarX && casilla_validar.childNodes[0].style.color != posicionamiento.flujo) {
                        indicador = false;
                        break;
                    }
                    indicador = true;
                    break;
                }

            }


        }

    }

    return indicador;

}

function filtrar_coordenadas_peon_jaquemate(monarca_coordenadas, peon_coordenadas) {

    let validacion = false;

    let new_pos_peon = {
        pos_Y_modificada: peon_coordenadas.posY,
        pos_X_modificada_minus: peon_coordenadas.posX,
        pos_X_modificada_plus: peon_coordenadas.posX
    };

    if (movimiento_actual === ggValidaciones[1]) {
        new_pos_peon.pos_Y_modificada -= 1;
    } else if (movimiento_actual === ggValidaciones[0]) {
        new_pos_peon.pos_Y_modificada += 1;
    }

    new_pos_peon.pos_X_modificada_minus -= 1;
    new_pos_peon.pos_X_modificada_plus += 1;

    if ((monarca_coordenadas.posX === new_pos_peon.pos_X_modificada_minus || monarca_coordenadas.posX === new_pos_peon.pos_X_modificada_plus) &&
        monarca_coordenadas.posY === new_pos_peon.pos_Y_modificada) {

        validacion = true;

    }

    return validacion;
}