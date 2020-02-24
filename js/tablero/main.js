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
var enroque_blanco     = [true, true];
var enroque_negro      = [true, true];

/*

    ||  GLOBALES PARA EL DISEÑO DE LAS PIEZAS Y LOS FLUJOS  ||

    - Se deben mantener con los mismos colores para que no hayan problemas en el flujo
        - El valor 0 == piezas negras
        - El valor 1 == piezas blancas

*/

var colorAyudaCasilla  = "aqua";
var coloresTablero     = ["#a6a6a6", "#404040"];
var colores            = ["black", "white"];
var ggValidaciones     = ["black", "white"];
var movimiento_actual  = "white";

// CREAR TABLERO, Y LAS PIEZAS DE JUEGO, ADEMAS ARRANCAR EL INICIO DEL JUEGO
crear_botones();
crear_cuadros_vectores();
crear_piezas();