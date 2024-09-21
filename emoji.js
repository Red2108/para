// script.js

// Seleccionamos los elementos de audio y el emoji
const audio = document.getElementById('miAudio'); // Música principal
const audioOculto = document.getElementById('audioOculto'); // Música oculta
const playButton = document.getElementById('playAudio');

// Reproduce el audio oculto automáticamente al cargar la página
audioOculto.play().catch((error) => {
    console.error("Error al reproducir el audio oculto:", error);
});

// Configuramos el volumen de la música principal
audio.volume = 1.0; // Valor entre 0.0 (silencio) y 1.0 (máximo)

// Agregamos un evento de clic al botón del corazón
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Reproduce la música principal
    } else {
        audio.pause(); // Pausa la música principal
    }
});

// Datos de las letras
var lyricsData = [
    { text: "Asi que voy a amarte cada noche...", time: 1 },
    { text: "como si fuera la ultima noche", time: 3 },
    { text: "Si el mundo se acabara...", time: 7 },
    { text: "quisiera estar...", time: 10 },
    { text: "A tu lado.", time: 12 },
    { text: "Si la fiesta se terminara...", time: 17 },
    { text: "y nuestro tiempo en la tierra...", time: 19 },
    { text: "se acabara", time: 22 },
    { text: "Quisiera abrazarte...", time: 26 },
    { text: "Solo por un momento", time: 28 },
    { text: "Y morir", time: 30 },
    { text: "con una sonrisa...", time: 33 },
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
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

setInterval(updateLyrics, 500);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation = "fadeOut 0.4s ease-in-out forwards";
    setTimeout(function () {
        titulo.style.display = "none";
    }, 500);
}

setTimeout(ocultarTitulo, 216000);
