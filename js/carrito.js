// Muestra los productos del carrito y calcula el total
function cargarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const listaCarrito = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total");

  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((prod, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${prod.nombre} - $${prod.precio} x ${prod.cantidad} = $${prod.precio * prod.cantidad}
      <button>❌</button>`;
    li.querySelector("button").addEventListener("click", () => eliminarProducto(index)); // Permite eliminar
    listaCarrito.appendChild(li);
    total += prod.precio * prod.cantidad;
  });

  totalElemento.textContent = `Total: $${total}`; // Muestra el total
}

// Elimina un producto del carrito
function eliminarProducto(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cargarCarrito(); // Actualiza la lista
}

// Confirma la compra
document.getElementById("btn-confirmar").addEventListener("click", () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const mensajeCompra = document.getElementById("mensaje-compra");

  if (carrito.length === 0) {
    mensajeCompra.textContent = "⚠️ Tu carrito está vacío.";
    mensajeCompra.style.color = "#d94f4f";
  } else {
    mensajeCompra.textContent = "✅ ¡Compra realizada con éxito!";
    mensajeCompra.style.color = "#27ae60";
    localStorage.removeItem("carrito"); // Vacia el carrito
  }

  mensajeCompra.style.display = "block";
  cargarCarrito(); // Actualiza la lista
});

cargarCarrito(); // Carga el carrito al iniciar la página
