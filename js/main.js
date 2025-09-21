// ----------- Productos y Carrito ----------- 
let productos = [
  { id: 1, nombre: "Torta de Chocolate", precio: 10000 },
  { id: 2, nombre: "Pie de Limón", precio: 8000 },
  { id: 3, nombre: "Cheesecake", precio: 12000 }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos() {
  const cont = document.getElementById("lista-productos");
  if (!cont) return;
  cont.innerHTML = "";
  productos.forEach(p => {
    let div = document.createElement("div");
    div.innerHTML = `${p.nombre} - $${p.precio} <button onclick="agregarCarrito(${p.id})">Agregar</button>`;
    cont.appendChild(div);
  });
}

function agregarCarrito(id) {
  let prod = productos.find(p => p.id === id);
  carrito.push(prod);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  const totalTxt = document.getElementById("total");
  if (!lista) return;
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach(p => {
    let li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    lista.appendChild(li);
    total += p.precio;
  });
  totalTxt.textContent = "Total: $" + total;
}

mostrarProductos();
mostrarCarrito();

// ----------- Contacto ----------- 
const formContacto = document.getElementById("form-contacto");
if (formContacto) {
  formContacto.addEventListener("submit", e => {
    e.preventDefault();
    let correo = document.getElementById("c-correo").value;
    if (!validaCorreo(correo)) {
      alert("Correo no válido. Solo se permiten @duoc.cl, @profesor.duoc.cl, @gmail.com");
      return;
    }
    alert("Mensaje enviado correctamente");
    formContacto.reset();
  });
}

// ----------- Login ----------- 
const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", e => {
    e.preventDefault();
    let correo = document.getElementById("l-correo").value;
    let pass = document.getElementById("l-pass").value;
    if (!validaCorreo(correo)) {
      alert("Correo inválido");
      return;
    }
    if (pass.length < 4 || pass.length > 10) {
      alert("Contraseña entre 4 y 10 caracteres");
      return;
    }
    alert("Login correcto");
  });
}

// ----------- Registro ----------- 
const formRegistro = document.getElementById("form-registro");
if (formRegistro) {
  formRegistro.addEventListener("submit", e => {
    e.preventDefault();
    let correo = document.getElementById("r-correo").value;
    let pass = document.getElementById("r-pass").value;
    if (!validaCorreo(correo)) {
      alert("Correo inválido");
      return;
    }
    if (pass.length < 4 || pass.length > 10) {
      alert("Contraseña entre 4 y 10 caracteres");
      return;
    }
    alert("Usuario registrado correctamente");
    formRegistro.reset();
  });
}


function validaCorreo(correo) {
  return correo.endsWith("@duoc.cl") || correo.endsWith("@profesor.duoc.cl") || correo.endsWith("@gmail.com");
}
