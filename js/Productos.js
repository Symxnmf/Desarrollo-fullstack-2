const productos = [
  {
    nombre: "Brownies",
    precio: 2500,
    descripcion: "Brownies caseros de chocolate con nueces y cobertura suave.",
    imagen: "../img/Productos.brownies.jpg"
  },
  {
    nombre: "Cheesecake",
    precio: 3500,
    descripcion: "Cheesecake cremoso con base de galleta y mermelada de frutos rojos.",
    imagen: "../img/Productos.cheesecake.avif"
  },
  {
    nombre: "Pastel Tres Leches",
    precio: 3000,
    descripcion: "Bizcocho esponjoso bañado en tres tipos de leche y crema batida.",
    imagen: "../img/Productos.pastel-tres-leches.jpg"
  },
  {
    nombre: "Tarta Sacher",
    precio: 4000,
    descripcion: "Pastel clásico vienés de chocolate relleno de mermelada de damasco.",
    imagen: "../img/Productos.tarta.sacher.jpeg"
  },
  {
    nombre: "Tiramisú",
    precio: 3800,
    descripcion: "Postre italiano con capas de bizcocho de café y crema de mascarpone.",
    imagen: "../img/Productos.tiramisu.jpg"
  }
];

// Cargar productos
const listaProductos = document.getElementById("lista-productos");
listaProductos.classList.add("productos");

// Crear contenedor para mensaje
const mensaje = document.createElement("p");
mensaje.style.textAlign = "center";
mensaje.style.fontWeight = "bold";
mensaje.style.color = "#27ae60";
listaProductos.parentNode.insertBefore(mensaje, listaProductos.nextSibling);

productos.forEach((prod, index) => {
  const div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.descripcion}</p>
    <p><strong>$${prod.precio}</strong></p>
    <button>Agregar al carrito</button>
  `;

  const btn = div.querySelector("button");
  btn.addEventListener("click", () => {
    // Tomar carrito de localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Buscar si el producto ya existe
    const existente = carrito.find(item => item.nombre === prod.nombre);
    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({ nombre: prod.nombre, precio: prod.precio, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Mensaje temporal
    mensaje.textContent = `✅ ${prod.nombre} agregado al carrito`;
    setTimeout(() => { mensaje.textContent = ""; }, 2000);
  });

  listaProductos.appendChild(div);
});
