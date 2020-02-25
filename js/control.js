function mostrar_detalles(elemento_recibido){

    let contenido_piezas = [

        ["Peon", "Es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante."],

        ["Alfin", "Se mueve sobre el tablero en una línea recta diagonal. Se puede mover tantas casillas como se quiera, hasta que se encuentre con el final del tablero o con otra pieza.El alfil no puede saltar sobre otras piezas. Captura del mismo modo que se desplaza, colocándose en la casilla de la pieza oponente.Debido a la manera en la que se mueve el alfil, la pieza siempre permanece en las casillas del mismo color que su casilla original. Cada jugador empieza con dos alfiles, uno en la casilla blanca y otro en la casilla negra.Con frecuencia se le llaman alfil de las casillas “negras” y alfil de las casillas “blancas”.Los alfiles también se pueden llamar según el lado en el que empiezan, alfil del rey o alfil de la reina."],

        ["Caballo", "Es la pieza más especial en el ajedrez, ya que tiene una flexibilidad que le hace una pieza poderosa, es la única pieza del tablero que puede saltar sobre otras piezas, el caballo se mueve dos casillas en dirección horizontal o vertical y después una casilla más en ángulo recto. El movimiento del caballo tiene la forma de una “ L ”, siempre se cae sobre una casilla del color contrario a la de su casilla inicial. El caballo puede saltar sobre piezas de cualquier color mientras se mueve hasta su casilla de destino, pero no captura a ninguna de las piezas sobre las que salte. El caballo realiza la captura colocándose en la casilla de la pieza oponente."],

        ["Torre", "Se mueve en una línea recta horizontal o vertical a lo largo de cualquier número de casillas desocupadas, hasta que alcanza el final del tablero o es bloqueado por otra pieza. No puede saltar sobre otras piezas. La torre captura de la misma manera en la que se mueve, ocupando la casilla en la que está la pieza oponente. La torre puede colocarse en cualquier casilla del tablero, por tanto es una de las piezas más poderosas."],

        ["Dama", "Se considera como la pieza más poderosa del tablero. Se puede mover cualquier número de casillas en línea recta, tanto de manera horizontal como vertical o diagonal. La reina se mueve como la torre y el alfil juntos. Excepto en una captura, la reina se debe mover a una casilla desocupada y no puede saltar sobre otras piezas. La reina captura de la misma manera en la que se desplaza, colocándose en la casilla de la pieza oponente."],

        ["Rey", "Es la pieza más importante del ajedrez. Si el rey está sitiado, de manera que su captura es inevitable, la partida se termina y ese jugador pierde. El rey puede moverse a cualquier casilla adyacente, es decir, se puede mover una casilla en cualquier dirección: horizontal, vertical o diagonal. El rey captura de la misma manera en que se mueve, colocándose en la casilla de la pieza oponente. Hay otra limitación adicional al movimiento del rey: no puede moverse a ninguna casilla que le expusiera al ataque de una pieza oponente (lo que se llama “jaque”). Como resultado de dicha limitación, dos reyes nunca se pueden situar uno al lado del otro, ya que cualquier movimiento hacia el rey oponente pondría al rey que se está moviendo en jaque. El rey también se puede ver forzado a mover o capturar si está siendo atacado (“jaque”) y la única forma de detener el ataque es mover el rey."]

    ];

    let texto_plasmar = "";
    let flujo_continuar = false;

    for(let contador = 0; contador < contenido_piezas.length; contador++){

        if(elemento_recibido.title == contenido_piezas[contador][0]){

            texto_plasmar = contenido_piezas[contador][1];
            flujo_continuar = true;

        }

    }

    if(flujo_continuar === true){

        let contenedor_detalles = document.createElement("div");
        let salir_detalles = document.createElement("span");
        let imagen_detalles = document.createElement("img");
        let titulo_detalles = document.createElement("h2");
        let texto_detalles = document.createElement("p");
 
        salir_detalles.innerHTML = "X";
        salir_detalles.addEventListener("click", ()=> {

            contenedor_detalles.classList.replace("contenedor_detalles_desplegados", "contenedor_detalles_no_desplegados");
            setTimeout(()=> {
                contenedor_detalles.remove();
            }, 2000);

        });

        imagen_detalles.src = elemento_recibido.src;
        titulo_detalles.innerHTML = elemento_recibido.title;
        texto_detalles.innerHTML = texto_plasmar;

        contenedor_detalles.classList.add("contenedor_principal_detalle_pieza");
        contenedor_detalles.classList.add("contenedor_detalles_no_desplegados");

        contenedor_detalles.appendChild(salir_detalles);
        contenedor_detalles.appendChild(imagen_detalles);
        contenedor_detalles.appendChild(titulo_detalles);
        contenedor_detalles.appendChild(texto_detalles);

        document.body.appendChild(contenedor_detalles);

        setTimeout(()=> {
            contenedor_detalles.classList.replace("contenedor_detalles_no_desplegados", "contenedor_detalles_desplegados");
        }, 200);

    }

}