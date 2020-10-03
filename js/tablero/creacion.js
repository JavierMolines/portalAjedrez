function crear_cuadros_vectores() {

    let indicador_color = 0;
    let colores_tablero = [coloresTablero[0], coloresTablero[1]];

    for (let contador = 8; contador > 0; contador--) {
        for (let cuadros = 1; cuadros < 9; cuadros++) {

            let color_agregar = indicador_color == 0 ? cuadros % 2 ? colores_tablero[0] : colores_tablero[1] : cuadros % 2 ? colores_tablero[1] : colores_tablero[0];
            let cuadro = document.createElement("div");

            cuadro.id = `cuadro[${contador},${cuadros}]`;
            cuadro.addEventListener("click", asignar_movimiento_piezas);
            cuadro.style.backgroundColor = color_agregar;
    
            if (cuadros % 8 == 0) {
                indicador_color = indicador_color == 0 ? 1 : 0;
            }

            document.getElementById("tablero_principal_ajedrez").appendChild(cuadro);
        }
    }
}

function crear_elementos_juego() {

    let informacion = [
        { pieza: "peon",    icono: "fa-chess-pawn",   pos: [1, 2, 3, 4, 5, 6, 7, 8] }, 
        { pieza: "caballo", icono: "fa-chess-knight", pos: [2, 7] }, 
        { pieza: "bishop",  icono: "fa-chess-bishop", pos: [3, 6] }, 
        { pieza: "torre",   icono: "fa-chess-rook",   pos: [1, 8] }, 
        { pieza: "reina",   icono: "fa-chess-queen",  pos: [4] }, 
        { pieza: "rey",     icono: "fa-chess-king",   pos: [5] }
    ];

    for (let interno = 0; interno < informacion.length; interno++) {

        let detalles = informacion[interno];
        let pieza    = detalles.pieza;
        let icono    = detalles.icono;
        let carte    = detalles.pos;
        let pos_y    = pieza === "peon" ? [2,7] : [1,8];

        for (let calculo = 0; calculo < pos_y.length; calculo++) {
            for (let nueva_pieza = 0; nueva_pieza < carte.length; nueva_pieza++) {
    
                let cuadro_capturado = document.getElementById(`cuadro[${pos_y[calculo]},${carte[nueva_pieza]}]`);
                let elemento_pieza = document.createElement("i");
                elemento_pieza.classList.add("fas");
                elemento_pieza.classList.add(icono);
                elemento_pieza.addEventListener("click", () => movimiento_pieza(elemento_pieza, pieza));
    
                if (calculo == 0) {
                    elemento_pieza.style.color = colores[calculo+1];
                    elemento_pieza.id = `${pieza}_${colores[1]}_${nueva_pieza}`;
                } else {
                    elemento_pieza.style.color = colores[calculo-1];
                    elemento_pieza.id = `${pieza}_${colores[0]}_${nueva_pieza}`;
                }
    
                cuadro_capturado.appendChild(elemento_pieza);
    
            }
        }
    }
}