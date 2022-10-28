

//AGREGAR PRODUCTOS AL CARRITO

let carrito = [];
let carritoProductos = document.getElementById("carrito-productos");

function AgregarAlCarrito(id){
    let totalContainer = document.getElementById("carrito-total");
    totalContainer.classList.add("display-all");

    let producto = productos.find((producto) => producto.id === id);
    let productoEnCarrito = carrito.find((producto) => producto.id === id);
     

    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    } else { producto.cantidad = 1 ; carrito.push(producto) }

    renderizarCarrito();
    calcularTotal();
    guardarStorage();

    Toastify({
        text: "Añadiste un producto",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

function renderizarCarrito(){
    carritoProductos.innerHTML = ""; 
    carrito.forEach(producto => {
    let productoHTML = 
    `<div class="card-carrito" style="width: 12rem;">
        
        <div class="card-body">
            <h5 class="card-title">${producto.modelo}</h5>
            <p class="card-text">Precio: $${producto.precio}</p>
            <p class="card-text">Cantidad: ${producto.cantidad}</p>
            <a class="btn btn-eliminar" onclick="eliminarProducto(${producto.id})">Eliminar</a>
        </div>
    </div>`;
    carritoProductos.innerHTML += productoHTML;
    calcularTotal();
    
})
}

function calcularTotal(){
    let total = 0;
    
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
        let carritoTotal = document.getElementById("carrito-total");
        carritoTotal.innerHTML = `<div>
        <p class="card-text">Total: $${total}</p>
        <a class="btn btn-vaciar" onclick="vaciarCarrito(${producto.id})">Vaciar</a>`;
    })  
}

//ELIMINAR PRODUCTOS DEL CARRITO

function vaciarCarrito(){
    carrito.splice(0);
    renderizarCarrito();
    calcularTotal();
    guardarStorage();
    let carritoTotal = document.getElementById("carrito-total");
    carritoTotal.innerHTML = "";
}

//ELIMINAR UN PRODUCTO DEL CARRITO

function eliminarProducto(id){
    let productoEliminado = carrito.find(producto => producto.id === id);
    
    if(productoEliminado.cantidad === 1){
        let indexProductoEliminado = carrito.indexOf(productoEliminado);
        carrito.splice(indexProductoEliminado, 1);
    }

    productoEliminado.cantidad > 1 && (productoEliminado.cantidad -= 1)

    if(carrito.length == 0){
        let carritoTotal = document.getElementById("carrito-total");
        carritoTotal.innerHTML = "";

    }

    renderizarCarrito()
    calcularTotal()
    guardarStorage()
}

//ABRIR CARRITO

let containerCarrito = document.getElementById("container-carrito");
let iconCarrito = document.getElementById("icon-carrito");

iconCarrito.addEventListener("click", ()=> {
    containerCarrito.classList.add("container-carrito-ampliado")
})

function cerrarCarrito(){
    containerCarrito.classList.remove("container-carrito-ampliado")
}

seccionProductos.addEventListener("click", cerrarCarrito);

//DETALLES ESTETICOS



