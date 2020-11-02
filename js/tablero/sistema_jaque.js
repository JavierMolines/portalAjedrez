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

        pos_pieza_jaque = obtener_posicion_pieza_objeto(pieza);
        pos_jaque_rey = crear_coordenadas_casilla(casilla_jaque);
        let mensaje_jaque = `${tipo_pieza[0].toUpperCase()} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_detectada[0]} ${coincidencia_detectada[1]}`;
        let color_respaldo = casilla_jaque.style.backgroundColor;
        casilla_jaque.style.backgroundColor = "red";
        jaque = rey_en_jaque;

        // REGRESAR COLOR
        setTimeout(() => {
            casilla_jaque.style.backgroundColor = color_respaldo;
        }, 800);

    } else {
        jaque = rey_en_jaque;
    }

}

function detectar_jaque(pieza_en_movimiento, casilla_destino, flujo_jaque) {

    let validacion = false;
    let local_pieza = obtener_ID_pieza(pieza_en_movimiento);
    let casillas_obtenidas = vl_casillas_entorno(casilla_destino, "normal");

    if (flujo_jaque === true) {

        if (local_pieza.tipo === "rey") {

            // VALIDAR HUIDA DEL REY
            casillas_obtenidas = vl_casillas_entorno(casilla_destino, local_pieza);
            validacion = vl_casillas_capturadas(casillas_obtenidas, local_pieza, casilla_destino, flujo_jaque);

        } else {

            // VALIDAR PROTECCION DEL REY
            validacion = validar_interaccion_pieza_defensora(casilla_destino);

        }

    } else {

        // VALIDAR MOVIMIENTO DE OTRA PIEZA PARA NO PRODUCIR JAQUE
        let local_pieza_casilla = capturar_casilla_padre(pieza_en_movimiento);
        casillas_obtenidas = vl_casillas_entorno(local_pieza_casilla, "normal");
        validacion = vl_casillas_capturadas(casillas_obtenidas, local_pieza, casilla_destino, flujo_jaque);

    }

    return validacion;

}

function validar_interaccion_pieza_defensora(casilla_destino) {

    let pieza_bloqueadora_a = false;
    let pieza_bloqueadora_b = false;
    let contenedor = [];
    let pieza_target = crear_coordenadas_casilla(casilla_destino);
    let pieza_destino_comer = obtener_hijo_detalles_ID(casilla_destino);
    let validation = true;

    // PERMITIR COMER SI LA PIEZA A CAPTURAR ES LA DEL JAQUE
    if (pieza_destino_comer !== false &&
        pos_pieza_jaque.posY === pieza_destino_comer.coordenadas.posY &&
        pos_pieza_jaque.posX === pieza_destino_comer.coordenadas.posX) {
        return false;
    }

    let destino_posibles = ["VERTICAL", "HORIZONTAL", "BARRA-NORMAL", "BARRA-INVERTIDA"];
    for (let index = 0; index < destino_posibles.length; index++) {
        pieza_bloqueadora_a = false;
        pieza_bloqueadora_b = false;
        for (let contador_interno = 1; contador_interno <= 8; contador_interno++) {

            // DEFINIR VARIABLE
            let linea_seguir = {
                posicion_positivo: {
                    posX: 0,
                    posY: 0
                },
                posicion_negativo: {
                    posX: 0,
                    posY: 0
                }
            };

            // INDICADOR DE FLUJO A SEGUIR, PUEDE SER ALFIL O TORRE
            let destinos_indicador = destino_posibles[index];
            switch (destinos_indicador) {
                case destino_posibles[0]:
                    // FLUJO 1
                    linea_seguir.posicion_positivo.posX = pieza_target.posX;
                    linea_seguir.posicion_positivo.posY = pieza_target.posY + contador_interno;
                    linea_seguir.posicion_negativo.posX = pieza_target.posX;
                    linea_seguir.posicion_negativo.posY = pieza_target.posY - contador_interno;
                    break;
                case destino_posibles[1]:
                    // FLUJO 2
                    linea_seguir.posicion_positivo.posX = pieza_target.posX + contador_interno;
                    linea_seguir.posicion_positivo.posY = pieza_target.posY;
                    linea_seguir.posicion_negativo.posX = pieza_target.posX - contador_interno;
                    linea_seguir.posicion_negativo.posY = pieza_target.posY;
                    break;
                case destino_posibles[2]:
                    // FLUJO 3
                    linea_seguir.posicion_positivo.posX = pieza_target.posX + contador_interno;
                    linea_seguir.posicion_positivo.posY = pieza_target.posY + contador_interno;
                    linea_seguir.posicion_negativo.posX = pieza_target.posX - contador_interno;
                    linea_seguir.posicion_negativo.posY = pieza_target.posY - contador_interno;
                    break;
                case destino_posibles[3]:
                    // FLUJO 4
                    linea_seguir.posicion_positivo.posX = pieza_target.posX - contador_interno;
                    linea_seguir.posicion_positivo.posY = pieza_target.posY + contador_interno;
                    linea_seguir.posicion_negativo.posX = pieza_target.posX + contador_interno;
                    linea_seguir.posicion_negativo.posY = pieza_target.posY - contador_interno;
                    break;
            }

            if (linea_seguir.posicion_negativo.posY > 0 &&
                linea_seguir.posicion_negativo.posY < 9 &&
                linea_seguir.posicion_negativo.posX > 0 &&
                linea_seguir.posicion_negativo.posX < 9) {
                if (pieza_bloqueadora_a === false) {
                    let destino = document.getElementById(`cuadro[${linea_seguir.posicion_negativo.posY},${linea_seguir.posicion_negativo.posX}]`);
                    let formato = { destinos_indicador: destinos_indicador, casilla: destino };
                    contenedor.push(formato);
                    if (detectar_hijo_casilla(destino) === true) {
                        pieza_bloqueadora_a = true;
                    };
                }
            }

            if (linea_seguir.posicion_positivo.posY > 0 &&
                linea_seguir.posicion_positivo.posY < 9 &&
                linea_seguir.posicion_positivo.posX > 0 &&
                linea_seguir.posicion_positivo.posX < 9) {
                if (pieza_bloqueadora_b === false) {
                    let destino = document.getElementById(`cuadro[${linea_seguir.posicion_positivo.posY},${linea_seguir.posicion_positivo.posX}]`);
                    let formato = { destinos_indicador: destinos_indicador, casilla: destino };
                    contenedor.push(formato);
                    if (detectar_hijo_casilla(destino) === true) {
                        pieza_bloqueadora_b = true;
                    };
                }
            }
        }
    }

    if(contenedor.length > 0){
        if(proteger_rey(contenedor) === true){
            validation = false;
        }
    }

    return validation;

}

