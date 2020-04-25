function mostrar_premovimiento(posiA, posiB) {

    if (posiA === null || posiA === "" || posiA === undefined || posiB === null || posiB === "" || posiB === undefined) {
        return;
    }

    let casilla_modificar = document.getElementById(`cuadro[${posiA},${posiB}]`);
    let validacionPiezaColocada = casilla_modificar.innerHTML;
    let pre_movimiento_puntero = document.createElement("p");
    let parametros_enviar = {
        propiedad_pantalla: screen.width,
        propiedad_mayor_que: "50% - 140%",
        propiedad_menor_que: "50% - 85%",
    };

    // TELEFONOS PEQUEÑOS
    if (parametros_enviar.propiedad_pantalla < 330) {

        parametros_enviar.propiedad_mayor_que = "50% - 135%";
        parametros_enviar.propiedad_menor_que = "50% - 85%";

        // TELEFONOS NORMAL
    } else if (parametros_enviar.propiedad_pantalla < 450) {

        parametros_enviar.propiedad_mayor_que = "50% - 130%";
        parametros_enviar.propiedad_menor_que = "50% - 70%";

    }

    pre_movimiento_puntero.classList.add("parrafo_pre_movimiento");
    pre_movimiento_puntero.innerHTML = "&#10060;";

    if (/<\/i>/.test(validacionPiezaColocada)) {
        pre_movimiento_puntero.style.top = `calc(${parametros_enviar.propiedad_mayor_que})`;
    } else {
        pre_movimiento_puntero.style.top = `calc(${parametros_enviar.propiedad_menor_que})`;
    }

    casilla_modificar.appendChild(pre_movimiento_puntero);

}

function borrar_premovimiento() {

    let selector = document.querySelectorAll("p");
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
        identificador: separacion[2]

    };
    return propiedades;

}

function obtener_posicion_base_ID(pieza) {

    let string_con_posicion = pieza.parentNode.id.replace("cuadro", "").replace("{", "").replace("}", "").replace("[", "").replace("]", "").split(",");
    let convertir_objeto = {

        posY: parseInt(string_con_posicion[0]),
        posX: parseInt(string_con_posicion[1])

    };
    return convertir_objeto;

}

function crear_coordenadas_casilla(pieza) {

    let string_con_posicion = pieza.id.replace("cuadro", "").replace("{", "").replace("}", "").replace("[", "").replace("]", "").split(",");
    let convertir_objeto = {

        posY: parseInt(string_con_posicion[0]),
        posX: parseInt(string_con_posicion[1])

    };
    return convertir_objeto;

}

function obtener_posicion_pieza_objeto(elemento) {

    let posicion = elemento.parentElement.id.replace("cuadro", "");
    let final = posicion.replace("[", "").replace("]", "").split(",");
    let propiedades = {

        posY: parseInt(final[0]),
        posX: parseInt(final[1])

    };
    return propiedades;

}

function capturar_casilla_padre(hijo) {

    let posicion = hijo.parentElement;
    return posicion;

}

function obtener_hijo_detalles_ID(casilla) {

    if (casilla.childNodes.length > 0) {

        let hijo = casilla.childNodes[0];
        let detalles_ID = obtener_ID_pieza(hijo);
        return detalles_ID;

    }

    return false;

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