function detectar_jaque_mate(casilla) {

    if (jaque === true) {

        let vl_pieza_monarca = capturar_casillas_posibles_rey();
        let vl_pieza_enemiga = debilidades_pieza_atacante(casilla);
        let vl_bloqueo_distancia = validacion_movimiento_distancia();

        if (vl_pieza_monarca === true && vl_pieza_enemiga === true && vl_bloqueo_distancia === true) {
            crear_ventana_ganador();
            movimiento_actual = "gameover";
        }

    }

}

function capturar_casillas_posibles_rey() {

    // SUMAR COMO AGUJAZ DEL RELOJ
    let validacion = false;
    let rey_pieza = crear_pieza(pos_jaque_rey);
    let validacion_movimiento_final = 0;
    let validacion_indicador_movimientos = 0;
    let propiedades = [

        {
            posX: pos_jaque_rey.posX,
            posY: pos_jaque_rey.posY + 1,
        },
        {
            posX: pos_jaque_rey.posX + 1,
            posY: pos_jaque_rey.posY + 1,
        },
        {
            posX: pos_jaque_rey.posX + 1,
            posY: pos_jaque_rey.posY,
        },
        {
            posX: pos_jaque_rey.posX + 1,
            posY: pos_jaque_rey.posY - 1,
        },
        {
            posX: pos_jaque_rey.posX,
            posY: pos_jaque_rey.posY - 1,
        },
        {
            posX: pos_jaque_rey.posX - 1,
            posY: pos_jaque_rey.posY - 1,
        },
        {
            posX: pos_jaque_rey.posX - 1,
            posY: pos_jaque_rey.posY,
        },
        {
            posX: pos_jaque_rey.posX - 1,
            posY: pos_jaque_rey.posY + 1,
        }

    ];

    for (let contador = 0; contador < propiedades.length; contador++) {

        let posicion = propiedades[contador];
        if (posicion.posX > 0 && posicion.posX < 9 &&
            posicion.posY > 0 && posicion.posY < 9) {

            let nueva_casilla = document.getElementById(`cuadro[${posicion.posY},${posicion.posX}]`);
            let hijo_casilla = obtener_hijo_detalles_ID(nueva_casilla);

            // SI LA CASILLA ESTA VACIA O TIENE UN CARAJITO
            if (hijo_casilla === false || hijo_casilla.color !== rey_pieza.color) {

                validacion_indicador_movimientos++;

                let casillas_obtenidas = vl_casillas_entorno(nueva_casilla, rey_pieza);
                
                for (let interno = 0; interno < casillas_obtenidas.length; interno++) {

                    let informacion = casillas_obtenidas[interno];
                    let propiedades = {
                        flujo: informacion[0],
                        casilla: informacion[1],
                        casilla_pieza: obtener_hijo_detalles_ID(informacion[1])
                    };

                    // CASILLAS ENEMIGAS
                    if (propiedades.casilla_pieza !== false && propiedades.casilla_pieza.color !== rey_pieza.color) {

                        let crear_coordenadas_nuevas = crear_coordenadas_casilla(nueva_casilla);

                        if (propiedades.casilla_pieza.tipo === "peon" && propiedades.flujo === "bishop" ||
                            propiedades.casilla_pieza.tipo === "peon" && propiedades.flujo === "bishop" &&
                            filtrar_coordenadas_peon_jaquemate(crear_coordenadas_nuevas, propiedades.casilla_pieza.coordenadas) === true ||
                            propiedades.casilla_pieza.tipo === "reina" && propiedades.flujo === "bishop" ||
                            propiedades.casilla_pieza.tipo === "reina" && propiedades.flujo === "torre" ||
                            propiedades.casilla_pieza.tipo === "bishop" && propiedades.flujo === "bishop" ||
                            propiedades.casilla_pieza.tipo === "torre" && propiedades.flujo === "torre" ||
                            propiedades.casilla_pieza.tipo === "caballo" && propiedades.flujo === "caballo") {

                            validacion_movimiento_final++;

                        }

                    }

                }

            }

        }

    }

    if(validacion_movimiento_final >= validacion_indicador_movimientos){
        validacion = true;
    }

    return validacion;

}

function debilidades_pieza_atacante(casilla) {

    let validacion = true;
    let casillas_obtenidas = vl_casillas_entorno(casilla, "normal");

    for (let contador = 0; contador < casillas_obtenidas.length; contador++) {

        let informacion = casillas_obtenidas[contador];
        let flujo = informacion[0];
        let detalles = informacion[1];
        let pieza_interna = obtener_hijo_detalles_ID(detalles);
        if (pieza_interna !== false) {
            if (pieza_interna.color === movimiento_actual) {

                if (flujo === "bishop" && pieza_interna.tipo === "reina" || flujo === "bishop" && pieza_interna.tipo === "bishop") {
                    validacion = false;
                    break;
                }

                if (flujo === "torre" && pieza_interna.tipo === "reina" || flujo === "torre" && pieza_interna.tipo === "torre") {
                    validacion = false;
                    break;
                }

                if (flujo === "caballo" && pieza_interna.tipo === "caballo") {
                    validacion = false;
                    break;
                }

                if (flujo === "bishop" && pieza_interna.tipo === "peon") {

                    if (validar_destino_peon(pieza_interna, pos_pieza_jaque) === true) {
                        validacion = false;
                        break;
                    }

                }
            }
        }
    }

    return validacion;

}

