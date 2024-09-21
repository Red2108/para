// script.js

// Seleccionamos el elemento de audio y el emoji
const audio = document.getElementById('miAudio');
const hiddenAudio = document.getElementById('hiddenAudio');
const lyrics = document.querySelector("#lyrics");
const playButton = document.getElementById('playAudio');

// Sincronizar las letras con la canción
audio.volume = 1.0; // Valor entre 0.0 (silencio) y 1.0 (máximo)

// Agregamos un evento de clic al emoji
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Reproduce el audio principal
        hiddenAudio.pause(); // Asegúrate de que el audio oculto se pause
    } else {
        audio.pause(); // Pausa el audio principal
        hiddenAudio.pause(); // También pausa el audio oculto
    }
});

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Asi que voy a amarte cada noche..", time: 0 },
    { text: "como si fuera la ultima noche.", time: 2 },
    { text: "Si el mundo se acabara...", time: 5 },
    { text: "quisiera estar...", time: 8 },
    { text: "A tu lado.", time: 10 },
    { text: "Si la fiesta se terminara...", time: 15 },
    { text: "y nuestro tiempo en la tierra...", time: 17 },
    { text: "se acabara.", time: 20 },
    { text: "Quisiera abrazarte...", time: 24 },
    { text: "Solo por un momento", time: 26 },
    { text: "Y morir", time: 28 },
    { text: "con una sonrisa.", time: 31 },
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 4
    );

    if (currentLine) {
        var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

// Actualizar las letras cada 500 ms
setInterval(updateLyrics, 500);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation = "fadeOut 0.4s ease-in-out forwards"; // Duración y función de temporización de la desaparición
    setTimeout(function () {
        titulo.style.display = "none";
    }, 500); // Espera antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
