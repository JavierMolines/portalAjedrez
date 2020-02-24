/*



    ---- SECCION JAQUE ----



*/

function comprobar_jaque(pieza) {

    let casilla_jaque;
    let rey_en_jaque = false;
    let tipo_pieza = pieza.id.split("_");
    let localizacion = obtener_posicion_pieza_objeto(pieza);
    let opciones_movimientos = [
        "",
        "++",
        "+-",
        "--",
        "-+"
    ];

    if (tipo_pieza[0] === "bishop" || tipo_pieza[0] === "reina") {
        for (let casos = 1; casos <= 4; casos++) {
            for (let contador = 1; contador < 9; contador++) {

                // NUEVAS POSICIONES
                let nuevo_posY = 0;
                let nuevo_posX = 0;

                switch (opciones_movimientos[casos]) {

                    case "++":
                        nuevo_posY = localizacion.posY + contador;
                        nuevo_posX = localizacion.posX + contador;

                        if (nuevo_posY < 9 && nuevo_posX < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    case "--":
                        nuevo_posY = localizacion.posY - contador;
                        nuevo_posX = localizacion.posX - contador;

                        if (nuevo_posY > 0 && nuevo_posX > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    case "-+":
                        nuevo_posY = localizacion.posY - contador;
                        nuevo_posX = localizacion.posX + contador;

                        if (nuevo_posY > 0 && nuevo_posX < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    case "+-":
                        nuevo_posY = localizacion.posY + contador;
                        nuevo_posX = localizacion.posX - contador;

                        if (nuevo_posY < 9 && nuevo_posX > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    default:
                        console.warn("ALGO NO ESTA BIEN..");
                        break;
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

                switch (opciones_movimientos[casos]) {

                    case "++":
                        nuevo_posY = localizacion.posY + contador;
                        nuevo_posX = localizacion.posX;

                        if (nuevo_posY < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    case "--":
                        nuevo_posY = localizacion.posY - contador;
                        nuevo_posX = localizacion.posX;

                        if (nuevo_posY > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    case "-+":
                        nuevo_posY = localizacion.posY;
                        nuevo_posX = localizacion.posX + contador;

                        if (nuevo_posX < 9) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    case "+-":
                        nuevo_posY = localizacion.posY;
                        nuevo_posX = localizacion.posX - contador;

                        if (nuevo_posX > 0) {

                            let vector = ubicacion_plano(nuevo_posY, nuevo_posX);
                            if (vector !== false) {
                                let posiposi = document.getElementById(`cuadro[${vector.target_posY},${vector.target_posX}]`);

                                if (posiposi.childNodes.length > 0) {

                                    // DAR JAQUE
                                    let coincidencia_pieza = posiposi.childNodes[0].id.split("_");
                                    if (coincidencia_pieza[0] == "rey" && tipo_pieza[1] != coincidencia_pieza[1]) {
                                        console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
                                        rey_en_jaque = true;
                                        casilla_jaque = posiposi;
                                    }

                                }

                            }

                        }

                        break;

                    default:
                        console.warn("ALGO NO ESTA BIEN..");
                        break;
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
                                    console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
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
                                    console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
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
                            console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
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
                            console.log(`El ${tipo_pieza[0]} de color ${tipo_pieza[1]} le dio jaque al ${coincidencia_pieza[0]} ${coincidencia_pieza[1]}`);
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

        let color_respaldo = casilla_jaque.style.backgroundColor;
        casilla_jaque.style.backgroundColor = "red";
        jaque = true;
        
        // REGRESAR COLOR
        setTimeout(()=>{
            casilla_jaque.style.backgroundColor = color_respaldo;
        }, 3000);

    }

    if (tipo_pieza[0] === "rey") {

        let vectorYmas1 = localizacion.posY + 1;
        let vectorXmas1 = localizacion.posX + 1;
        let vectorYmenos1 = localizacion.posY - 1;
        let vectorXmenos1 = localizacion.posX - 1;

        if (vectorYmas1 < 9 && vectorXmas1 < 9) {
            let nueva_casilla = document.getElementById(`cuadro[${vectorYmas1},${vectorXmas1}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(vectorYmas1, vectorXmas1);
                }
            } else {
                mostrar_premovimiento(vectorYmas1, vectorXmas1);
            }
        }

        if (vectorYmas1 < 9 && vectorXmenos1 > 0) {
            let nueva_casilla = document.getElementById(`cuadro[${vectorYmas1},${vectorXmenos1}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(vectorYmas1, vectorXmenos1);
                }
            } else {
                mostrar_premovimiento(vectorYmas1, vectorXmenos1);
            }
        }

        if (vectorYmenos1 > 0 && vectorXmenos1 > 0) {
            let nueva_casilla = document.getElementById(`cuadro[${vectorYmenos1},${vectorXmenos1}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(vectorYmenos1, vectorXmenos1);
                }
            } else {
                mostrar_premovimiento(vectorYmenos1, vectorXmenos1);
            }
        }

        if (vectorYmenos1 > 0 && vectorXmas1 < 9) {
            let nueva_casilla = document.getElementById(`cuadro[${vectorYmenos1},${vectorXmas1}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(vectorYmenos1, vectorXmas1);
                }
            } else {
                mostrar_premovimiento(vectorYmenos1, vectorXmas1);
            }
        }

        if (vectorXmas1 < 9) {
            let nueva_casilla = document.getElementById(`cuadro[${localizacion.posY},${vectorXmas1}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(localizacion.posY, vectorXmas1);
                }
            } else {
                mostrar_premovimiento(localizacion.posY, vectorXmas1);
            }
        }

        if (vectorXmenos1 > 0) {
            let nueva_casilla = document.getElementById(`cuadro[${localizacion.posY},${vectorXmenos1}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(localizacion.posY, vectorXmenos1);
                }
            } else {
                mostrar_premovimiento(localizacion.posY, vectorXmenos1);
            }
        }

        if (vectorYmas1 < 9) {
            let nueva_casilla = document.getElementById(`cuadro[${vectorYmas1},${localizacion.posX}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(vectorYmas1, localizacion.posX);
                }
            } else {
                mostrar_premovimiento(vectorYmas1, localizacion.posX);
            }
        }

        if (vectorYmenos1 > 0) {
            let nueva_casilla = document.getElementById(`cuadro[${vectorYmenos1},${localizacion.posX}]`);
            if (nueva_casilla.childNodes.length > 0) {
                let colorsito = nueva_casilla.childNodes[0].id.split("_");
                if (colorsito[1] != movimiento_actual) {
                    mostrar_premovimiento(vectorYmenos1, localizacion.posX);
                }
            } else {
                mostrar_premovimiento(vectorYmenos1, localizacion.posX);
            }
        }

    }

}