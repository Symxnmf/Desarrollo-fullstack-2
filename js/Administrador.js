document.addEventListener('DOMContentLoaded', () => {
  const formAgregar = document.getElementById('form-agregar');
  const nombreInput = document.getElementById('nombre');
  const precioInput = document.getElementById('precio');
  const productosBody = document.getElementById('productos-body');

  
  let productos = [
    { nombre: 'Pastel de Chocolate', precio: 12000 },
    { nombre: 'Pastel de Vainilla', precio: 10000 }
  ];


  function mostrarProductos() {
    productosBody.innerHTML = '';
    productos.forEach((producto, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>
          <button onclick="editarProducto(${index})">Editar</button>
          <button onclick="eliminarProducto(${index})">Eliminar</button>
        </td>
      `;
      productosBody.appendChild(row);
    });
  }

 
  formAgregar.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    const precio = parseInt(precioInput.value);

    if (nombre && precio >= 0) {
      productos.push({ nombre, precio });
      nombreInput.value = '';
      precioInput.value = '';
      mostrarProductos();
    }
  });

  
  window.editarProducto = (index) => {
    const nuevoNombre = prompt('Nuevo nombre:', productos[index].nombre);
    const nuevoPrecio = prompt('Nuevo precio:', productos[index].precio);

    if (nuevoNombre !== null && nuevoPrecio !== null) {
      productos[index].nombre = nuevoNombre;
      productos[index].precio = parseInt(nuevoPrecio);
      mostrarProductos();
    }
  };

  
  window.eliminarProducto = (index) => {
    if (confirm('¿Estás seguro de eliminar este pastel?')) {
      productos.splice(index, 1);
      mostrarProductos();
    }
  };

  
  mostrarProductos();
});
