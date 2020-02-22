function crear_botones() {

    let contenedor = document.getElementById("botones_opciones_tablero");
    //let contenedor = document.createElement("div");

    for (let contador = 0; contador < 3; contador++) {

        let botones = document.createElement("button");
        botones.classList.add("botones_opciones");

        if (contador == 0) {

            botones.id = "boton_reiniciar";
            //botones.classList.add("botones_apagados");
            botones.innerHTML = "REINICIAR";
            botones.disabled = true;
            botones.classList.add("botones_apagados");
            botones.addEventListener("click", () => {

                let piezas = document.querySelectorAll("div > i");
                for (let contador = 0; contador < piezas.length; contador++) {

                    piezas[contador].parentNode.removeChild(piezas[contador]);
                    
                }

                botones.disabled = true;
                botones.classList.replace("botones_tablero", "botones_apagados");

                boton_arrancar.disabled = false;
                boton_arrancar.classList.replace("botones_apagados", "botones_tablero");

                // -- INICIO REINICIAR VARIABLES GLOBALES

                jaque_mate         = false;
                jaque              = false;
                enroque_blanco     = [true, true];
                enroque_negro      = [true, true];
                movimiento_actual  = "darkred";
                borrar_premovimiento();

                // -- FINAL REINICIAR VARIABLES GLOBALES

            });

        } else if (contador == 1) {

            botones.id = "boton_arrancar";
            botones.classList.add("botones_tablero");
            botones.innerHTML = "JUGAR";
            botones.addEventListener("click", () => {

                crear_piezas();
                botones.disabled = true;
                botones.classList.replace("botones_tablero", "botones_apagados");

                boton_reiniciar.disabled = false;
                boton_reiniciar.classList.replace("botones_apagados", "botones_tablero");

            });

        } else if (contador == 2) {

            botones.id = "boton_ayuda";
            botones.innerHTML = `AYUDA: ON`;
            botones.classList.add("botones_tablero");
            botones.disabled = false;
            botones.addEventListener("click", () => {

                if (ayuda_movimientos == 1) {

                    ayuda_movimientos = 0;
                    botones.innerHTML = `AYUDA: OFF`;

                } else {

                    ayuda_movimientos = 1;
                    botones.innerHTML = `AYUDA: ON`;

                }

                console.log(`AYUDA ESTADO: ${ayuda_movimientos}`);

            });

        }

        contenedor.appendChild(botones);

    }

    //contenedor.classList.add("espacio_botones");
    //document.body.appendChild(contenedor);

}