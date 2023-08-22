document.addEventListener('DOMContentLoaded', function () {
    // Obtener el dato del localStorage
    const datoGuardado = localStorage.getItem('datos'); // llamar el nombre, no el contenido
    // Comprobar si el dato existe en el localStorage
    if (datoGuardado) {
        // Mostrar el dato en la página
        const dataSpan = document.getElementById('data');
        dataSpan.textContent = datoGuardado;
    }
});
