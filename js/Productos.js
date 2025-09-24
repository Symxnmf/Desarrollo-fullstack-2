// Lista de productos con información completa
const productos = [
  { nombre: "Brownies", precio: 2500, descripcion: "Brownies caseros...", imagen: "../img/Productos.brownies.jpg" },
  { nombre: "Cheesecake", precio: 3500, descripcion: "Cheesecake cremoso...", imagen: "../img/Productos.cheesecake.avif" },
  { nombre: "Pastel Tres Leches", precio: 3000, descripcion: "Bizcocho esponjoso...", imagen: "../img/Productos.pastel-tres-leches.jpg" },
  { nombre: "Tarta Sacher", precio: 4000, descripcion: "Pastel clásico vienés...", imagen: "../img/Productos.tarta.sacher.jpeg" },
  { nombre: "Tiramisú", precio: 3800, descripcion: "Postre italiano con capas...", imagen: "../img/Productos.tiramisu.jpg" }
];

// Contenedor de productos
const listaProductos = document.getElementById("lista-productos");
listaProductos.classList.add("productos");

// Mensaje temporal al agregar al carrito
const mensaje = document.createElement("p");
mensaje.style.textAlign = "center";
mensaje.style.fontWeight = "bold";
mensaje.style.color = "#27ae60";
listaProductos.parentNode.insertBefore(mensaje, listaProductos.nextSibling);

// Mostrar productos en la página
productos.forEach((prod) => {
  const div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.descripcion}</p>
    <p><strong>$${prod.precio}</strong></p>
    <button>Agregar al carrito</button>
  `;

  // Botón para agregar al carrito
  const btn = div.querySelector("button");
  btn.addEventListener("click", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Si ya está, aumenta cantidad; si no, lo agrega
    const existente = carrito.find(item => item.nombre === prod.nombre);
    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({ nombre: prod.nombre, precio: prod.precio, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Mensaje temporal de confirmación
    mensaje.textContent = `✅ ${prod.nombre} agregado al carrito`;
    setTimeout(() => { mensaje.textContent = ""; }, 2000);
  });

  listaProductos.appendChild(div); // Agrega producto a la página
});
