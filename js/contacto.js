// Este se activa cuando el usuario intenta enviar el formulario (evento "submit").
document.getElementById("form-contacto").addEventListener("submit", function(event) {
  // (recargar la página).
  event.preventDefault();

  // Se obtienen y limpian los valores
  const nombre = document.getElementById("c-nombre").value.trim();
  const correo = document.getElementById("c-correo").value.trim();
  const comentario = document.getElementById("c-comentario").value.trim();

  // Se referencia el elemento donde se mostrará el mensaje de estado (éxito o error).
  const mensajeEstado = document.getElementById("mensaje-estado");

  // Validación: si todos los campos tienen contenido
  if (nombre && correo && comentario) {
    // Se muestra un mensaje personalizado de confirmación.
    mensajeEstado.textContent = "¡Gracias por contactarnos, " + nombre + "! Hemos recibido tu mensaje.";
    mensajeEstado.className = "ok"; 
    mensajeEstado.style.display = "block"; // Se asegura que sea visible.
    this.reset(); // Se limpia el formulario después de enviarlo.
  } else {
    // Si falta algún campo, se muestra un mensaje de advertencia
    mensajeEstado.textContent = "⚠️ Por favor, completa todos los campos.";
    mensajeEstado.className = "error"; 
    mensajeEstado.style.display = "block"; 
  }
});