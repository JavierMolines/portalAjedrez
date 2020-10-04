/*



    ---- SECCION DE PRE MOVIMIENTOS ----



*/

function validar_premovimiento_peon(localizacion, propiedades_pieza) {

    let rango = 1;
    let destino = {
        posX: 0,
        posY: 0
    };

    if (movimiento_actual == ggValidaciones[1]) {
        if (localizacion.posY == 2) {
            rango = 2;
        }
    } else {
        if (localizacion.posY == 7) {
            rango = 2;
        }
    }

    for (let contador = 1; contador <= rango; contador++) {

        if (propiedades_pieza.color == ggValidaciones[1]) {// BLANCAS

            let verificar_posicion_rango = false;
            let nueva_casilla = document.getElementById(`cuadro[${localizacion.posY + contador},${localizacion.posX}]`);
            if (nueva_casilla !== null) {

                if (nueva_casilla.childNodes.length == 0) {
                    mostrar_premovimiento(localizacion.posY + contador, localizacion.posX);
                } else {
                    verificar_posicion_rango = true;
                }

            }

            let nueva_casilla_comer1 = document.getElementById(`cuadro[${localizacion.posY + 1},${localizacion.posX + 1}]`);
            let nueva_casilla_comer2 = document.getElementById(`cuadro[${localizacion.posY + 1},${localizacion.posX - 1}]`);

            if (nueva_casilla_comer1 !== null) {

                if (nueva_casilla_comer1.childNodes.length > 0 && contador < 2) {

                    let pieza_contenida = nueva_casilla_comer1.childNodes[0].id.split("_");
                    if (pieza_contenida[1] != propiedades_pieza.color) {
                        mostrar_premovimiento(localizacion.posY + 1, localizacion.posX + 1);

                    }

                }

            }

            if (nueva_casilla_comer2 !== null) {

                if (nueva_casilla_comer2.childNodes.length > 0 && contador < 2) {

                    let pieza_contenida = nueva_casilla_comer2.childNodes[0].id.split("_");
                    if (pieza_contenida[1] != propiedades_pieza.color) {
                        mostrar_premovimiento(localizacion.posY + 1, localizacion.posX - 1);

                    }

                }

            }

            destino.posX = localizacion.posX;
            destino.posY = localizacion.posY;

            if (verificar_posicion_rango === true) {
                break;
            }

        } else if (propiedades_pieza.color == ggValidaciones[0]) {// NEGRAS

            let verificar_posicion_rango = false;
            let nueva_casilla = document.getElementById(`cuadro[${localizacion.posY - contador},${localizacion.posX}]`);
            if (nueva_casilla !== null) {

                if (nueva_casilla.childNodes.length == 0) {
                    mostrar_premovimiento(localizacion.posY - contador, localizacion.posX);
                } else {
                    verificar_posicion_rango = true;
                }

            }

            let nueva_casilla_comer1 = document.getElementById(`cuadro[${localizacion.posY - 1},${localizacion.posX + 1}]`);
            let nueva_casilla_comer2 = document.getElementById(`cuadro[${localizacion.posY - 1},${localizacion.posX - 1}]`);

            if (nueva_casilla_comer1 !== null) {

                if (nueva_casilla_comer1.childNodes.length > 0 && contador < 2) {

                    let pieza_contenida = nueva_casilla_comer1.childNodes[0].id.split("_");
                    if (pieza_contenida[1] != propiedades_pieza.color) {

                        mostrar_premovimiento(localizacion.posY - 1, localizacion.posX + 1);

                    }

                }

            }

            if (nueva_casilla_comer2 !== null) {

                if (nueva_casilla_comer2.childNodes.length > 0 && contador < 2) {

                    let pieza_contenida = nueva_casilla_comer2.childNodes[0].id.split("_");
                    if (pieza_contenida[1] != propiedades_pieza.color) {

                        mostrar_premovimiento(localizacion.posY - 1, localizacion.posX - 1);

                    }

                }

            }

            destino.posX = localizacion.posX;
            destino.posY = localizacion.posY;

            if (verificar_posicion_rango === true) {
                break;
            }

        }

        if (peon_al_paso.estatus === true) {
            comprobar_peon_al_paso(destino, "pre");
        }

    }
}

