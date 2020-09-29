function colocar_eventos() {

    let paginas = ["ventajas.html", "who.html", "what.html", "ejm.html"];
    let buscador = document.body.querySelectorAll("nav a");

    for (let contador = 0; contador < buscador.length; contador++) {

        let vista  = paginas[contador]; 
        let link_a = buscador[contador];

        link_a.addEventListener('click', ()=> {

            let contenedor = document.getElementById("contenido_ajax");
            let enviar = `../views/secciones/${vista}`;
            cargar_vista(enviar, contenedor);

        });
        
    }
    
}

function cargar_vista(url_direccion, contenedor) {

    var peticion = new XMLHttpRequest();
    peticion.open("GET", url_direccion);
    peticion.send();
    peticion.onreadystatechange = () => {
        if (peticion.readyState == 4 && peticion.status == 200) {

            contenedor.innerHTML = peticion.responseText;

        }
    };

}

colocar_eventos();