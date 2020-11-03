function guardar_movimiento(contenido, casilla, pieza_para_comer, enroque, data_peon_paso) {

    let casilla_original = crear_casilla_data(crear_objeto_coordenadas(contenido[1][1], contenido[1][0]));
    let casilla_destino  = casilla;
    let jugada           = contador_jugadas += 1;
    let accion           = {

        casilla_original : casilla_original,
        casilla_destino  : casilla_destino,
        movimiento_num   : jugada,
        enroque          : enroque,
        peon_paso        : data_peon_paso,
        pieza_jugada     : contenido[0],
        pieza_comida     : pieza_para_comer,
        dar_jaque        : jaque,
        by               : movimiento_actual

    }

    historial_jugadas.push(accion);
    
}

function retroceder_movimiento() {

    // DATA PASO ANTERIOR
    let ultima_jugada = historial_jugadas.length;

    // SETEAR PROPIEDADES JUGADA ANTERIOR
    if(ultima_jugada > 0){

        // OBTENER DATA ULTIMA JUGADA
        let data_paso_retro = historial_jugadas[ultima_jugada-1];

        console.log(data_paso_retro.peon_paso);

        // AGREGAR PIEZA MOVIDA A LA CASILLA ORIGINAL
        data_paso_retro.casilla_original.appendChild(data_paso_retro.pieza_jugada);

        // REMOVER LA PIEZA JUGADA DE LA CASILLA ACTUAL 
        let hijosCasilla = data_paso_retro.casilla_destino.childNodes;
        if(hijosCasilla.length > 0){
            hijosCasilla[0].remove();
        }

        movimiento_actual = data_paso_retro.by;
        jaque             = data_paso_retro.dar_jaque;
    
        // AGREGAR PIEZA COMIDA A SU CASILLA ORIGINAL
        if(data_paso_retro.pieza_comida !== false){
            data_paso_retro.casilla_destino.appendChild(data_paso_retro.pieza_comida);
        }
    
        // SI EN PASO ANTERIOR SE DIO JAQUE SETEAR EL JAQUE ACTIVO NUEVAMENTE
        if(ultima_jugada > 1 && historial_jugadas[ultima_jugada-2] !== null && historial_jugadas[ultima_jugada-2] !== undefined){
            jaque = historial_jugadas[ultima_jugada-2].dar_jaque;
        }

        // SI SE DIO ENROQUE RETORNAR LOS PROPIEDADES PARA EJECUTARLO
        if(data_paso_retro.enroque !== false){
            if(data_paso_retro.enroque.flujo === ggValidaciones[1]){
                enroque_blanco = data_paso_retro.enroque.data;
            } else {
                enroque_negro = data_paso_retro.enroque.data;
            }
        }
    
        // LIMPIAR HISTORIAL DE PASOS
        borrar_premovimiento();
        historial_jugadas.pop();

    }

}