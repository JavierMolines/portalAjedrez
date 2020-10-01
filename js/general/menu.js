function menu_desplegable() {

    let contenedor  = document.querySelector(".menu_principal");
    let clase_lista = contenedor.className;
    
    if(/contraido/ig.test(clase_lista) === true){
        contenedor.classList.remove("contraido");
    } else {
        contenedor.classList.add("contraido");
    }

    if (contenedor.style.maxHeight) {
        contenedor.style.maxHeight = null;
    } else {
        contenedor.style.maxHeight = contenedor.scrollHeight + "px";
    }

}