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
    { text: "como si fuera la ultima noche.", time: 2 }, // Ajusta estos tiempos
    { text: "Si el mundo se acabara...", time: 5 }, 
    { text: "quisiera estar...", time: 8 },
    { text: "A tu lado.", time: 10 },
    { text: "Si la fiesta se terminara...", time: 14 },
    { text: "y nuestro tiempo en la tierra...", time: 16 },
    { text: "se acabara.", time: 19 },
    { text: "Quisiera abrazarte...", time: 23 },
    { text: "Solo por un momento🥺", time: 25 },
    { text: "Y morir", time: 27 },
    { text: "con una sonrisa.🥰", time: 30 },
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audioPrincipal.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 4
    );

    if (currentLine) {
        var fadeInDuration = 0.1; 
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
        
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

// Actualización cada 500 milisegundos
setInterval(updateLyrics, 500);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation = "fadeOut 0.4s ease-in-out forwards"; 
    setTimeout(function () {
        titulo.style.display = "none";
    }, 500); 
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);
