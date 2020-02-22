function crear_cuadros_vectores() {

    let indicador_color = 0;
    //let lista = ["A","B","C","D","E","F","G","H"];

    for (let contador = 8; contador > 0; contador--) {

        for (let cuadros = 1; cuadros < 9; cuadros++) {

            let cuadro = document.createElement("div");
            //cuadro.id = `cuadro[${lista[contador]},${cuadros}]`;
            cuadro.id = `cuadro[${contador},${cuadros}]`;
            //cuadro.innerHTML = "&#10060;";
            cuadro.addEventListener("click", movimiento_piezas);
            document.getElementById("tablero_principal_ajedrez").appendChild(cuadro);

            if (indicador_color == 0) {

                if (cuadros % 2) {
                    cuadro.classList.add("ficha_blanca");
                    cuadro.style.backgroundColor = coloresTablero[0];
                } else {
                    cuadro.classList.add("ficha_negro");
                    cuadro.style.backgroundColor = coloresTablero[1];
                }
    
            } else {
    
                if (cuadros % 2) {
                    cuadro.classList.add("ficha_negro");
                    cuadro.style.backgroundColor = coloresTablero[1];
                } else {
                    cuadro.classList.add("ficha_blanca");
                    cuadro.style.backgroundColor = coloresTablero[0];
                }
    
            }
    
            if (cuadros % 8 == 0) {
    
                if (indicador_color == 0) {
                    indicador_color = 1;
                } else {
                    indicador_color = 0;
                }
    
            }
   
        }

    }
    
}

function crear_piezas() {

    crear_peones();
    crear_caballos();
    crear_bishop();
    crear_torres();
    crear_reinas();
    crear_reyes();
    
}

function crear_peones() {

    let habilitado = true;
    let contador = 1;
    let flujo = ggValidaciones[1];

    while (habilitado) {

        let cuadro_capturado;
        let nuevo_peon = document.createElement("i");
        nuevo_peon.classList.add("fas");
        nuevo_peon.classList.add("fa-chess-pawn");
        nuevo_peon.addEventListener("click", () => {

            movimiento_pieza(nuevo_peon, "peon");

        });

        if (flujo == ggValidaciones[1]) {
            
            nuevo_peon.style.color = colores[0];
            nuevo_peon.id = `peon_${colores[0]}_${contador}`;
            cuadro_capturado = document.getElementById(`cuadro[7,${contador}]`);

        } else {

            nuevo_peon.style.color = colores[1];
            nuevo_peon.id = `peon_${colores[1]}_${contador}`;
            cuadro_capturado = document.getElementById(`cuadro[2,${contador}]`);

        }

        cuadro_capturado.appendChild(nuevo_peon);

        if (contador == 8) {

            if (flujo == ggValidaciones[0]) {
                habilitado = false;
            }

            contador = 0;
            flujo = ggValidaciones[0];
            
        }

        contador++;

    }
    
}

function crear_caballos() {

    let posicion_x = [2,7];
    //let posicion_y = ["A","H"];
    let posicion_y = [1,8];

    for (let calculo = 0; calculo < posicion_x.length; calculo++) {

        for (let asignar_caballo = 0; asignar_caballo < posicion_x.length; asignar_caballo++) {

            let cuadro_capturado = document.getElementById(`cuadro[${posicion_y[calculo]},${posicion_x[asignar_caballo]}]`);
            let nuevo_caballo = document.createElement("i");
            nuevo_caballo.classList.add("fas");
            nuevo_caballo.classList.add("fa-chess-knight");
            nuevo_caballo.addEventListener("click", () => {

                movimiento_pieza(nuevo_caballo, "caballo");
    
            });

            if (calculo == 0) {
                nuevo_caballo.style.color = colores[calculo+1];
                nuevo_caballo.id = `caballo_${colores[1]}_${asignar_caballo}`;
            } else {
                nuevo_caballo.style.color = colores[calculo-1];
                nuevo_caballo.id = `caballo_${colores[0]}_${asignar_caballo}`;
            }

            cuadro_capturado.appendChild(nuevo_caballo);

        }
        
    }

}