function validar_premovimiento_caballo(localizacion, propiedades_pieza) {

    let movimiento_vertical = [
        localizacion.posY + 2,
        localizacion.posY - 2,
        localizacion.posX + 1,
        localizacion.posX - 1
    ];

    let movimiento_horizontal = [
        localizacion.posX + 2,
        localizacion.posX - 2,
        localizacion.posY + 1,
        localizacion.posY - 1
    ];

    for (let index = 0; index < 2; index++) {

        for (let contador = 2; contador < 4; contador++) {

            let vector = ubicacion_plano(movimiento_vertical[index], movimiento_vertical[contador]);
            if (vector !== false) {
                let nueva_casilla = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                if (nueva_casilla.childNodes.length > 0) {
                    let color_pieza = nueva_casilla.childNodes[0].id.split("_");
                    if (color_pieza[1] == propiedades_pieza.color) {
                        continue;
                    }
                    mostrar_premovimiento(vector.target_posY, vector.target_posX);
                } else {
                    mostrar_premovimiento(vector.target_posY, vector.target_posX);
                }
            }

        }

    }

    for (let index = 0; index < 2; index++) {

        for (let contador = 2; contador < 4; contador++) {

            let vector = ubicacion_plano(movimiento_horizontal[contador], movimiento_horizontal[index]);
            if (vector !== false) {
                let nueva_casilla = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                if (nueva_casilla.childNodes.length > 0) {
                    let color_pieza = nueva_casilla.childNodes[0].id.split("_");
                    if (color_pieza[1] == propiedades_pieza.color) {
                        continue;
                    }
                    mostrar_premovimiento(vector.target_posY, vector.target_posX);
                } else {
                    mostrar_premovimiento(vector.target_posY, vector.target_posX);
                }
            }

        }

    }
}

function validar_premovimiento_bishop(localizacion, propiedades_pieza) {

    for (let move = 1; move < 8; move++) {

        if (localizacion.posY + move < 9 && localizacion.posX + move < 9) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY + move, localizacion.posX + move);
            if (resultado == "cortalo") {
                break;
            }

        }

    }

    for (let move = 1; move < 8; move++) {

        if (localizacion.posY + move < 9 && localizacion.posX - move > 0) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY + move, localizacion.posX - move);
            if (resultado == "cortalo") {
                break;
            }

        }

    }

    for (let move = 1; move < 8; move++) {

        if (localizacion.posY - move > 0 && localizacion.posX - move > 0) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY - move, localizacion.posX - move);
            if (resultado == "cortalo") {
                break;
            }

        }

    }

    for (let move = 1; move < 8; move++) {

        if (localizacion.posY - move > 0 && localizacion.posX + move < 9) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY - move, localizacion.posX + move);
            if (resultado == "cortalo") {
                break;
            }

        }

    }

}

function validar_premovimiento_torre(localizacion, propiedades_pieza) {

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posX + contador < 9) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY, localizacion.posX + contador);
            if (resultado == "cortalo") {
                break;
            }

        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posX - contador > 0) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY, localizacion.posX - contador);
            if (resultado == "cortalo") {
                break;
            }

        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posY + contador < 9) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY + contador, localizacion.posX);
            if (resultado == "cortalo") {
                break;
            }

        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posY - contador > 0) {

            let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY - contador, localizacion.posX);
            if (resultado == "cortalo") {
                break;
            }

        }
    }

}

