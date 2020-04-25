/*



    ---- SECCION JAQUE ----



*/

function comprobar_jaque(pieza) {

    let casilla_jaque;
    let rey_en_jaque = false;
    let tipo_pieza = pieza.id.split("_");
    let localizacion = obtener_posicion_pieza_objeto(pieza);
    let opciones_movimientos = ["", "++", "+-", "--", "-+"];
    let coincidencia_detectada = [];

    if (tipo_pieza[0] === "bishop" || tipo_pieza[0] === "reina") {
        for (let casos = 1; casos <= 4; casos++) {
            for (let contador = 1; contador < 9; contador++) {

                // NUEVAS POSICIONES
                let nuevo_posY = 0;
                let nuevo_posX = 0;
                let posiposi = false;

                switch (opciones_movimientos[casos]) {

                    case "++":
                        nuevo_posY = localizacion.posY + contador;
                        nuevo_posX = localizacion.posX + contador;

                        if (nuevo_posY < 9 && nuevo_posX < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    case "--":
                        nuevo_posY = localizacion.posY - contador;
                        nuevo_posX = localizacion.posX - contador;

                        if (nuevo_posY > 0 && nuevo_posX > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    case "-+":
                        nuevo_posY = localizacion.posY - contador;
                        nuevo_posX = localizacion.posX + contador;

                        if (nuevo_posY > 0 && nuevo_posX < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    case "+-":
                        nuevo_posY = localizacion.posY + contador;
                        nuevo_posX = localizacion.posX - contador;

                        if (nuevo_posY < 9 && nuevo_posX > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    default:
                        console.warn("ALGO NO ESTA BIEN..");
                        break;
                }

                // INSERTAR JAQUE NUEVO
                if (posiposi !== false) {
                    if (posiposi.childNodes.length > 0) {

                        // DAR JAQUE
                        let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                        if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                            coincidencia_detectada = [coincidencia_pieza[0], coincidencia_pieza[1]];
                            rey_en_jaque = true;
                            casilla_jaque = posiposi;
                        } else {

                            contador = 9;

                        }

                    }

                }

            }
        }
    }

    if (tipo_pieza[0] === "torre" || tipo_pieza[0] === "reina") {
        for (let casos = 1; casos <= 4; casos++) {
            for (let contador = 1; contador < 9; contador++) {

                // NUEVAS POSICIONES
                let nuevo_posY = 0;
                let nuevo_posX = 0;
                let posiposi = false;

                switch (opciones_movimientos[casos]) {

                    case "++":
                        nuevo_posY = localizacion.posY + contador;
                        nuevo_posX = localizacion.posX;

                        if (nuevo_posY < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    case "--":
                        nuevo_posY = localizacion.posY - contador;
                        nuevo_posX = localizacion.posX;

                        if (nuevo_posY > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    case "-+":
                        nuevo_posY = localizacion.posY;
                        nuevo_posX = localizacion.posX + contador;

                        if (nuevo_posX < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    case "+-":
                        nuevo_posY = localizacion.posY;
                        nuevo_posX = localizacion.posX - contador;

                        if (nuevo_posX > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                            }

                        }

                        break;

                    default:
                        console.warn("ALGO NO ESTA BIEN..");
                        break;
                }

                // INSERTAR NUEVO JAQUE
                if (posiposi !== false) {
                    if (posiposi.childNodes.length > 0) {

                        // DAR JAQUE
                        let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                        if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                            coincidencia_detectada = [coincidencia_pieza[0], coincidencia_pieza[1]];
                            rey_en_jaque = true;
                            casilla_jaque = posiposi;
                        } else {

                            contador = 9;

                        }

                    }

                }

            }
        }
    }

    if (tipo_pieza[0] === "caballo") {

        for (let contador = 1; contador <= 2; contador++) {

            // MOVIMIENTO ARRIBA Y ABAJO
            if (contador == 1) {
                for (let indice = 1; indice <= 2; indice++) {

                    let nuevo_posY = 0;
                    let nuevo_posX = 0;
                    let vector = {};

                    if (indice == 1) {

                        nuevo_posY = localizacion.posY + 2;

                    } else {

                        nuevo_posY = localizacion.posY - 2;

                    }

                    for (let puntual = 1; puntual <= 2; puntual++) {
                        if (puntual == 1) {

                            nuevo_posX = localizacion.posX + 1;
                            vector = ubicacion_plano(nuevo_posY, nuevo_posX);

                        } else {

                            nuevo_posX = localizacion.posX - 1;
                            vector = ubicacion_plano(nuevo_posY, nuevo_posX);

                        }

                        if (vector !== false) {
                            let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                            if (posiposi.childNodes.length > 0) {

                                // DAR JAQUE
                                let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                    coincidencia_detectada = [coincidencia_pieza[0], coincidencia_pieza[1]];
                                    rey_en_jaque = true;
                                    casilla_jaque = posiposi;
                                }

                            }

                        }

                    }
                }


                // MOVIMIENTO DERECHA Y IZQUIERDA
            } else {

                for (let indice = 1; indice <= 2; indice++) {

                    let nuevo_posY = 0;
                    let nuevo_posX = 0;
                    let vector = {};

                    if (indice == 1) {

                        nuevo_posX = localizacion.posX + 2;

                    } else {

                        nuevo_posX = localizacion.posX - 2;

                    }

                    for (let puntual = 1; puntual <= 2; puntual++) {
                        if (puntual == 1) {

                            nuevo_posY = localizacion.posY + 1;
                            vector = ubicacion_plano(nuevo_posY, nuevo_posX);

                        } else {

                            nuevo_posY = localizacion.posY - 1;
                            vector = ubicacion_plano(nuevo_posY, nuevo_posX);

                        }

                        if (vector !== false) {
                            let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                            if (posiposi.childNodes.length > 0) {

                                // DAR JAQUE
                                let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                    coincidencia_detectada = [coincidencia_pieza[0], coincidencia_pieza[1]];
                                    rey_en_jaque = true;
                                    casilla_jaque = posiposi;
                                }

                            }

                        }

                    }
                }


            }
        }
    }

    if (tipo_pieza[0] === "peon") {

        if (tipo_pieza[1] == ggValidaciones[1]) {

            for (let contador = 1; contador <= 2; contador++) {

                let vector = {};
                let posicion_vertical = localizacion.posY + 1;

                if (contador == 1) {

                    let sumatoria = localizacion.posX + 1;
                    vector = ubicacion_plano(posicion_vertical, sumatoria);

                } else {

                    let sumatoria = localizacion.posX - 1;
                    vector = ubicacion_plano(posicion_vertical, sumatoria);

                }

                if (vector !== false) {
                    let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                    if (posiposi.childNodes.length > 0) {

                        // DAR JAQUE
                        let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                        if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                            coincidencia_detectada = [coincidencia_pieza[0], coincidencia_pieza[1]];
                            rey_en_jaque = true;
                            casilla_jaque = posiposi;
                        }

                    }

                }

            }

        } else {

            for (let contador = 1; contador <= 2; contador++) {

                let vector = {};
                let posicion_vertical = localizacion.posY - 1;

                if (contador == 1) {

                    let sumatoria = localizacion.posX + 1;
                    vector = ubicacion_plano(posicion_vertical, sumatoria);

                } else {

                    let sumatoria = localizacion.posX - 1;
                    vector = ubicacion_plano(posicion_vertical, sumatoria);

                }

                if (vector !== false) {
                    let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                    if (posiposi.childNodes.length > 0) {

                        // DAR JAQUE
                        let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                        if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                            coincidencia_detectada = [coincidencia_pieza[0], coincidencia_pieza[1]];
                            rey_en_jaque = true;
                            casilla_jaque = posiposi;
                        }

                    }

                }

            }

        }

    }

    // SE REALIZO UN JAQUE
    if (rey_en_jaque === true) {

        pieza_del_jaque = obtener_ID_pieza(pieza);
        let mensaje_jaque = `${tipo_pieza[0].toUpperCase()} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_detectada[0]} ${coincidencia_detectada[1]}`;
        let color_respaldo = casilla_jaque.style.backgroundColor;
        casilla_jaque.style.backgroundColor = "red";
        jaque = rey_en_jaque;

        // REGRESAR COLOR
        setTimeout(() => {
            casilla_jaque.style.backgroundColor = color_respaldo;
        }, 1000);

        console.log(mensaje_jaque);

    } else {
        jaque = rey_en_jaque;
    }

}