function proteger_rey(contenedor) {

    let validacion = false;
    let vl_monarca = false;
    let vl_atancate = false;
    let flujo_monarca = "";
    let flujo_atacante = "";

    for (let contador = 0; contador < contenedor.length; contador++) {

        let informacion = contenedor[contador];
        let pieza_detectada = obtener_hijo_detalles_ID(informacion.casilla);

        if (pieza_detectada !== false) {

            if (pieza_detectada.coordenadas.posX === pos_jaque_rey.posX &&
                pieza_detectada.coordenadas.posY === pos_jaque_rey.posY) {
                vl_monarca = true;
                flujo_monarca = informacion.destinos_indicador;
            }

            if (pieza_detectada.coordenadas.posX === pos_pieza_jaque.posX &&
                pieza_detectada.coordenadas.posY === pos_pieza_jaque.posY) {
                vl_atancate = true;
                flujo_atacante = informacion.destinos_indicador;

            }

        }

    }

    if (vl_atancate === true && vl_monarca === true && flujo_monarca === flujo_atacante) {
        validacion = true;
    }

    return validacion;

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

    let monarca = {
        flujo: "",
        detectado: false,
        coordenadas: {},
    };

    let coincidencias = [];
    let validacion = false;
    let casillas_nuevas = vl_casillas_entorno(casilla_destino, local_pieza);
    let propiedades_validadas = obtener_propiedades(casillas_obtenidas, local_pieza);

    coincidencias = propiedades_validadas.array_coincidencias;
    monarca.detectado = propiedades_validadas.monarca_detectado;
    monarca.flujo = propiedades_validadas.monarca_flujo;
    monarca.coordenadas = propiedades_validadas.coordenadas;

    for (let contador = 0; contador < coincidencias.length; contador++) {

        let enemigo = coincidencias[contador];
        let distancia = validar_posiciones_jaque_indirecto_continuo_distante(monarca, enemigo);
        if (distancia === true && monarca.detectado === true && monarca.flujo === enemigo.detalles.tipo && enemigo.detalles.tipo === enemigo.movimiento) {
            validacion = true;
            break;
        }

    }

    if (validacion === true) {

        let propiedades_nuevas = obtener_propiedades(casillas_nuevas, local_pieza);
        let pieza_detectada = obtener_hijo_detalles_ID(casilla_destino);
        validacion = saber_si_es_valido_moverse(propiedades_validadas, propiedades_nuevas, pieza_detectada);

    }

    return validacion;
}

