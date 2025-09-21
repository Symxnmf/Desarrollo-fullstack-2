document.getElementById("form-contacto").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("c-nombre").value.trim();
  const correo = document.getElementById("c-correo").value.trim();
  const comentario = document.getElementById("c-comentario").value.trim();
  const mensajeEstado = document.getElementById("mensaje-estado");

  if (nombre && correo && comentario) {
    mensajeEstado.textContent = "¡Gracias por contactarnos, " + nombre + "! Hemos recibido tu mensaje.";
    mensajeEstado.className = "ok";
    mensajeEstado.style.display = "block";
    this.reset();
  } else {
    mensajeEstado.textContent = "⚠️ Por favor, completa todos los campos.";
    mensajeEstado.className = "error";
    mensajeEstado.style.display = "block";
  }
});