function detectar_jaque(pieza_en_movimiento, casilla_destino, flujo_jaque) {

    let indicador = 0;
    let validacion = false;
    let local_pieza = obtener_ID_pieza(pieza_en_movimiento);
    let casillas_obtenidas = vl_casillas_entorno(casilla_destino);
    let flujos_mensajes = ["escapando del jaque".toUpperCase(), "bloqueando el jaque".toUpperCase()];

    if (flujo_jaque === true) {

        if (local_pieza.tipo !== "rey") {

            // FLUJO MENSAJE
            indicador = 1;
        }

        if (local_pieza.tipo === "rey") {

            // VALIDAR HUIDA DEL REY
            validacion = vl_casillas_capturadas(casillas_obtenidas, local_pieza, casilla_destino, flujo_jaque);

        } else {

            // VALIDAR PROTECCION DEL REY
            validacion = comprobar_casillas_adyacentes_jaque(casillas_obtenidas);

        }

        let mostrar = { mensaje: flujos_mensajes[indicador], pieza: local_pieza };
        console.log(mostrar);

    } else {

        // VALIDAR MOVIMIENTO DE OTRA PIEZA PARA NO PRODUCIR JAQUE
        let local_pieza_casilla = capturar_casilla_padre(pieza_en_movimiento);
        casillas_obtenidas = vl_casillas_entorno(local_pieza_casilla);
        validacion = vl_casillas_capturadas(casillas_obtenidas, local_pieza, casilla_destino, flujo_jaque);

    }

    return validacion;

}

