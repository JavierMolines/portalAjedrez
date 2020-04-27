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
        pos_jaque_rey = crear_coordenadas_casilla(casilla_jaque);
        let mensaje_jaque = `${tipo_pieza[0].toUpperCase()} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_detectada[0]} ${coincidencia_detectada[1]}`;
        let color_respaldo = casilla_jaque.style.backgroundColor;
        casilla_jaque.style.backgroundColor = "red";
        jaque = rey_en_jaque;

        // REGRESAR COLOR
        setTimeout(() => {
            casilla_jaque.style.backgroundColor = color_respaldo;
        }, 800);

        console.log(mensaje_jaque);

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
            validacion = vl_casillas_capturadas(casillas_obtenidas, local_pieza, casilla_destino, flujo_jaque);

        } else {

            // VALIDAR PROTECCION DEL REY
            validacion = comprobar_casillas_adyacentes_jaque(casillas_obtenidas);

        }

    } else {

        // VALIDAR MOVIMIENTO DE OTRA PIEZA PARA NO PRODUCIR JAQUE
        let local_pieza_casilla = capturar_casilla_padre(pieza_en_movimiento);
        casillas_obtenidas = vl_casillas_entorno(local_pieza_casilla, "normal");
        validacion = vl_casillas_capturadas(casillas_obtenidas, local_pieza, casilla_destino, flujo_jaque);

    }

    return validacion;

}

function comprobar_casillas_adyacentes_jaque(casillas_obtenidas) {

    let validation = true;
    let monarca = {
        detectado: false,
        coordenadas: {},
        flujo: ""
    };

    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {

        let info = casillas_obtenidas[contador];
        let flujo = info[0];
        let target = info[1];

        if (target.childNodes.length > 0) {

            let pieza = obtener_hijo_detalles_ID(target);
            pieza.movimiento = flujo;
            if(pieza.tipo === "rey" && pieza.color === movimiento_actual){
                monarca.detectado = true;
                monarca.coordenadas = pieza.coordenadas;
                monarca.flujo = flujo;
                casillas_obtenidas.splice(contador, 1);
                contador = 0;
            }

            if(monarca.detectado === true && monarca.flujo === pieza.movimiento){

                if(validar_posiciones_jaque_indirecto_continuo_distante(monarca, pieza) === true){
                    validation = false;
                }
    
            }
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

    if(monarca.detectado === true && monarca.flujo === enemigo.movimiento){

        if(enemigo.movimiento === "bishop"){

            let calculoY = monarca.coordenadas.posY - enemigo.coordenadas.posY;
            let calculoX = monarca.coordenadas.posX - enemigo.coordenadas.posX;

            if (Math.sign(calculoY) === -1) {
                calculoY *= -1;
            }
            if (Math.sign(calculoX) === -1) {
                calculoX *= -1;
            }
            if(calculoY === calculoX){
                validacion = true;
            }
    
        } else if(enemigo.movimiento === "torre"){

            if(monarca.coordenadas.posY === enemigo.coordenadas.posY){
                validacion = true;
            }

            if(monarca.coordenadas.posX === enemigo.coordenadas.posX){
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
                    informacion.coordenadas.posY === pieza_detectada.coordenadas.posY ) {
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
                propiedades.respaldo = "reina";
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
        if(propiedades.movimiento === propiedades.detalles.tipo && obtener_rey.color !== propiedades.detalles.color){
            validacion = true;
            break;
        }
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

    if(typeof(local_pieza) !== "string"){

        let pieza_validar = obtener_hijo_detalles_ID(casilla);
    
        if (pieza_validar.tipo === local_pieza.tipo &&
            pieza_validar.color === local_pieza.color &&
            pieza_validar.identificador === local_pieza.identificador) {
    
            validacion = true;
    
        }

    }

    return validacion;
}