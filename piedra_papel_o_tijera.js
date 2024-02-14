const choices = ['piedra', 'papel', 'tijera'];
let wins = 0;
let losses = 0;
let draws = 0;

// Obtén el elemento de audio
const backgroundAudio = document.getElementById('backgroundAudio');

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    draws++;
    return '¡Es un empate!';
  } else if (
    (userChoice === 0 && computerChoice === 2) ||
    (userChoice === 1 && computerChoice === 0) ||
    (userChoice === 2 && computerChoice === 1)
  ) {
    wins++;
    return '¡Ganaste!';
  } else {
    losses++;
    return '¡Perdiste!';
  }
}

function updateStats() {
  const statsElement = document.getElementById('stats');
  statsElement.innerText = `Partidas Ganadas: ${wins} | Perdidas: ${losses} | Empatadas: ${draws}`;
}

function playGame(userChoice) {
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[computerChoiceIndex];
  const result = determineWinner(userChoice, computerChoiceIndex);

  document.getElementById('result').innerText = `Elegiste ${choices[userChoice]}. La computadora eligió ${computerChoice}. ${result}`;
  
  updateStats(); // Actualiza las estadísticas después de cada partida
}

// Pausa o reanuda la música en respuesta a eventos del juego
function toggleBackgroundAudio() {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
  } else {
    backgroundAudio.pause();
  }
}
function toggleBackgroundAudio() {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
  } else {
    backgroundAudio.pause();
  }
}
function toggleBackgroundAudio() {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    document.getElementById('audioIcon').src = 'img/audio.png'; // Cambia a la imagen de audio activado
  } else {
    backgroundAudio.pause();
    document.getElementById('audioIcon').src = 'img/audiooff.png'; // Cambia a la imagen de audio desactivado
  }
}
// Nueva función para mostrar el mensaje "Sabías que..."
function mostrarMensaje() {
  const mensaje = "¡Sabías que el juego de piedra, papel o tijera tiene una historia muy interesante?\n\n" +
    "Se cree que se originó en China hace muchos, muchos años. Se llamaba 'shoushiling' y tenía signos diferentes, como el mono, el cazador y el tigre.\n\n" +
    "Después, viajó a Japón y se convirtió en el juego que conocemos hoy. En Japón, lo llamaban 'jan-ken'. Jan significa piedra, ken significa puño. Luego, este juego viajó por todo el mundo y cada lugar le dio su propio toque.\n\n" +
    "Ahora, hablemos de las curiosidades. ¿Alguna vez se preguntaron por qué la piedra aplasta las tijeras? Bueno, se dice que la piedra representa la fuerza y las tijeras la fragilidad, así que la fuerza aplasta la fragilidad. Interesante, ¿verdad?\n\n" +
    "Y ¿saben por qué el papel envuelve la piedra? ¡Porque el papel representa la escritura y la creatividad, y a veces la creatividad puede superar la fuerza! Así que, cuando juegan, están usando su ingenio para ganar.";

  alert(mensaje);
}

// Puedes llamar a toggleBackgroundAudio() cuando quieras cambiar el estado de la música.
// Por ejemplo, podrías llamarlo cuando el juego comienza o cuando el jugador hace clic en un botón de música.