function comprobar_casillas_adyacentes_jaque(casillas_obtenidas) {

    let vl_torre = [];
    let vl_bisho = [];
    let validation = true;

    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {

        let info = casillas_obtenidas[contador];
        let flujo = info[0];
        let target = info[1];

        if (flujo === "torre" && target.childNodes.length > 0) {
            vl_torre.push(target.childNodes[0]);
        }

        if (flujo === "bishop" && target.childNodes.length > 0) {
            vl_bisho.push(target.childNodes[0]);
        }

    }

    return validation;

}

function vl_casillas_capturadas(casillas_obtenidas, local_pieza, casilla_destino, flujo_jaque) {

    let validacion = false;

    if (flujo_jaque === true) {

        for (let contador = 0; contador < casillas_obtenidas.length; contador++) {
            let informacion = casillas_obtenidas[contador];
            if (comparar_piezas_detectadas_jaque(informacion, local_pieza) === true) {
                validacion = true;
                break;
            }
        }

    } else {

        validacion = comparar_piezas_detectadas_normal(casillas_obtenidas, local_pieza, casilla_destino);

    }

    return validacion;

}

function vl_pieza_interna(casilla, flujo, casillas_obtenidas) {

    let vl = false;
    let cargar = [flujo, casilla];
    casillas_obtenidas.push(cargar);

    if (casilla.childNodes.length > 0) {
        vl = true;
    }

    return vl;

}

function comparar_piezas_detectadas_jaque(casilla, curso_del_flujo) {

    let validacion = false;

    if (casilla[1].childNodes.length > 0) {

        let impermeable = casilla[1].childNodes[0];
        let propiedades = obtener_ID_pieza(impermeable);

        if (propiedades.tipo === "reina" && casilla[0] === "bishop" || propiedades.tipo === "reina" && casilla[0] === "torre") {
            propiedades.tipo = casilla[0];
        }

        if (curso_del_flujo.color !== propiedades.color && propiedades.tipo === casilla[0]) {
            validacion = true;
        }

    }

    return validacion;

}

function comparar_piezas_detectadas_normal(casillas_obtenidas, local_pieza, casilla_destino) {

    let monarca_flujo = "";
    let coincidencias = [];
    let monarca_detectado = false;
    let validacion = false;
    let casillas_nuevas = vl_casillas_entorno(casilla_destino);
    let propiedades_validadas = obtener_propiedades(casillas_obtenidas, local_pieza, "actual");

    coincidencias = propiedades_validadas.array_coincidencias;
    monarca_detectado = propiedades_validadas.monarca_detectado;
    monarca_flujo = propiedades_validadas.monarca_flujo;

    for (let contador = 0; contador < coincidencias.length; contador++) {

        let enemigo = coincidencias[contador];
        if (monarca_detectado === true && monarca_flujo === enemigo.detalles.tipo && enemigo.detalles.tipo === enemigo.movimiento) {
            validacion = true;
            break;
        }

    }

    if (validacion === true) {

        let propiedades_nuevas = obtener_propiedades(casillas_nuevas, local_pieza, "nuevo");
        let pieza_detectada = obtener_hijo_detalles_ID(casilla_destino);
        validacion = saber_si_es_valido_moverse(propiedades_validadas, propiedades_nuevas, pieza_detectada);

    }

    return validacion;
}

