/*********************************___: INICIO :___*************************************/
/*********************************___: INICIO :___*************************************/
/*********************************___: INICIO :___*************************************/
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del DOM
    const instructionsButton = document.getElementById("instructions-button");
    const startButton = document.getElementById("start-button");
    const instructionsContainer = document.getElementById("instructions-container");
    const closeInstructionsButton = document.getElementById("close-instructions");

    // Agregar listeners a los botones
    instructionsButton.addEventListener("click", function() {
        // Mostrar el contenedor de instrucciones
        instructionsContainer.style.display = "block";
    });

    startButton.addEventListener("click", function() {
        // Redirigir a otra página
        window.location.href = "game.html";
    });
    

    closeInstructionsButton.addEventListener("click", function() {
        // Ocultar el contenedor de instrucciones cuando se hace clic en el botón de cerrar
        instructionsContainer.style.display = "none";
    });
});


/*********************************___: JUEGO :___*************************************/
/*********************************___: JUEGO :___*************************************/
/*********************************___: JUEGO :___*************************************/

document.addEventListener("DOMContentLoaded", function() {
    const personaje = document.getElementById("personaje");

    // Función para actualizar la posición del personaje
    function actualizarPosicion(event) {
        // Obtener la posición del ratón
        const x = event.clientX;
        const y = event.clientY;

        // Obtener el ancho y alto de la imagen
        const anchoPersonaje = personaje.offsetWidth;
        const altoPersonaje = personaje.offsetHeight;

        // Calcular la nueva posición para centrar la imagen en el puntero
        const nuevaPosX = x - (anchoPersonaje / 2);
        const nuevaPosY = y - (altoPersonaje / 2);

        // Actualizar la posición del personaje
        personaje.style.left = nuevaPosX + "px";
        personaje.style.top = nuevaPosY + "px";
    }

    // Escuchar eventos de movimiento del ratón
    document.addEventListener("mousemove", actualizarPosicion);
});

