
var link_principal = "../views/secciones/";
var paginas        = ["ventajas.html", "who.html", "what.html", "ejm.html"];
var contenedor     = document.getElementById("contenido_ajax");

function colocar_eventos() {

    let buscador = document.body.querySelectorAll("nav a");

    for (let contador = 0; contador < buscador.length; contador++) {

        let vista = paginas[contador];
        let crear = vista === "ejm.html" ? true : false;
        let link_a = buscador[contador];

        link_a.addEventListener('click', () => {

            let enviar = link_principal + vista;
            cargar_vista(enviar, contenedor, crear);

            if (window.innerWidth <= 600) {
                menu_desplegable();
            }

        });

    }
}

function cargar_vista(url_direccion, contenedor, crear) {

    var peticion = new XMLHttpRequest();
    peticion.open("GET", url_direccion);
    peticion.send();
    peticion.onreadystatechange = () => {
        if (peticion.readyState == 4 && peticion.status == 200) {

            contenedor.innerHTML = peticion.responseText;

            if(crear === true){
                crear_juego_ajedrez(); 
            }

        }
    };
}

colocar_eventos();
cargar_vista(link_principal + paginas[0], contenedor);