function crear_bishop() {

    let posicion_x = [3,6];
    //let posicion_y = ["A","H"];
    let posicion_y = [1,8];

    for (let calculo = 0; calculo < posicion_x.length; calculo++) {

        for (let asignar_bishop = 0; asignar_bishop < posicion_x.length; asignar_bishop++) {

            let cuadro_capturado = document.getElementById(`cuadro[${posicion_y[calculo]},${posicion_x[asignar_bishop]}]`);
            let nuevo_bishop = document.createElement("i");
            nuevo_bishop.classList.add("fas");
            nuevo_bishop.classList.add("fa-chess-bishop");
            nuevo_bishop.addEventListener("click", () => {

                movimiento_pieza(nuevo_bishop, "bishop");
    
            });

            if (calculo == 0) {
                nuevo_bishop.style.color = colores[calculo+1];
                nuevo_bishop.id = `bishop_${colores[1]}_${asignar_bishop}`;
            } else {
                nuevo_bishop.style.color = colores[calculo-1];
                nuevo_bishop.id = `bishop_${colores[0]}_${asignar_bishop}`;
            }

            cuadro_capturado.appendChild(nuevo_bishop);

        }
        
    }

}

function crear_torres() {

    let posicion_x = [1,8];
    //let posicion_y = ["A","H"];
    let posicion_y = [1,8];

    for (let calculo = 0; calculo < posicion_x.length; calculo++) {

        for (let asignar_torres = 0; asignar_torres < posicion_x.length; asignar_torres++) {

            let cuadro_capturado = document.getElementById(`cuadro[${posicion_y[calculo]},${posicion_x[asignar_torres]}]`);
            let nueva_torre = document.createElement("i");
            nueva_torre.classList.add("fas");
            nueva_torre.classList.add("fa-chess-rook");
            nueva_torre.addEventListener("click", () => {

                movimiento_pieza(nueva_torre, "torre");
    
            });

            if (calculo == 0) {
                nueva_torre.style.color = colores[calculo+1];
                nueva_torre.id = `torre_${colores[1]}_${asignar_torres}`;
            } else {
                nueva_torre.style.color = colores[0];
                nueva_torre.id = `torre_${colores[0]}_${asignar_torres}`;
            }

            cuadro_capturado.appendChild(nueva_torre);

        }
        
    }

}

function crear_reinas() {

    let posicion_x = [4];
    //let posicion_y = ["A","H"];
    let posicion_y = [1,8];

    for (let asignar_reina = 0; asignar_reina < posicion_y.length; asignar_reina++) {

        let cuadro_capturado = document.getElementById(`cuadro[${posicion_y[asignar_reina]},${posicion_x[0]}]`);
        let nueva_reina = document.createElement("i");
        nueva_reina.classList.add("fas");
        nueva_reina.classList.add("fa-chess-queen");
        nueva_reina.addEventListener("click", () => {

            movimiento_pieza(nueva_reina, "reina");

        });

        if (asignar_reina == 0) {
            nueva_reina.style.color = colores[asignar_reina + 1];
            nueva_reina.id = `reina_${colores[1]}_${asignar_reina}`;
        } else {
            nueva_reina.style.color = colores[asignar_reina - 1];
            nueva_reina.id = `reina_${colores[0]}_${asignar_reina}`;
        }

        cuadro_capturado.appendChild(nueva_reina);

    }

}

function crear_reyes() {

    let posicion_x = [5];
    //let posicion_y = ["A","H"];
    let posicion_y = [1,8];

    for (let asignar_rey = 0; asignar_rey < posicion_y.length; asignar_rey++) {

        let cuadro_capturado = document.getElementById(`cuadro[${posicion_y[asignar_rey]},${posicion_x[0]}]`);
        let nuevo_rey = document.createElement("i");
        nuevo_rey.classList.add("fas");
        nuevo_rey.classList.add("fa-chess-king");
        nuevo_rey.addEventListener("click", () => {

            movimiento_pieza(nuevo_rey, "rey");

        });

        if (asignar_rey == 0) {
            nuevo_rey.style.color = colores[asignar_rey + 1];
            nuevo_rey.id = `rey_${colores[1]}_${asignar_rey}`;
        } else {
            nuevo_rey.style.color = colores[asignar_rey - 1];
            nuevo_rey.id = `rey_${colores[0]}_${asignar_rey}`;
        }

        cuadro_capturado.appendChild(nuevo_rey);

    }

}