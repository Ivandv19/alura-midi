// Esta función reproduce el sonido asociado al elemento de audio especificado por su ID
function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// Selecciona todos los elementos con la clase 'tecla' y los guarda en una lista
const listaDeTeclas = document.querySelectorAll('.tecla');

// Itera sobre cada elemento en la lista de teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Obtiene el elemento actual en la iteración
    const tecla = listaDeTeclas[contador];
    // Obtiene el nombre del instrumento asociado a la clase del elemento
    const instrumento = tecla.classList[1];
    // Genera el ID del elemento de audio asociado al instrumento
    const idAudio = `#sonido_${instrumento}`;

    // Asigna una función al evento click del elemento
    tecla.onclick = function () {
        // Llama a la función playSonido pasando el ID del elemento de audio
        playSonido(idAudio);
    };

    // Asigna una función al evento keydown del elemento
    tecla.onkeydown = function (evento) {
        // Verifica si la tecla presionada es la barra espaciadora o la tecla Enter
        if (evento.code === 'Space' || evento.code === 'Enter') {
            // Agrega la clase 'activa' al elemento
            tecla.classList.add('activa');
        }
    };

    // Asigna una función al evento keyup del elemento
    tecla.onkeyup = function () {
        // Remueve la clase 'activa' del elemento
        tecla.classList.remove('activa');
    }
}

