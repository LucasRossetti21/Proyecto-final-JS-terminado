//GUARDAR CARRITO EN LOCAL STORAGE

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//LLAMAR CARRITO DESDE LOCAL STORAGE

function llamarCarritoGuardado(){
    let carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    for(const producto of carritoGuardado){
        carrito.push(producto);
    }
    calcularTotal()
    renderizarCarrito()
}

window.addEventListener("load", ()=> {
    llamarCarritoGuardado()
})
