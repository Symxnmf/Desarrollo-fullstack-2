// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-registro');
  const mensajeEstado = document.getElementById('mensaje-estado');

  // Evento al enviar el formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const comuna = document.getElementById('comuna').value.trim();

    // Quita estados previos
    mensajeEstado.classList.remove('ok', 'error');

    // Validación de campos vacíos
    if (!nombre || !apellido || !correo || !password || !pais || !comuna) {
      mensajeEstado.textContent = 'Por favor completa todos los campos.';
      mensajeEstado.classList.add('error');
      return;
    }

    // Guarda datos en el local storage
    const usuario = { nombre, apellido, correo, password, pais, comuna };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    mensajeEstado.textContent = '¡Registro exitoso!';
    mensajeEstado.classList.add('ok');

    form.reset();

    // Redirige después de 1.5 segundos
    setTimeout(() => {
      window.location.href = 'productos.html';
    }, 1500);
  });
});
