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

function validar_jaque_iniciado(pieza_en_movimiento, casilla_destino) {

    let validation = false;
    let comer_pieza = false;
    let local_pieza = obtener_ID_pieza(pieza_en_movimiento);
    let local_pieza_enemiga;

    if (casilla_destino.childNodes.length > 0) {
        local_pieza_enemiga = casilla_destino.childNodes[0];
        comer_pieza = true;
    }

    if (local_pieza.tipo === "rey") {
        console.log("ESCAPANDO DEL JAQUE");
        validation = validar_zonas_adjacentes_casilla_jaque(casilla_destino, local_pieza);
    } else {
        console.log("BLOQUEANDO EL JAQUE");
    }

    return validation;

}

function validar_zonas_adjacentes_casilla_jaque(casilla_destino, local_pieza) {

    let posicion = casilla_destino.id.replace("cuadro", "");
    let final = posicion.replace("[", "").replace("]", "").split(",");
    let localizacion = { posY: parseInt(final[0]), posX: parseInt(final[1]) };
    let movimiento_vertical = [localizacion.posY + 2, localizacion.posY - 2, localizacion.posX + 1, localizacion.posX - 1];
    let movimiento_horizontal = [localizacion.posX + 2, localizacion.posX - 2, localizacion.posY + 1, localizacion.posY - 1];
    let colores_rey_chequeo = ["yellow", "blue", "red"];
    let flujo_validacion = false;
    let nockTiming = 2000;
    let casillas_obtenidas = [];

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
                let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
                if (vl === true) {
                    break;
                }
            }
        }
    }

    for (let index = 0; index < 2; index++) {
        for (let contador = 2; contador < 4; contador++) {
            let vector = ubicacion_plano(movimiento_horizontal[contador], movimiento_horizontal[index]);
            if (vector !== false) {
                let cuadro = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                let flujo = "caballo";
                let vl = vl_pieza_interna(cuadro, flujo, casillas_obtenidas);
                if (vl === true) {
                    break;
                }
            }
        }
    }

    console.log("--FLUJO--");
    console.log(local_pieza);

    // MOSTRAR COINCIDENCIAS
    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {
        let captura = capturar_hijo_casilla(casillas_obtenidas[contador], local_pieza);
        if (captura === true) {
            console.log(casillas_obtenidas[contador]);
            flujo_validacion = true;
            break;
        }
    }

    return flujo_validacion;
}

function capturar_hijo_casilla(casilla, curso_del_flujo) {

    let validacion = false;

    if (casilla[1].childNodes.length > 0) {

        let imperneable = casilla[1].childNodes[0];
        let propiedades = obtener_ID_pieza(imperneable);

        if (propiedades.tipo === "reina" && casilla[0] === "bishop" || propiedades.tipo === "reina" && casilla[0] === "torre") {
            propiedades.tipo = casilla[0];
            console.log("MODIFICADO");
        }

        if (curso_del_flujo.color !== propiedades.color && propiedades.tipo === casilla[0]) {

            console.log("JAQUE AGAIN");
            validacion = true;
            return validacion;

        }

    }

    return validacion;

}

function vl_pieza_interna(casilla, flujo, casillas_obtenidas) {

    let cargar = [flujo, casilla];
    casillas_obtenidas.push(cargar);

    if (casilla.childNodes.length > 0) {
        return true;
    }

    return false;

}