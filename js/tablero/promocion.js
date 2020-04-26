
function validar_promocion_peon(pieza_recibida, casilla_recibida) {

    let casilla_coronacion = false;
    let pieza_movida = obtener_ID_pieza(pieza_recibida);
    let casilla_actual = obtener_posicion(casilla_recibida);

    if (pieza_movida.tipo === "peon" && pieza_movida.color === ggValidaciones[1] && casilla_actual[0] === "8" || pieza_movida.tipo === "peon" && pieza_movida.color === ggValidaciones[0] && casilla_actual[0] === "1") {
        casilla_coronacion = true;
    }

    if(casilla_coronacion === true){

        console.log(`El ${pieza_movida.tipo} ${pieza_movida.color} ha coronado.`);
        
        let disponibilidad_cambio = ["reina", "torre", "bishop", "caballo"];
        let disponibilidad_nombre = ["fa-chess-queen", "fa-chess-rook", "fa-chess-bishop", "fa-chess-knight"];
        
        let contenedor_seleccion_promocion = document.createElement("div");
        let contenedor_piezas = document.createElement("div");
        contenedor_seleccion_promocion.setAttribute("id", "contenedor_promocion");
        contenedor_seleccion_promocion.classList.add("contenedor_general_promocion");

        for (let contador = 0; contador < disponibilidad_cambio.length; contador++) {

            let respaldo_movimiento_actual = movimiento_actual;
            let pieza_seleccion = document.createElement("i");
            pieza_seleccion.className = `fas ${disponibilidad_nombre[contador]}`;
            pieza_seleccion.style.color = respaldo_movimiento_actual;
            pieza_seleccion.addEventListener("click", () => {

                contenedor_seleccion_promocion.remove();
                pieza_recibida.remove();
             
                let validar_cantidad = document.querySelectorAll(`.${pieza_seleccion.classList[1]}`);
                let pieza_promocionada = document.createElement("i");
                pieza_promocionada.style.color = respaldo_movimiento_actual;
                pieza_promocionada.className = pieza_seleccion.className;
                pieza_promocionada.setAttribute("id", `${disponibilidad_cambio[contador]}_${respaldo_movimiento_actual}_${validar_cantidad.length+1}`);
                pieza_promocionada.addEventListener("click", () => {
                    movimiento_pieza(pieza_promocionada, disponibilidad_cambio[contador]);
                });

                casilla_recibida.appendChild(pieza_promocionada);
                
            });

            contenedor_piezas.appendChild(pieza_seleccion);

        }

        contenedor_seleccion_promocion.appendChild(contenedor_piezas);
        document.body.appendChild(contenedor_seleccion_promocion);

    }

}