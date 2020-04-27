function detectar_jaque_mate(pieza_en_movimiento, casilla) {

    if (jaque === true) {

        let movimientos_del_rey = false;
        let acciones_disponibles = false;
        let obtener_casilla = document.getElementById(`cuadro[${pos_jaque_rey.posY},${pos_jaque_rey.posX}]`)

        let condiciones = {

            rey: {
                casilla_rey_amenazado: obtener_casilla,
                rey_amenazado: obtener_casilla.childNodes[0]
            },

            atacante: {
                pieza_atacante: pieza_en_movimiento,
                casillas_atacante: vl_casillas_entorno(casilla, "normal")
            }

        };


        if(movimientos_del_rey === false && acciones_disponibles === false){
            //console.log("GAME OVER");
        }

    }

}