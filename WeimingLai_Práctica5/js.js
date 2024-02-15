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
