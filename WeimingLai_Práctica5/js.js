/*********************************___: INICIO :___*************************************/
/*********************************___: INICIO :___*************************************/
/*********************************___: INICIO :___*************************************/
document.addEventListener("DOMContentLoaded", function() {
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

/**********************************************************************/

var puntos = 0;
var vidas = 5;
var intervalo;
var colision = false;

//Función para aumentar la puntuación cada segundo con ---setinterval---
function aumentarPuntuacion() {
    return new Promise((resolve, reject) => { //--Promesa--
        intervalo = setInterval(function() {
            puntos++;
            document.getElementById("puntos").textContent = puntos;
            if (colision) {
                restarVida();
                colision = false;
            }
            resolve(); 
        }, 1000);
    });
}

// Función para restar una vida
function restarVida() {
    vidas--;
    document.getElementById("vidas").textContent = vidas;
    if (vidas === 0) {
        clearInterval(intervalo); //--CLEARINTERVAL--
        window.location.href = "game_over.html";
    }
}

// Función para verificar la colisión
function verificarColision() {
    var vayne = document.getElementById("personaje");
    var vayneRect = vayne.getBoundingClientRect();

    // Obstáculos
    var obstaculo = document.getElementById("obstaculo");
    var obstaculo2 = document.getElementById("obstaculo2");
    var obstaculo3 = document.getElementById("obstaculo3");

    var obstaculoRect = obstaculo.getBoundingClientRect();
    var obstaculoRect2 = obstaculo2.getBoundingClientRect();
    var obstaculoRect3 = obstaculo3.getBoundingClientRect();

    // Verificar colisión con obstáculo 1
    if (verificarColisionIndividual(vayneRect, obstaculoRect)) {
        colision = true;
    }

    // Verificar colisión con obstáculo 2
    if (verificarColisionIndividual(vayneRect, obstaculoRect2)) {
        colision = true;
    }

    // Verificar colisión con obstáculo 3
    if (verificarColisionIndividual(vayneRect, obstaculoRect3)) {
        colision = true;
    }
}

// Función para verificar colisión individual
function verificarColisionIndividual(vayneRect, obstaculoRect) {
    return (
        vayneRect.left < obstaculoRect.right &&
        vayneRect.right > obstaculoRect.left &&
        vayneRect.top < obstaculoRect.bottom &&
        vayneRect.bottom > obstaculoRect.top
    );
}

aumentarPuntuacion().then(() => {
    setInterval(function() {
        verificarColision();
    }, 1); // Verificar cada 1 milisegundos
});


    /**********************************************************************/

    var obstaculo = document.getElementById("obstaculo");
    var obstaculo2 = document.getElementById("obstaculo2");
    var obstaculo3 = document.getElementById("obstaculo3");

    // Función posición aleatoria
    function nuevaPosicionHorizontal(elemento) {
        var ventanaAncho = window.innerWidth;

        var posicionInicialX = Math.floor(Math.random() * (ventanaAncho - 100));

        elemento.style.left = posicionInicialX + "px";
    }

    // Llamar a la función para establecer la posición inicial para cada obstáculo
    nuevaPosicionHorizontal(obstaculo);
    nuevaPosicionHorizontal(obstaculo2);
    nuevaPosicionHorizontal(obstaculo3);

    obstaculo.addEventListener("animationiteration", function() {
        nuevaPosicionHorizontal(obstaculo);
    });

    obstaculo2.addEventListener("animationiteration", function() {
        nuevaPosicionHorizontal(obstaculo2);
    });

    obstaculo3.addEventListener("animationiteration", function() {
        nuevaPosicionHorizontal(obstaculo3);
    });
});

