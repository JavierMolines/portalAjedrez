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
        
        console.log(mensaje_jaque);

        // REGRESAR COLOR
        setTimeout(() => {
            casilla_jaque.style.backgroundColor = color_respaldo;
        }, 1000);

    }

}