function validacion_movimiento_distancia() {

    let validacion = false;
    let objeto_monarca = crear_pieza(pos_jaque_rey);
    let objeto_atacante = crear_pieza(pos_pieza_jaque);
    let direccion_validacion = "";

    if(objeto_atacante.tipo === "caballo"){

        validacion = true;

    } else if (objeto_monarca.coordenadas.posY === objeto_atacante.coordenadas.posY) {
        if(objeto_atacante.coordenadas.posX > objeto_monarca.coordenadas.posX){
            direccion_validacion = "IZQUIERDA";
        } else {
            direccion_validacion = "DERECHA";
        }
    } else if(objeto_monarca.coordenadas.posX === objeto_atacante.coordenadas.posX) {
        if(objeto_atacante.coordenadas.posY > objeto_monarca.coordenadas.posY){
            direccion_validacion = "ABAJO";
        } else {
            direccion_validacion = "ARRIBA";
        }
    } else {
        if(objeto_atacante.coordenadas.posY > objeto_monarca.coordenadas.posY && objeto_atacante.coordenadas.posX < objeto_monarca.coordenadas.posX){
            direccion_validacion = "IV";
        }
        if(objeto_atacante.coordenadas.posY > objeto_monarca.coordenadas.posY && objeto_atacante.coordenadas.posX > objeto_monarca.coordenadas.posX){
            direccion_validacion = "III";
        }
        if(objeto_atacante.coordenadas.posY < objeto_monarca.coordenadas.posY && objeto_atacante.coordenadas.posX > objeto_monarca.coordenadas.posX){
            direccion_validacion = "II";
        }
        if(objeto_atacante.coordenadas.posY < objeto_monarca.coordenadas.posY && objeto_atacante.coordenadas.posX < objeto_monarca.coordenadas.posX){
            direccion_validacion = "I";
        }
    }

    if (validacion === false) {
        validacion = validar_resta_movimientos_resultados(direccion_validacion, objeto_monarca, objeto_atacante);    
    }

    return validacion;
}

function validar_resta_movimientos_resultados(direccion, monarca, atacante) {

    let validacion = true;
    let casillas_distantes = 0;
    let bishop_coor = { coor_Y: 0, coor_X: 0};

    switch (direccion) {
        case "ARRIBA":
            casillas_distantes = monarca.coordenadas.posY - atacante.coordenadas.posY;
            casillas_distantes--;
            break;
        case "ABAJO":
            casillas_distantes = atacante.coordenadas.posY - monarca.coordenadas.posY;
            casillas_distantes--;
            break;
        case "IZQUIERDA":
            casillas_distantes = atacante.coordenadas.posX - monarca.coordenadas.posX;
            casillas_distantes--;
            break;
        case "DERECHA":
            casillas_distantes = monarca.coordenadas.posX - atacante.coordenadas.posX;
            casillas_distantes--;
            break;
        case "I":
            bishop_coor = {
                coor_Y: monarca.coordenadas.posY - atacante.coordenadas.posY,
                coor_X: monarca.coordenadas.posX - atacante.coordenadas.posX
            };
            break;
        case "II":
            bishop_coor = {
                coor_Y: monarca.coordenadas.posY - atacante.coordenadas.posY,
                coor_X: atacante.coordenadas.posX - monarca.coordenadas.posX
            };
            break;
        case "III":
            bishop_coor = {
                coor_Y: atacante.coordenadas.posY - monarca.coordenadas.posY,
                coor_X: atacante.coordenadas.posX - monarca.coordenadas.posX
            };
            break;
        case "IV":
            bishop_coor = {
                coor_Y: atacante.coordenadas.posY - monarca.coordenadas.posY,
                coor_X: monarca.coordenadas.posX - atacante.coordenadas.posX
            };
            break;
    }

    if (bishop_coor.coor_Y !== 0 && bishop_coor.coor_X !== 0) {
        if (bishop_coor.coor_Y === bishop_coor.coor_X) {
            casillas_distantes = bishop_coor.coor_Y -= 1;  
        }
    }

    for (let contador = 1; contador <= casillas_distantes; contador++) {

        let destino_final = {};
        let sumador_Y = contador;
        let sumador_X = contador;

        if (direccion === "ABAJO") {
            sumador_Y *= -1;
        }

        if (direccion === "IZQUIERDA") {
            sumador_X *= -1;
        }

        if (direccion === "ARRIBA" || direccion === "ABAJO") {
            destino_final = {
                posY: atacante.coordenadas.posY + sumador_Y,
                posX: atacante.coordenadas.posX,
            };
        } else if(direccion === "DERECHA" || direccion === "IZQUIERDA"){
            destino_final = {
                posY: atacante.coordenadas.posY,
                posX: atacante.coordenadas.posX + sumador_X,
            };
        } else if(direccion === "I"){
            destino_final = {
                posY: atacante.coordenadas.posY + sumador_Y,
                posX: atacante.coordenadas.posX + sumador_X,
            };
        } else if(direccion === "II"){
            destino_final = {
                posY: atacante.coordenadas.posY + sumador_Y,
                posX: atacante.coordenadas.posX - sumador_X,
            };
        } else if(direccion === "III"){
            destino_final = {
                posY: atacante.coordenadas.posY - sumador_Y,
                posX: atacante.coordenadas.posX - sumador_X,
            };
        } else if(direccion === "IV"){
            destino_final = {
                posY: atacante.coordenadas.posY - sumador_Y,
                posX: atacante.coordenadas.posX + sumador_X,
            };
        }

        let casilla_nueva_detectar = document.getElementById(`cuadro[${destino_final.posY},${destino_final.posX}]`);
        let casillas_obtenidas = vl_casillas_entorno(casilla_nueva_detectar, "normal");
        
        for (let detector = 0; detector < casillas_obtenidas.length; detector++) {
            let informacion = casillas_obtenidas[detector];
            if (informacion[1].childNodes.length > 0) {
                let pieza = obtener_hijo_detalles_ID(informacion[1]);
                if (pieza.color === movimiento_actual) {

                    if (pieza.tipo === "peon" && informacion[0] === "torre" && validar_peon_bloqueador_detectado(pieza, destino_final) === true ||
                        pieza.tipo === "bishop" && informacion[0] === "bishop" ||
                        pieza.tipo === "reina" && informacion[0] === "bishop" ||
                        pieza.tipo === "reina" && informacion[0] === "torre" ||
                        pieza.tipo === "torre" && informacion[0] === "torre" ||
                        pieza.tipo === "caballo" && informacion[0] === "caballo") {
                        validacion = false;
                        break;
                    }

                }
            }
        }
    }

    return validacion;
}

