
cargar_footer_nav("../views/componentes/navegacion.html", document.getElementById("cargar_nav"));//NAVEGACION
cargar_footer_nav("../views/componentes/footer.html", document.getElementById("cargar_footer"));//FOOTER

function cargar_footer_nav(url_direccion, contenedor) {

    var peticion = new XMLHttpRequest();
    peticion.open("GET", url_direccion);
    peticion.send();
    peticion.onreadystatechange = () => {
        if (peticion.readyState == 4 && peticion.status == 200) {

            contenedor.innerHTML = peticion.responseText;

        }
    };

}