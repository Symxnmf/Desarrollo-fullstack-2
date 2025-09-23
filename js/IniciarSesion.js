
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  const mensajeEstado = document.getElementById('mensaje-estado');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    
    const correo = document.getElementById('l-correo').value.trim();
    const password = document.getElementById('l-password').value.trim();

  
    if (correo === '' || password === '') {
      mensajeEstado.textContent = 'Por favor completa todos los campos.';
      mensajeEstado.style.color = 'red';
      return;
    }


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