function validar_premovimiento_rey(localizacion, propiedades_pieza) {

    let vectorYmas1 = localizacion.posY + 1;
    let vectorXmas1 = localizacion.posX + 1;
    let vectorYmenos1 = localizacion.posY - 1;
    let vectorXmenos1 = localizacion.posX - 1;

    if (vectorYmas1 < 9 && vectorXmas1 < 9) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(vectorYmas1, vectorXmas1);
    }

    if (vectorYmas1 < 9 && vectorXmenos1 > 0) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(vectorYmas1, vectorXmenos1);
    }

    if (vectorYmenos1 > 0 && vectorXmenos1 > 0) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(vectorYmenos1, vectorXmenos1);
    }

    if (vectorYmenos1 > 0 && vectorXmas1 < 9) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(vectorYmenos1, vectorXmas1);
    }

    if (vectorXmas1 < 9) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY, vectorXmas1);
    }

    if (vectorXmenos1 > 0) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(localizacion.posY, vectorXmenos1);
    }

    if (vectorYmas1 < 9) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(vectorYmas1, localizacion.posX);
    }

    if (vectorYmenos1 > 0) {
        let resultado = filtrar_calculos_obtenidos_para_mostrar(vectorYmenos1, localizacion.posX);
    }

    // VALIDACION PARA EL ENROQUE
    if (movimiento_actual == ggValidaciones[1]) {

        if (enroque_blanco[0] === true) {

            for (let contador = 1; contador <= 3; contador++) {
                let casillas_latelares = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX - contador}]`);

                if (casillas_latelares.childNodes.length > 0 && casillas_latelares.childNodes[0].localName !== "p") {
                    break;
                } else {
                    if (contador == 1 || contador == 2) {
                        continue;
                    }
                    mostrar_premovimiento(1, 3);
                }
            }

        }

        if (enroque_blanco[1] === true) {

            for (let contador = 1; contador <= 2; contador++) {
                let casillas_latelares = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX + contador}]`);

                if (casillas_latelares.childNodes.length > 0 && casillas_latelares.childNodes[0].localName !== "p") {
                    break;
                } else {
                    if (contador == 1) {
                        continue;
                    }
                    mostrar_premovimiento(1, 7);
                }

            }

        }

    } else {

        if (enroque_negro[0] === true) {

            for (let contador = 1; contador <= 3; contador++) {
                let casillas_latelares = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX - contador}]`);

                if (casillas_latelares.childNodes.length > 0 && casillas_latelares.childNodes[0].localName !== "p") {
                    break;
                } else {
                    if (contador == 1 || contador == 2) {
                        continue;
                    }
                    mostrar_premovimiento(8, 3);
                }
            }

        }

        if (enroque_negro[1] === true) {

            for (let contador = 1; contador <= 2; contador++) {
                let casillas_latelares = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX + contador}]`);

                if (casillas_latelares.childNodes.length > 0 && casillas_latelares.childNodes[0].localName !== "p") {
                    break;
                } else {
                    if (contador == 1) {
                        continue;
                    }
                    mostrar_premovimiento(8, 7);
                }
            }

        }

    }

}

/*



    ---- SECCION DE MOVIMIENTOS ----



*/
function validar_movimiento_peon(posicionamiento, casilla_destino_final) {

    let casilla_delantera;
    let movimiento_valido = false;
    let enviar_interaccion = [];
    let destino = {
        posX: 0,
        posY: 0,
    };

    if (posicionamiento.flujo == ggValidaciones[1]) {

        casilla_delantera = document.getElementById(`cuadro[${posicionamiento.posY + 1},${posicionamiento.posX}]`);

        if (posicionamiento.posY == 2) {

            if (posicionamiento.targetPosX == posicionamiento.posX) {

                if (posicionamiento.targetPosY == 3 || posicionamiento.targetPosY == 4) {

                    if (casilla_delantera.childNodes.length > 0) {
                        return;
                    }

                    if (posicionamiento.targetPosY == 4) {
                        casilla_delantera = document.getElementById(`cuadro[${posicionamiento.posY + 2},${posicionamiento.posX}]`);
                        if (casilla_delantera.childNodes.length > 0) {
                            return;
                        }
                        activar_doble_paso(posicionamiento);
                    }

                    movimiento_valido = true;
                    enviar_interaccion = [pieza_seleccionada, casilla_destino_final];

                }

            } else if (posicionamiento.posY + 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

            }

        } else {

            if (posicionamiento.targetPosX == posicionamiento.posX) {

                if (posicionamiento.posY + 1 == posicionamiento.targetPosY) {

                    if (casilla_delantera.childNodes.length > 0) {
                        return;
                    }

                    movimiento_valido = true;
                    enviar_interaccion = [pieza_seleccionada, casilla_destino_final];

                }

            } else if (posicionamiento.posY + 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

                if (peon_al_paso.estatus === true) {
                    destino.posX = posicionamiento.posX;
                    destino.posY = posicionamiento.posY;
                    if (comprobar_peon_al_paso(destino, "normal") === true) {
                        movimiento_valido = true;
                        enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                    }
                }

            }

        }

    } else if (posicionamiento.flujo == ggValidaciones[0]) {

        casilla_delantera = document.getElementById(`cuadro[${posicionamiento.posY - 1},${posicionamiento.posX}]`);

        if (posicionamiento.posY == 7) {

            if (posicionamiento.targetPosX == posicionamiento.posX) {

                if (posicionamiento.targetPosY == 5 || posicionamiento.targetPosY == 6) {

                    if (casilla_delantera.childNodes.length > 0) {
                        return;
                    }

                    if (posicionamiento.targetPosY == 5) {
                        casilla_delantera = document.getElementById(`cuadro[${posicionamiento.posY - 2},${posicionamiento.posX}]`);
                        if (casilla_delantera.childNodes.length > 0) {
                            return;
                        }
                        activar_doble_paso(posicionamiento);
                    }

                    movimiento_valido = true;
                    enviar_interaccion = [pieza_seleccionada, casilla_destino_final];

                }

            } else if (posicionamiento.posY - 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

            }

        } else {

            if (posicionamiento.targetPosX == posicionamiento.posX) {

                if (posicionamiento.posY - 1 == posicionamiento.targetPosY) {

                    if (casilla_delantera.childNodes.length > 0) {
                        return;
                    }

                    movimiento_valido = true;
                    enviar_interaccion = [pieza_seleccionada, casilla_destino_final];

                }

            } else if (posicionamiento.posY - 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            movimiento_valido = true;
                            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                        }
                    }

                }

                if (peon_al_paso.estatus === true) {
                    destino.posX = posicionamiento.posX;
                    destino.posY = posicionamiento.posY;
                    if (comprobar_peon_al_paso(destino, "normal") === true) {
                        movimiento_valido = true;
                        enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                    }
                }

            }

        }

    }

    if (movimiento_valido === true) {
        interaccion_pieza(enviar_interaccion[0], enviar_interaccion[1]);
    }

}