function validar_posiciones_jaque_indirecto_continuo_distante(monarca, enemigo) {

    let validacion = false;

    if (monarca.detectado === true && monarca.flujo === enemigo.movimiento) {

        if (enemigo.movimiento === "caballo") {

            if (monarca.coordenadas.posY === enemigo.coordenadas.posY && monarca.coordenadas.posX === enemigo.coordenadas.posX) {
                validacion = true;
            }

        } else if (enemigo.movimiento === "bishop") {

            let calculoY = monarca.coordenadas.posY - enemigo.coordenadas.posY;
            let calculoX = monarca.coordenadas.posX - enemigo.coordenadas.posX;

            if (Math.sign(calculoY) === -1) {
                calculoY *= -1;
            }
            if (Math.sign(calculoX) === -1) {
                calculoX *= -1;
            }
            if (calculoY === calculoX) {
                validacion = true;
            }

        } else if (enemigo.movimiento === "torre") {

            if (monarca.coordenadas.posY === enemigo.coordenadas.posY) {
                validacion = true;
            }

            if (monarca.coordenadas.posX === enemigo.coordenadas.posX) {
                validacion = true;
            }

        }

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
                if (informacion.coordenadas.posX === pieza_detectada.coordenadas.posX &&
                    informacion.coordenadas.posY === pieza_detectada.coordenadas.posY) {
                    validacion = false;
                    break;
                } else {
                    break;
                }
            }

            // SI SE MUEVE DENTRO DEL RANGO
            if (propiedades_nuevas.array_coincidencias.length > 0) {

                for (let contador_interno = 0; contador_interno < propiedades_nuevas.array_coincidencias.length; contador_interno++) {

                    let informacion_nueva = propiedades_nuevas.array_coincidencias[contador_interno];

                    if (informacion.detalles.identificador === informacion_nueva.detalles.identificador &&
                        informacion.detalles.respaldo === informacion_nueva.detalles.respaldo &&
                        informacion.detalles.color === informacion_nueva.detalles.color &&
                        informacion.detalles.tipo === informacion_nueva.detalles.tipo) {
                        validacion = false;
                        break;

                    }

                }

            }

        }

    }

    return validacion;

}

function obtener_propiedades(casillas_obtenidas, local_pieza) {

    let validacion_completa = {
        monarca_detectado: false,
        monarca_flujo: "",
        coordenadas: {},
        array_coincidencias: []
    };

    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {

        let informacion = casillas_obtenidas[contador];
        let accion = informacion[0];
        let casilla = informacion[1];
        let casilla_detalles = crear_coordenadas_casilla(casilla);

        if (casilla.childNodes.length > 0) {

            let impermeable = casilla.childNodes[0];
            let propiedades = obtener_ID_pieza(impermeable);
            propiedades.respaldo = propiedades.tipo;

            if (propiedades.tipo === "reina" && accion === "bishop" || propiedades.tipo === "reina" && accion === "torre") {
                propiedades.tipo = accion;
            }

            if(propiedades.tipo === "peon" && accion === "bishop" && propiedades.color !== local_pieza.color){
                let detectar_peon_nuevo = obtener_hijo_detalles_ID(casilla); 
                let casilla_final = crear_pieza_hibrida(local_pieza);
                if(validar_destino_peon(detectar_peon_nuevo, casilla_final) === true){
                    propiedades.tipo = accion;
                }
            }

            if (accion === propiedades.tipo && propiedades.color !== local_pieza.color) {

                let enemigo = {
                    movimiento: accion,
                    detalles: propiedades,
                    coordenadas: casilla_detalles
                };

                validacion_completa.array_coincidencias.push(enemigo);
            }

            if (propiedades.tipo === "rey" && propiedades.color === local_pieza.color) {
                validacion_completa.monarca_flujo = accion;
                validacion_completa.monarca_detectado = true;
                validacion_completa.coordenadas = casilla_detalles;
            }

        }

    }

    return validacion_completa;

}

function rey_saque(pieza_en_movimiento, casilla) {

    let validacion = false;
    let obtener_rey = obtener_ID_pieza(pieza_en_movimiento);
    let casillas_obtenidas = vl_casillas_entorno(casilla, "normal");
    let casillas_validadas = obtener_propiedades(casillas_obtenidas, obtener_rey);

    for (let contador = 0; contador < casillas_validadas.array_coincidencias.length; contador++) {
        let propiedades = casillas_validadas.array_coincidencias[contador];
        if (propiedades.movimiento === propiedades.detalles.tipo && obtener_rey.color !== propiedades.detalles.color) {
            validacion = true;
            break;
        }
    }

    return validacion;

}

function validar_destino_peon(pieza_interna, pieza_destino) {

    let validacion = false;

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

    if ((pieza_destino.posX === new_pos_peon.pos_X_modificada_minus || pieza_destino.posX === new_pos_peon.pos_X_modificada_plus) &&
        pieza_destino.posY === new_pos_peon.pos_Y_modificada) {

        validacion = true;

    }

    return validacion;

}

