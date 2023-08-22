const datos = document.getElementById("inputText");
const botonGuardar = document.getElementById("buttonText");

document.addEventListener("DOMContentLoaded", function() { 

    botonGuardar.addEventListener("click", function(event) { 
        event.preventDefault();

        const datosUsuario = datos.value; // guarda los datos que ingresa el usuario en una constante

        localStorage.setItem("datos", datosUsuario); // guarda los datos en el navegador

    })

})