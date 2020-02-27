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
                if(posiposi !== false){
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
                if(posiposi !== false){
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

        let mensaje_jaque = `${tipo_pieza[0].toUpperCase()} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_detectada[0]} ${coincidencia_detectada[1]}`;
        let color_respaldo = casilla_jaque.style.backgroundColor;
        casilla_jaque.style.backgroundColor = "red";
        jaque = rey_en_jaque;
            
        // REGRESAR COLOR
        setTimeout(() => {
            casilla_jaque.style.backgroundColor = color_respaldo;
        }, 1000);

        console.log(mensaje_jaque);

    }

}

function validar_zonas_adjacentes_casilla_jaque(pieza_recibida, casilla_destino) {

    let posicion              = casilla_destino.id.replace("cuadro", "");
    let final                 = posicion.replace("[", "").replace("]", "").split(",");
    let localizacion          = { posY: parseInt(final[0]), posX: parseInt(final[1]) };
    let movimiento_vertical   = [ localizacion.posY + 2, localizacion.posY - 2, localizacion.posX + 1, localizacion.posX - 1 ];
    let movimiento_horizontal = [ localizacion.posX + 2, localizacion.posX - 2, localizacion.posY + 1, localizacion.posY - 1 ];
    let colores_rey_chequeo   = ["yellow", "blue", "red"];
    let flujo_validacion      = true;
    let nockTiming            = 2000;
    let casillas_diagonales   = [];
    let casillas_lineales     = [];
    let casillas_ele          = [];

    // VERTICAL Y HORIZONTAL
    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posX + contador < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX + contador}]`);
            casillas_lineales.push(cuadro);
        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posX - contador > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY},${localizacion.posX - contador}]`);
            casillas_lineales.push(cuadro);
        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posY + contador < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY + contador},${localizacion.posX}]`);
            casillas_lineales.push(cuadro);
        }
    }

    for (let contador = 1; contador < 9; contador++) {
        if (localizacion.posY - contador > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY - contador},${localizacion.posX}]`);
            casillas_lineales.push(cuadro);
        }
    }

    // VERTICAL
    for (let move = 1; move < 8; move++) {
        if (localizacion.posY + move < 9 && localizacion.posX + move < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY + move},${localizacion.posX + move}]`);
            casillas_diagonales.push(cuadro);
        }
    }

    for (let move = 1; move < 8; move++) {
        if (localizacion.posY + move < 9 && localizacion.posX - move > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY + move},${localizacion.posX - move}]`);
            casillas_diagonales.push(cuadro);
        }
    }

    for (let move = 1; move < 8; move++) {
        if (localizacion.posY - move > 0 && localizacion.posX - move > 0) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY - move},${localizacion.posX - move}]`);
            casillas_diagonales.push(cuadro);
        }
    }

    for (let move = 1; move < 8; move++) {
        if (localizacion.posY - move > 0 && localizacion.posX + move < 9) {
            let cuadro = document.getElementById(`cuadro[${localizacion.posY - move},${localizacion.posX + move}]`);
            casillas_diagonales.push(cuadro);
        }
    }

    // CABALLO
    for (let index = 0; index < 2; index++) {
        for (let contador = 2; contador < 4; contador++) {
            let vector = ubicacion_plano(movimiento_vertical[index], movimiento_vertical[contador]);
            if (vector !== false) {
                let nueva_casilla = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                casillas_ele.push(nueva_casilla);
            }
        }
    }

    for (let index = 0; index < 2; index++) {
        for (let contador = 2; contador < 4; contador++) {
            let vector = ubicacion_plano(movimiento_horizontal[contador], movimiento_horizontal[index]);
            if (vector !== false) {
                let nueva_casilla = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);
                casillas_ele.push(nueva_casilla);
            }
        }
    }

    // MOSTRAR COINCIDENCIAS
    for (let contador = 0; contador < casillas_lineales.length; contador++) {
        casillas_lineales[contador].style.backgroundColor = colores_rey_chequeo[0];

        setTimeout(() => {
            contenedor_repintar(casillas_lineales[contador]);
        }, nockTiming);
    }

    for (let contador = 0; contador < casillas_diagonales.length; contador++) {
        casillas_diagonales[contador].style.backgroundColor = colores_rey_chequeo[1];

        setTimeout(() => {
            contenedor_repintar(casillas_diagonales[contador]);
        }, nockTiming);
    }

    for (let contador = 0; contador < casillas_ele.length; contador++) {
        casillas_ele[contador].style.backgroundColor = colores_rey_chequeo[2];

        setTimeout(() => {
            contenedor_repintar(casillas_ele[contador]);
        }, nockTiming);
    }

    return flujo_validacion;
}

function contenedor_repintar(contenedor) {

    if(contenedor.className === "ficha_negro"){
        contenedor.style.backgroundColor = coloresTablero[1];
    } else {
        contenedor.style.backgroundColor = coloresTablero[0];
    }
    
}