function vl_casillas_entorno(casilla_destino, local_pieza) {

    let casillas_obtenidas = [];
    let cuadrantes = ["I", "II", "III", "IV"];
    let posicion = casilla_destino.id.replace("cuadro", "");
    let final = posicion.replace("[", "").replace("]", "").split(",");
    let localizacion = { posY: parseInt(final[0]), posX: parseInt(final[1]) };
    let posiciones_caballo = { cuerpo_positivo: 2, cuerpo_negativo: -2, cabeza_positivo: 1, cabeza_negativo: -1 };

    let flujo = "torre";

    // VERTICAL Y HORIZONTAL
    for (let indicador = 0; indicador < 4; indicador++) {
        for (let movimientos = 1; movimientos < 9; movimientos++) {

            let new_posY = 0;
            let new_posX = 0;

            switch (cuadrantes[indicador]) {
                case "I":
                    new_posX = localizacion.posX + movimientos;
                    new_posY = localizacion.posY;
                    break;
                case "II":
                    new_posX = localizacion.posX - movimientos;
                    new_posY = localizacion.posY;
                    break;
                case "III":
                    new_posX = localizacion.posX;
                    new_posY = localizacion.posY + movimientos;
                    break;
                case "IV":
                    new_posX = localizacion.posX;
                    new_posY = localizacion.posY - movimientos;
                    break;
            }

            if (new_posX > 0 && new_posX < 9 && new_posY > 0 && new_posY < 9) {
                let cuadro = document.getElementById(`cuadro[${new_posY},${new_posX}]`);
                let existencia = comprobar_saltos_nueva_pieza(cuadro, local_pieza);
                if (existencia === true) {
                    continue;
                }
                let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
                if (vl === true) {
                    break;
                }
            }
        }
    }

    flujo = "bishop";

    // DIAGONAL
    for (let indicador = 0; indicador < 4; indicador++) {
        for (let movimientos = 1; movimientos < 9; movimientos++) {

            let new_posY = 0;
            let new_posX = 0;

            switch (cuadrantes[indicador]) {
                case "I":
                    new_posX = localizacion.posX + movimientos;
                    new_posY = localizacion.posY + movimientos;
                    break;
                case "II":
                    new_posX = localizacion.posX - movimientos;
                    new_posY = localizacion.posY + movimientos;
                    break;
                case "III":
                    new_posX = localizacion.posX - movimientos;
                    new_posY = localizacion.posY - movimientos;
                    break;
                case "IV":
                    new_posX = localizacion.posX + movimientos;
                    new_posY = localizacion.posY - movimientos;
                    break;
            }

            if (new_posX > 0 && new_posX < 9 && new_posY > 0 && new_posY < 9) {
                let cuadro = document.getElementById(`cuadro[${new_posY},${new_posX}]`);
                let existencia = comprobar_saltos_nueva_pieza(cuadro, local_pieza);
                if (existencia === true) {
                    continue;
                }
                let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
                if (vl === true) {
                    break;
                }
            }
        }
    }

    flujo = "caballo";

    // CABALLO
    for (let indicador = 0; indicador < 4; indicador++) {
        for (let direcciones = 0; direcciones < 2; direcciones++) {

            let new_posY = 0;
            let new_posX = 0;
            let sumador = 0;

            if (direcciones === 0) {
                sumador = posiciones_caballo.cabeza_positivo;
            } else {
                sumador = posiciones_caballo.cabeza_negativo;
            }

            switch (indicador) {
                case 0: // ARRIBA
                    new_posY = localizacion.posY + posiciones_caballo.cuerpo_positivo;
                    new_posX = localizacion.posX + sumador;
                    break;
                case 1: // ABAJO
                    new_posY = localizacion.posY + posiciones_caballo.cuerpo_negativo;
                    new_posX = localizacion.posX + sumador;
                    break;
                case 2: // DERECHA
                    new_posY = localizacion.posY + sumador;
                    new_posX = localizacion.posX + posiciones_caballo.cuerpo_positivo;
                    break;
                case 3: // IZQUIERDA
                    new_posY = localizacion.posY + sumador;
                    new_posX = localizacion.posX + posiciones_caballo.cuerpo_negativo;
                    break;
            }

            let vector = ubicacion_plano(new_posY, new_posX);
            if (vector !== false) {
                let cuadro = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                casillas_obtenidas.push([flujo, cuadro]);
            }
        }
    }

    return casillas_obtenidas;

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

function comprobar_saltos_nueva_pieza(casilla, local_pieza) {

    let validacion = false;

    if (typeof (local_pieza) !== "string") {

        let pieza_validar = obtener_hijo_detalles_ID(casilla);

        if (pieza_validar.tipo === local_pieza.tipo &&
            pieza_validar.color === local_pieza.color &&
            pieza_validar.identificador === local_pieza.identificador) {

            validacion = true;

        }

    }

    return validacion;
}