function validar_movimiento_caballo(posicionamiento, casilla_destino_final) {

    if (posicionamiento.posX + 2 == posicionamiento.targetPosX && posicionamiento.posY + 1 == posicionamiento.targetPosY ||
        posicionamiento.posX + 2 == posicionamiento.targetPosX && posicionamiento.posY - 1 == posicionamiento.targetPosY ||
        posicionamiento.posX - 2 == posicionamiento.targetPosX && posicionamiento.posY + 1 == posicionamiento.targetPosY ||
        posicionamiento.posX - 2 == posicionamiento.targetPosX && posicionamiento.posY - 1 == posicionamiento.targetPosY ||
        posicionamiento.posY + 2 == posicionamiento.targetPosY && posicionamiento.posX + 1 == posicionamiento.targetPosX ||
        posicionamiento.posY + 2 == posicionamiento.targetPosY && posicionamiento.posX - 1 == posicionamiento.targetPosX ||
        posicionamiento.posY - 2 == posicionamiento.targetPosY && posicionamiento.posX + 1 == posicionamiento.targetPosX ||
        posicionamiento.posY - 2 == posicionamiento.targetPosY && posicionamiento.posX - 1 == posicionamiento.targetPosX) {

        interaccion_pieza(pieza_seleccionada, casilla_destino_final);

    }
}

function validar_movimiento_bishop(posicionamiento, casilla_destino_final) {

    let movimiento_valido = false;
    let enviar_interaccion = [];

    for (let direccion = 0; direccion < 4; direccion++) {
        for (let move = 1; move < 8; move++) {

            let calculo_y = 0;
            let calculo_x = 0;
            let cuadrante = "";

            switch (direccion) {
                case 0:
                    cuadrante = "cuadranteI";
                    calculo_x = posicionamiento.posX + move;
                    calculo_y = posicionamiento.posY + move;
                    break;
                case 1:
                    cuadrante = "cuadranteII";
                    calculo_x = posicionamiento.posX - move;
                    calculo_y = posicionamiento.posY + move;
                    break;
                case 2:
                    cuadrante = "cuadranteIII";
                    calculo_x = posicionamiento.posX - move;
                    calculo_y = posicionamiento.posY - move;
                    break;
                case 3:
                    cuadrante = "cuadranteIV";
                    calculo_x = posicionamiento.posX + move;
                    calculo_y = posicionamiento.posY - move;
                    break;
                default:
                    break;
            }

            if (calculo_y == posicionamiento.targetPosY && 
                calculo_x == posicionamiento.targetPosX) {
                let indicador = filtrar_movimientos_alfil(posicionamiento, move, cuadrante);
                if (indicador !== true) {
                    movimiento_valido = true;
                    enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
                    break;
                }
            }
        }
    }

    if (movimiento_valido === true) {

        interaccion_pieza(enviar_interaccion[0], enviar_interaccion[1]);

    }
}

