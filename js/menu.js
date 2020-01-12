function menu_desplegable(yomismo) {

    var contenedor = yomismo.nextElementSibling;
    if (contenedor.style.maxHeight) {
        contenedor.style.maxHeight = null;
    } else {
        contenedor.style.maxHeight = contenedor.scrollHeight + "px";
    }

}