/*

    ********** GLOBALES FUNCIONAMIENTO AJEDREZ **********
    
    -                                   -
        -                           -
            -                   -
                NO MODIFICAR
            -                   -
        -                           -
    -                                   -

*/

var pieza_seleccionada = "";
var ayuda_movimientos  = 1;
var jaque_mate         = false;
var jaque              = false;
var contador_jugadas   = 0;
var historial_jugadas  = [];
var enroque_blanco     = [ true, true ];
var enroque_negro      = [ true, true ];
var pos_pieza_jaque    = { posY: 0, posX: 0 };
var pos_jaque_rey      = { posY: 0, posX: 0 };
var peon_al_paso       = { posX: 0, posY: 0, peon_pasado: false, estatus: false, by: "" };

/*

    ||  GLOBALES PARA EL DISEÑO DE LAS PIEZAS Y LOS FLUJOS  ||

    - Se deben mantener con los mismos colores para que no hayan problemas en el flujo
        - El valor 0 == piezas negras
        - El valor 1 == piezas blancas

*/

var colorAyudaCasilla  = "aqua";
var coloresTablero     = ["white", "rgb(13, 13, 13)"];
var colores            = ["blue", "red"];
var ggValidaciones     = ["blue", "red"];
var movimiento_actual  = "red";

// CREAR TABLERO, Y LAS PIEZAS DE JUEGO, ADEMAS ARRANCAR EL INICIO DEL JUEGO

function crear_juego_ajedrez() {

    crear_botones();
    crear_cuadros_vectores();
    crear_elementos_juego();
    
}

function reiniciar_partida() {

    let piezas = document.querySelectorAll("div > i");
    for (let pieza of piezas) {
        pieza.parentNode.removeChild(pieza);
    }

    // -- INICIO REINICIAR VARIABLES GLOBALES

    jaque             = false;
    jaque_mate        = false;
    contador_jugadas  = 0;
    historial_jugadas = [];
    enroque_blanco    = [true, true];
    enroque_negro     = [true, true];
    movimiento_actual = colores[1];

    // -- FINAL REINICIAR VARIABLES GLOBALES

    borrar_premovimiento();
    crear_elementos_juego();

}