function validar_movimiento_torre(posicionamiento, casilla_destino_final) {

    let movimiento_valido  = false;
    let enviar_interaccion = [];
    let flujo_movimiento   = "";

    if (posicionamiento.posX == posicionamiento.targetPosX) {
        flujo_movimiento = "vertical";
    } else if (posicionamiento.posY == posicionamiento.targetPosY) {
        flujo_movimiento = "horizontal";
    }

    if(flujo_movimiento !== ""){
        let indicador = filtrar_movimientos_torre(posicionamiento, flujo_movimiento);
        if (indicador !== true) {
            movimiento_valido = true;
            enviar_interaccion = [pieza_seleccionada, casilla_destino_final];
        } 
    }

    if (movimiento_valido === true) {

        interaccion_pieza(enviar_interaccion[0], enviar_interaccion[1]);

    }

}

function validar_movimiento_rey(posicionamiento, casilla_destino_final) {

    if (posicionamiento.posY + 1 == posicionamiento.targetPosY && posicionamiento.posX + 1 == posicionamiento.targetPosX ||
        posicionamiento.posY + 1 == posicionamiento.targetPosY && posicionamiento.posX - 1 == posicionamiento.targetPosX ||
        posicionamiento.posY - 1 == posicionamiento.targetPosY && posicionamiento.posX - 1 == posicionamiento.targetPosX ||
        posicionamiento.posY - 1 == posicionamiento.targetPosY && posicionamiento.posX + 1 == posicionamiento.targetPosX ||
        posicionamiento.posY == posicionamiento.targetPosY && posicionamiento.posX + 1 == posicionamiento.targetPosX ||
        posicionamiento.posY == posicionamiento.targetPosY && posicionamiento.posX - 1 == posicionamiento.targetPosX ||
        posicionamiento.posX == posicionamiento.targetPosX && posicionamiento.posY + 1 == posicionamiento.targetPosY ||
        posicionamiento.posX == posicionamiento.targetPosX && posicionamiento.posY - 1 == posicionamiento.targetPosY) {

        interaccion_pieza(pieza_seleccionada, casilla_destino_final);

    } else {  // VALIDAR ENROQUE

        if (posicionamiento.targetPosY == 1 && posicionamiento.targetPosX == 7 && enroque_blanco[1] == true ||
            posicionamiento.targetPosY == 1 && posicionamiento.targetPosX == 3 && enroque_blanco[0] == true || 
            posicionamiento.targetPosY == 8 && posicionamiento.targetPosX == 7 && enroque_negro[1] == true ||
            posicionamiento.targetPosY == 8 && posicionamiento.targetPosX == 3 && enroque_negro[0] == true) {

            let validar_pos = true;
            let divisores   = [];
            let direcciones = posicionamiento.targetPosX == 7 ? 2 : 3;
            let ident_auto  = direcciones == 2 ? 1 : 0;
            let internos    = [
                ["cuadro[8,8]", "cuadro[8,5]", "cuadro[8,7]", "cuadro[8,6]"],   // BLACK RIGHT
                ["cuadro[8,1]", "cuadro[8,5]", "cuadro[8,3]", "cuadro[8,4]"],   // BLACK LEFT
                ["cuadro[1,8]", "cuadro[1,5]", "cuadro[1,7]", "cuadro[1,6]"],   // WHITE RIGHT
                ["cuadro[1,1]", "cuadro[1,5]", "cuadro[1,3]", "cuadro[1,4]"]    // WHITE LEFT
            ];

            if(movimiento_actual == ggValidaciones[1]){
                divisores = ident_auto == 1 ? internos[2] : internos[3];
            } else {
                divisores = ident_auto == 1 ? internos[0] : internos[1];
            }

            for (let contador = 1; contador <= direcciones; contador++) {
                let calculador = direcciones == 2 ? posicionamiento.posX + contador : posicionamiento.posX - contador;
                let pieza_para_validar_contenido = document.getElementById(`cuadro[${posicionamiento.posY},${calculador}]`);
                if (pieza_para_validar_contenido.childNodes.length > 0) {
                    validar_pos = false;
                }
            }

            if(validar_pos){
                let torre = document.getElementById(`torre_${movimiento_actual}_${ident_auto}`);

                document.getElementById(divisores[0]).removeChild(torre);
                document.getElementById(divisores[1]).removeChild(pieza_seleccionada[0]);
                document.getElementById(divisores[2]).appendChild(pieza_seleccionada[0]);
                document.getElementById(divisores[3]).appendChild(torre);

                if(movimiento_actual == ggValidaciones[1]){
                    movimiento_actual = ggValidaciones[0];
                    enroque_blanco = [false, false];
                } else {
                    movimiento_actual = ggValidaciones[1];
                    enroque_negro = [false, false];
                }
            }
        }
    }
}