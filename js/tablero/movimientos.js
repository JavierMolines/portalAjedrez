/*



    ---- SECCION JAQUE ----



*/

function comprobar_jaque(pieza) {

    let tipo_pieza = pieza.id.split("_");
    console.log(tipo_pieza);
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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
    
                                    console.log(posiposi.childNodes[0]);
                                    
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

                                console.log(posiposi.childNodes[0]);
                                
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

                                console.log(posiposi.childNodes[0]);
                                
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

                        console.log(posiposi.childNodes[0]);
                        
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

                        console.log(posiposi.childNodes[0]);
                        
                    }
                    
                }
                
            }

        }

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

/*



    ---- SECCION DE PRE MOVIMIENTOS ----



*/
function validar_premovimiento_peon(localizacion, propiedades_pieza) {

    let rango = 1;

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

        if (propiedades_pieza.color == ggValidaciones[1]) {

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

            if (verificar_posicion_rango === true) {
                break;
            }

        } else if (propiedades_pieza.color == ggValidaciones[0]) {

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

            if (verificar_posicion_rango === true) {
                break;
            }


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
                    }

                    interaccion_pieza(pieza_seleccionada, casilla_destino_final);

                }

            } else if (posicionamiento.posY + 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
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

                    interaccion_pieza(pieza_seleccionada, casilla_destino_final);

                }

            } else if (posicionamiento.posY + 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[1] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                        }
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
                    }

                    interaccion_pieza(pieza_seleccionada, casilla_destino_final);

                }

            } else if (posicionamiento.posY - 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
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

                    interaccion_pieza(pieza_seleccionada, casilla_destino_final);

                }

            } else if (posicionamiento.posY - 1 == posicionamiento.targetPosY) {

                let casilla_diagonal_1 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX + 1}]`);
                let casilla_diagonal_2 = document.getElementById(`cuadro[${posicionamiento.targetPosY},${posicionamiento.posX - 1}]`);

                if (casilla_diagonal_1 !== null) {

                    if (casilla_diagonal_1.childNodes.length > 0) {
                        let identificador = casilla_diagonal_1.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX + 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                        }
                    }

                }

                if (casilla_diagonal_2 !== null) {

                    if (casilla_diagonal_2.childNodes.length > 0) {
                        let identificador = casilla_diagonal_2.id.split("_");
                        if (identificador[1] != ggValidaciones[0] && posicionamiento.targetPosX == posicionamiento.posX - 1) {
                            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                        }
                    }

                }

            }

        }

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

    for (let move = 1; move < 8; move++) {
        if (posicionamiento.posY + move == posicionamiento.targetPosY && posicionamiento.posX + move == posicionamiento.targetPosX) {
            let indicador = filtrar_movimientos_alfil(posicionamiento, move, "cuadranteI");
            if (indicador !== true) {
                interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                break;
            }
        }
    }

    for (let move = 1; move < 8; move++) {
        if (posicionamiento.posY + move == posicionamiento.targetPosY && posicionamiento.posX - move == posicionamiento.targetPosX) {
            let indicador = filtrar_movimientos_alfil(posicionamiento, move, "cuadranteII");
            if (indicador !== true) {
                interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                break;
            }
        }
    }

    for (let move = 1; move < 8; move++) {
        if (posicionamiento.posY - move == posicionamiento.targetPosY && posicionamiento.posX - move == posicionamiento.targetPosX) {
            let indicador = filtrar_movimientos_alfil(posicionamiento, move, "cuadranteIII");
            if (indicador !== true) {
                interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                break;
            }
        }
    }

    for (let move = 1; move < 8; move++) {
        if (posicionamiento.posY - move == posicionamiento.targetPosY && posicionamiento.posX + move == posicionamiento.targetPosX) {
            let indicador = filtrar_movimientos_alfil(posicionamiento, move, "cuadranteIV");
            if (indicador !== true) {
                interaccion_pieza(pieza_seleccionada, casilla_destino_final);
                break;
            }
        }
    }
}

function validar_movimiento_torre(posicionamiento, casilla_destino_final) {

    if (posicionamiento.posX == posicionamiento.targetPosX) {

        let indicador = filtrar_movimientos_torre(posicionamiento, "vertical");
        if (indicador !== true) {
            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
        }

    } else if (posicionamiento.posY == posicionamiento.targetPosY) {

        let indicador = filtrar_movimientos_torre(posicionamiento, "horizontal");
        if (indicador !== true) {
            interaccion_pieza(pieza_seleccionada, casilla_destino_final);
        }

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


    } else {

        // ENROQUE
        if (movimiento_actual == ggValidaciones[1]) {

            if (posicionamiento.targetPosY == 1 && posicionamiento.targetPosX == 7 && enroque_blanco[1] == true) {

                for (let contador = 1; contador <= 2; contador++) {

                    let casilla_enroque = document.getElementById(`cuadro[${posicionamiento.posY},${posicionamiento.posX + contador}]`);
                    if (casilla_enroque.childNodes.length > 0) {
                        return;
                    }

                }

                let torre_derecha = document.getElementById(`torre_${ggValidaciones[1]}_1`);

                document.getElementById("cuadro[1,8]").removeChild(torre_derecha);
                document.getElementById("cuadro[1,5]").removeChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[1,7]").appendChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[1,6]").appendChild(torre_derecha);

                // APAGAR EL ENROQUE Y QUE INICIE EL SIGUIENTE TURNO
                enroque_blanco = [false, false];
                movimiento_actual = ggValidaciones[0];

            }

            if (posicionamiento.targetPosY == 1 && posicionamiento.targetPosX == 3 && enroque_blanco[0] == true) {

                for (let contador = 1; contador <= 3; contador++) {

                    let casilla_enroque = document.getElementById(`cuadro[${posicionamiento.posY},${posicionamiento.posX - contador}]`);
                    if (casilla_enroque.childNodes.length > 0) {
                        return;
                    }

                }

                let torre_izquierda = document.getElementById(`torre_${ggValidaciones[1]}_0`);

                document.getElementById("cuadro[1,1]").removeChild(torre_izquierda);
                document.getElementById("cuadro[1,5]").removeChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[1,3]").appendChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[1,4]").appendChild(torre_izquierda);

                // APAGAR EL ENROQUE Y QUE INICIE EL SIGUIENTE TURNO
                enroque_blanco = [false, false];
                movimiento_actual = ggValidaciones[0];

            }

        } else {

            if (posicionamiento.targetPosY == 8 && posicionamiento.targetPosX == 7 && enroque_negro[1] == true) {

                for (let contador = 1; contador <= 2; contador++) {

                    let casilla_enroque = document.getElementById(`cuadro[${posicionamiento.posY},${posicionamiento.posX + contador}]`);
                    if (casilla_enroque.childNodes.length > 0) {
                        return;
                    }

                }

                let torre_derecha = document.getElementById(`torre_${ggValidaciones[0]}_1`);

                document.getElementById("cuadro[8,8]").removeChild(torre_derecha);
                document.getElementById("cuadro[8,5]").removeChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[8,7]").appendChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[8,6]").appendChild(torre_derecha);

                // APAGAR EL ENROQUE Y QUE INICIE EL SIGUIENTE TURNO
                enroque_negro = [false, false];
                movimiento_actual = ggValidaciones[1];

            }

            if (posicionamiento.targetPosY == 8 && posicionamiento.targetPosX == 3 && enroque_negro[0] == true) {

                for (let contador = 1; contador <= 3; contador++) {

                    let casilla_enroque = document.getElementById(`cuadro[${posicionamiento.posY},${posicionamiento.posX - contador}]`);
                    if (casilla_enroque.childNodes.length > 0) {
                        return;
                    }

                }

                let torre_izquierda = document.getElementById(`torre_${ggValidaciones[0]}_0`);

                document.getElementById("cuadro[8,1]").removeChild(torre_izquierda);
                document.getElementById("cuadro[8,5]").removeChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[8,3]").appendChild(pieza_seleccionada[0]);
                document.getElementById("cuadro[8,4]").appendChild(torre_izquierda);

                // APAGAR EL ENROQUE Y QUE INICIE EL SIGUIENTE TURNO
                enroque_negro = [false, false];
                movimiento_actual = ggValidaciones[1];

            }

        }

    }
}