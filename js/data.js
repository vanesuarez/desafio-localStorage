document.addEventListener("DOMContentLoaded", function () {
  // Obtener el dato del localStorage
  const datoGuardado = localStorage.getItem("datos"); // llamar el nombre
  // Mostrar el dato en la página
  const dataSpan = document.getElementById("data");
  dataSpan.textContent = datoGuardado;
});