function validar_peon_bloqueador_detectado(pieza, coordenadas_destino) {

    let validacion = false;
    let respaldar_coor_Y = pieza.coordenadas.posY;

    if (pieza.color === ggValidaciones[0]) {
        pieza.coordenadas.posY += -1;
    } else if (pieza.color === ggValidaciones[1]) {
        pieza.coordenadas.posY += 1;
    }

    if(pieza.coordenadas.posY === coordenadas_destino.posY && pieza.coordenadas.posX === coordenadas_destino.posX){
        validacion = true;
    }

    if(respaldar_coor_Y === 7 && pieza.color === ggValidaciones[0]){
        pieza.coordenadas.posY += -1;
    } else if(respaldar_coor_Y === 2 && pieza.color === ggValidaciones[1]){
        pieza.coordenadas.posY += 1;
    }

    if(pieza.coordenadas.posY === coordenadas_destino.posY && pieza.coordenadas.posX === coordenadas_destino.posX){
        validacion = true;
    }

    return validacion;
}

function crear_ventana_ganador() {

    let ganador = "";
    let contenedor_fondo = document.createElement("div");
    let contenedor = document.createElement("div");
    let titulo = document.createElement("h1");
    let imagen_victoria = document.createElement("img");
    let contenedor_botones = document.createElement("div");
    let boton_reiniciar = document.createElement("button");
    let boton_cerrar = document.createElement("button");

    contenedor_fondo.classList.add("contenedor_principal_detalle_pieza");
    contenedor_fondo.classList.add("contenedor_detalles_no_desplegados");
    contenedor.classList.add("informacion_mate");

    if(movimiento_actual === ggValidaciones[0]){
        ganador = ggValidaciones[1];
        imagen_victoria.src = "../imagenes/rey_ganador_blanco.png";
    } else {
        ganador = ggValidaciones[0];
        imagen_victoria.src = "../imagenes/rey_ganador_negro.png";
    }

    titulo.innerHTML = `EL GANADOR CON JAQUE MATE SON LAS ${ganador.toUpperCase()}`;
    boton_cerrar.innerHTML = "CERRAR";
    boton_reiniciar.innerHTML = "REINICIAR";

    boton_reiniciar.addEventListener("click", ()=>{
        reiniciar_partida();
        borrar_modal(contenedor_fondo);
    });
    boton_cerrar.addEventListener("click", ()=>{
        borrar_modal(contenedor_fondo);
    });

    // AGREGAR A LA PANTALLA
    contenedor.appendChild(titulo);
    contenedor.appendChild(imagen_victoria);
    contenedor_botones.appendChild(boton_reiniciar);
    contenedor_botones.appendChild(boton_cerrar);
    contenedor.appendChild(contenedor_botones);
    contenedor_fondo.appendChild(contenedor);
    document.body.appendChild(contenedor_fondo);

    setTimeout(()=> {
        contenedor_fondo.classList.replace("contenedor_detalles_no_desplegados", "contenedor_detalles_desplegados");
    }, 200);
}

function borrar_modal(contenedor_fondo) {
    contenedor_fondo.classList.replace("contenedor_detalles_desplegados", "contenedor_detalles_no_desplegados");
    setTimeout(() => {
        contenedor_fondo.remove();
    }, 2000);
}