function saber_si_es_valido_moverse(propiedades_validadas, propiedades_nuevas, pieza_detectada) {

    let validacion = true;

    if (propiedades_validadas.array_coincidencias.length > 0) {

        for (let contador = 0; contador < propiedades_validadas.array_coincidencias.length; contador++) {

            let informacion = propiedades_validadas.array_coincidencias[contador];

            // SI SE MUEVE COMIENDO UNA PIEZA
            if (pieza_detectada !== false) {
                if (informacion.detalles.tipo === pieza_detectada.tipo &&
                    informacion.detalles.identificador === pieza_detectada.identificador &&
                    informacion.detalles.color === pieza_detectada.color) {

                    validacion = false;
                    break;
                }
            }

            // SI SE MUEVE DENTRO DEL RANGO
            if (propiedades_nuevas.array_coincidencias.length > 0) {

                for (let contador_interno = 0; contador_interno < propiedades_nuevas.array_coincidencias.length; contador_interno++) {

                    let informacion_nueva = propiedades_nuevas.array_coincidencias[contador_interno];

                    if (informacion.tipo === informacion_nueva.tipo &&
                        informacion.identificador === informacion_nueva.identificador &&
                        informacion.color === informacion_nueva.color) {

                        validacion = false;
                        break;

                    }

                }

            }

        }

    }

    return validacion;

}

function obtener_propiedades(casillas_obtenidas, local_pieza, identificador) {

    let validacion_completa = {
        id: identificador,
        monarca_detectado: false,
        monarca_flujo: "",
        array_coincidencias: []
    };

    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {

        let informacion = casillas_obtenidas[contador];
        let accion = informacion[0];
        let casilla = informacion[1];

        if (casilla.childNodes.length > 0) {

            let impermeable = casilla.childNodes[0];
            let propiedades = obtener_ID_pieza(impermeable);

            if (propiedades.tipo === "reina" && accion === "bishop" || propiedades.tipo === "reina" && accion === "torre") {
                propiedades.tipo = accion;
            }

            if (accion === propiedades.tipo && propiedades.color !== local_pieza.color) {

                let enemigo = {
                    movimiento: accion,
                    detalles: propiedades,
                };

                validacion_completa.array_coincidencias.push(enemigo);
            }

            if (propiedades.tipo === "rey" && propiedades.color === local_pieza.color) {
                validacion_completa.monarca_flujo = accion;
                validacion_completa.monarca_detectado = true;
            }

        }

    }

    return validacion_completa;

}

function vl_casillas_entorno(casilla_destino) {

    let casillas_obtenidas = [];
    let posicion = casilla_destino.id.replace("cuadro", "");
    let final = posicion.replace("[", "").replace("]", "").split(",");
    let localizacion = { posY: parseInt(final[0]), posX: parseInt(final[1]) };
    let movimiento_vertical = [localizacion.posY + 2, localizacion.posY - 2, localizacion.posX + 1, localizacion.posX - 1];
    let movimiento_horizontal = [localizacion.posX + 2, localizacion.posX - 2, localizacion.posY + 1, localizacion.posY - 1];

    // VERTICAL Y HORIZONTAL
    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posX + contador < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX + contador}]`);
            let flujo = "torre";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posX - contador > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX - contador}]`);
            let flujo = "torre";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posY + contador < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY + contador},${localizacion.posX}]`);
            let flujo = "torre";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posY - contador > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY - contador},${localizacion.posX}]`);
            let flujo = "torre";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    // DIAGONAL
    for (let move = 1; move < 8; move++) {
        if (localizacion.posY + move < 9 && localizacion.posX + move < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY + move},${localizacion.posX + move}]`);
            let flujo = "bishop";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    for (let move = 1; move < 8; move++) {
        if (localizacion.posY + move < 9 && localizacion.posX - move > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY + move},${localizacion.posX - move}]`);
            let flujo = "bishop";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    for (let move = 1; move < 8; move++) {
        if (localizacion.posY - move > 0 && localizacion.posX - move > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY - move},${localizacion.posX - move}]`);
            let flujo = "bishop";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    for (let move = 1; move < 8; move++) {
        if (localizacion.posY - move > 0 && localizacion.posX + move < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY - move},${localizacion.posX + move}]`);
            let flujo = "bishop";
            let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            if (vl === true) {
                break;
            }
        }
    }

    // CABALLO
    for (let index = 0; index < 2; index++) {
        for (let contador = 2; contador < 4; contador++) {
            let vector = ubicacion_plano(movimiento_vertical[index], movimiento_vertical[contador]);
            if (vector !== false) {
                let cuadro = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                let flujo = "caballo";
                vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            }
        }
    }

    for (let index = 0; index < 2; index++) {
        for (let contador = 2; contador < 4; contador++) {
            let vector = ubicacion_plano(movimiento_horizontal[contador], movimiento_horizontal[index]);
            if (vector !== false) {
                let cuadro = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                let flujo = "caballo";
                vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
            }
        }
    }

    return casillas_obtenidas;

}