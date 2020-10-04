function crear_botones() {

    let contenedor = document.getElementById("botones_opciones_tablero");

    for (let contador = 0; contador < 2; contador++) {
        
        let botones = document.createElement("button");

        switch (contador) {

            case 0:
                botones.id = "boton_reiniciar";
                botones.innerHTML = "Reiniciar";
                botones.disabled = false;
                botones.addEventListener("click", () => reiniciar_partida());
                break;

            case 1:
                botones.id = "boton_ayuda";
                botones.innerHTML = titulo_boton_ayuda();
                botones.disabled = false;
                botones.addEventListener("click", () => {

                    ayuda_movimientos = ayuda_movimientos == 1 ? 0 : 1;
                    botones.innerHTML = titulo_boton_ayuda();
                    borrar_premovimiento();

                });
                break;

            default:
                break;
        }

        contenedor.appendChild(botones);
    }
}

function titulo_boton_ayuda() {
    
    let prefijo = "PreMovimientos: ";
    let estado  = ayuda_movimientos == 0 ? "OFF" : "ON";
    let titulo  = prefijo + estado;
    return titulo;

}