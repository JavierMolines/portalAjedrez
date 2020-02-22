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

/*
    Nota: 
            Si se modifican los colores para las piezas, por ende tambien se modifica la variable //movimiento_actual// para indicar cual color es el que empieza,
            Luego del mismo, para evitar errores, irse al archivo botones.js a la linea 38 para modificar la misma variable para limpiarla

*/