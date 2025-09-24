// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  const mensajeEstado = document.getElementById('mensaje-estado');

  // Evento al enviar el formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const correo = document.getElementById('l-correo').value.trim();
    const password = document.getElementById('l-password').value.trim();

    // Validación de campos vacíos
    if (correo === '' || password === '') {
      mensajeEstado.textContent = 'Por favor completa todos los campos.';
      mensajeEstado.style.color = 'red';
      return;
    }

    // Validación de credenciales
    if (correo === 'Admin@duoc.cl' && password === '12345') {
      mensajeEstado.textContent = '¡Inicio de sesión exitoso!';
      mensajeEstado.style.color = 'green';
      setTimeout(() => {
        window.location.href = 'Administrador.html';
      }, 1000);
    } else {
      mensajeEstado.textContent = 'Correo o contraseña incorrectos.';
      mensajeEstado.style.color = 'red';
    }
  });
});
