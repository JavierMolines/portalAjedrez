function guardar_movimiento(contenido, casilla, pieza_para_comer) {

    let casilla_original = crear_casilla_data(crear_objeto_coordenadas(contenido[1][1], contenido[1][0]));
    let casilla_destino  = casilla;
    let jugada           = contador_jugadas += 1;
    let accion           = {

        casilla_original : casilla_original,
        casilla_destino  : casilla_destino,
        movimiento_num   : jugada,
        pieza_jugada     : contenido[0],
        pieza_comida     : pieza_para_comer,
        dar_jaque        : jaque,
        by               : movimiento_actual

    }

    historial_jugadas.push(accion);
    
}

function retroceder_movimiento() {

    // DATA PASO ANTERIOR
    let ultima_jugada   = historial_jugadas.length;

    if(ultima_jugada > 0){

        let data_paso_retro = historial_jugadas[ultima_jugada-1];

        // SETEAR PROPIEDADES JUGADA ANTERIOR
        data_paso_retro.casilla_destino.childNodes[0].remove();
        data_paso_retro.casilla_original.appendChild(data_paso_retro.pieza_jugada);
    
        movimiento_actual = data_paso_retro.by;
        jaque             = data_paso_retro.dar_jaque;
    
        if(data_paso_retro.pieza_comida !== false){
            data_paso_retro.casilla_destino.appendChild(data_paso_retro.pieza_comida);
        }
    
        if(ultima_jugada > 1 && historial_jugadas[ultima_jugada-2] !== null && historial_jugadas[ultima_jugada-2] !== undefined){
            jaque = historial_jugadas[ultima_jugada-2].dar_jaque;
        }
    
        // LIMPIAR HISTORIAL DE PASOS
        borrar_premovimiento();
        historial_jugadas.pop();

    }

}