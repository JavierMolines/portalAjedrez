function crear_botones() {

    let contenedor = document.getElementById("botones_opciones_tablero");

    for (let contador = 0; contador < 2; contador++) {
        
        let botones = document.createElement("button");

        switch (contador) {

            case 0:
                botones.id = "boton_reiniciar";
                botones.innerHTML = "REINICIAR";
                botones.disabled = false;
                botones.addEventListener("click", () => reiniciar_partida());
                break;

            case 1:
                botones.id = "boton_ayuda";
                botones.innerHTML = `AYUDA: ON`;
                botones.disabled = false;
                botones.addEventListener("click", () => {

                    if (ayuda_movimientos == 1) {
                        ayuda_movimientos = 0;
                        botones.innerHTML = `AYUDA: OFF`;
                    } else {
                        ayuda_movimientos = 1;
                        botones.innerHTML = `AYUDA: ON`;
                    }

                    borrar_premovimiento();
                });
                break;

            default:
                break;
        }

        contenedor.appendChild(botones);
    }
}

function reiniciar_partida() {

    let piezas = document.querySelectorAll("div > i");
    for (let contador = 0; contador < piezas.length; contador++) {
        piezas[contador].parentNode.removeChild(piezas[contador]);
    }

    // -- INICIO REINICIAR VARIABLES GLOBALES

    jaque_mate = false;
    jaque = false;
    enroque_blanco = [true, true];
    enroque_negro = [true, true];
    movimiento_actual = colores[1];

    // -- FINAL REINICIAR VARIABLES GLOBALES

    borrar_premovimiento();
    crear_elementos_juego();

}