// script.js

// Seleccionamos los elementos de audio y el botón
const audioOculto = document.getElementById('audioOculto');
const audioPrincipal = document.getElementById('miAudio');
const playButton = document.getElementById('playAudio');
const lyrics = document.querySelector("#lyrics");

// Configuración inicial
audioOculto.volume = 1.0;
audioPrincipal.volume = 1.0;

// Reproduce la música oculta al cargar la página
audioOculto.play().catch((error) => {
    console.error("Error al reproducir el audio oculto:", error);
});

// Evento para pausar la música oculta al finalizar
audioOculto.addEventListener('ended', () => {
    audioOculto.pause();
    audioOculto.currentTime = 0; // Reinicia el tiempo
});

// Evento para el botón del corazón
playButton.addEventListener('click', () => {
    if (audioPrincipal.paused) {
        audioPrincipal.play(); // Reproduce la música principal
        audioOculto.pause(); // Pausa la música oculta
        audioOculto.currentTime = 0; // Reinicia la música oculta
    } else {
        audioPrincipal.pause(); // Pausa la música principal
    }
});

// Pausa la música oculta al iniciar la música principal
audioPrincipal.addEventListener('play', () => {
    audioOculto.pause();
    audioOculto.currentTime = 0; // Reinicia la música oculta
});

// Sincronizar las letras con la canción
var lyricsData = [
    { text: "Asi que voy a amarte cada noche...", time: 0 },
    { text: "como si fuera la ultima noche.", time: 1.5 },
    { text: "Si el mundo se acabara...", time: 3 },
    { text: "quisiera estar...", time: 5.5 },
    { text: "A tu lado.", time: 7.5 },
    { text: "Si la fiesta se terminara...", time: 10 },
    { text: "y nuestro tiempo en la tierra...", time: 12 },
    { text: "se acabara.", time: 15 },
    { text: "Quisiera abrazarte...", time: 18 },
    { text: "Solo por un momento🥺", time: 20 },
    { text: "Y morir", time: 22 },
    { text: "con una sonrisa.🥰", time: 24 },
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audioPrincipal.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 4 // Velocidad igual a la que pediste
    );

    if (currentLine) {
        // Calcula la opacidad basada en el tiempo en la línea actual
        var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

        // Aplica el efecto de aparición
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

// Cambié a 500 milisegundos para mayor frecuencia de actualización
setInterval(updateLyrics, 500);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation = "fadeOut 0.4s ease-in-out forwards"; // Duración y función de temporización de la desaparición
    setTimeout(function () {
        titulo.style.display = "none";
    }, 500); // Espera antes de ocultar completamente
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);
