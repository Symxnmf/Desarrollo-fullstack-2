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

let carrito = [];

const listaProductos = document.getElementById("lista-productos");
listaProductos.classList.add("productos");

productos.forEach((prod, index) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>${prod.descripcion}</p>
    <p><strong>$${prod.precio}</strong></p>
    <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
  `;
  listaProductos.appendChild(div);
});

function agregarAlCarrito(index) {
  carrito.push(productos[index]);
  renderCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  renderCarrito();
}

function renderCarrito() {
  const listaCarrito = document.getElementById("carrito");
  const total = document.getElementById("total");

  listaCarrito.innerHTML = "";
  let suma = 0;

  carrito.forEach((prod, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${prod.nombre} - $${prod.precio}
      <button onclick="eliminarDelCarrito(${index})">❌</button>
    `;
    listaCarrito.appendChild(li);
    suma += prod.precio;
  });

  
  total.innerHTML = `
    Total: $${suma} 
    ${suma > 0 ? '<button onclick="confirmarPago()">Confirmar Pago</button>' : ""}
  `;
}


function confirmarPago() {
  alert("✅ Pago realizado con éxito. ¡Gracias por tu compra!");
  carrito = []; 
  renderCarrito(); 
}
