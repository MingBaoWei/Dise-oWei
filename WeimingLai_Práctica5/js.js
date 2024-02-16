/*********************************___: INICIO :___*************************************/
/*********************************___: INICIO :___*************************************/
/*********************************___: INICIO :___*************************************/
document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del DOM
    const instructionsButton = document.getElementById("instructions-button");
    const startButton = document.getElementById("start-button");
    const instructionsContainer = document.getElementById("instructions-container");
    const closeInstructionsButton = document.getElementById("close-instructions");

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


document.addEventListener("DOMContentLoaded", function() {
    var puntos = 0;
    var vidas = 3;
    var intervalo;
    var colision = false; 

    // Función para aumentar la puntuación cada segundo con setinterval
    function aumentarPuntuacion() {
        intervalo = setInterval(function() {
            puntos++;
            document.getElementById("puntos").textContent = puntos;
            if (colision) {
                restarVida();
                colision = false;
            }
        }, 1000);
    }

    // Función para restar una vida
    function restarVida() {
        vidas--;
        document.getElementById("vidas").textContent = vidas;
        if (vidas === 0) {
            clearInterval(intervalo); //CLEARINTERVAL
            gameOver();
        }
    }

    // Función para mostrar la pantalla de Game Over
    function gameOver() {
        window.location.href = "game_over.html";
    }

    // Función para verificar la colisión entre "vayne" y "obstaculo"
    function verificarColision() {
        var vayne = document.getElementById("personaje");
        var obstaculo = document.getElementById("obstaculo");
        var vayneRect = vayne.getBoundingClientRect();
        var obstaculoRect = obstaculo.getBoundingClientRect();

        if (
            vayneRect.left < obstaculoRect.right &&
            vayneRect.right > obstaculoRect.left &&
            vayneRect.top < obstaculoRect.bottom &&
            vayneRect.bottom > obstaculoRect.top
        ) {
            colision = true; 
            setTimeout(function() {
                colision = false; // Después de 1 segundo, volver a permitir la colisión
            }, 1000);
        }
    }

    aumentarPuntuacion();

    setInterval(function() {
        verificarColision();
    }, 1); // Verificar cada 1 milisegundos

    var obstaculo = document.getElementById("obstaculo");

    // Obtener el ancho de la ventana del navegador
    var ventanaAncho = window.innerWidth;

    // Generar una posición horizontal aleatoria para el obstáculo
    var posicionInicialX = Math.floor(Math.random() * (ventanaAncho - 100)); // Restamos 100 para tener en cuenta el ancho del obstáculo

    // Aplicar la posición horizontal aleatoria al estilo del obstáculo
    obstaculo.style.left = posicionInicialX + "px";
    
});



