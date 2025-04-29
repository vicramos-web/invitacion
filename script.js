// Cuenta regresiva
const countdown = () => {
    const weddingDate = new Date("March 21, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
  
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".countdown").innerHTML = "¡Ya llegó el gran día!";
    }
  };
  
  let x = setInterval(countdown, 1000);

// Control de música
const music = document.getElementById('bg-music');
const toggleMusic = document.getElementById('toggle-music');

toggleMusic.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleMusic.textContent = '⏸️'; // Mostramos ícono de pausa cuando esté sonando
  } else {
    music.pause();
    toggleMusic.textContent = '🎵'; // Ícono de música cuando esté pausado
  }
});


// Pétalos cayendo

const canvas = document.getElementById('petalos-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const petalos = [];

for (let i = 0; i < 30; i++) { // Número de pétalos
  petalos.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 6 + 2, // tamaño del pétalo
    d: Math.random() * 5 + 1 // velocidad
  });
}

function drawPetalos() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255, 192, 203, 0.7)"; // Color rosita semitransparente
  ctx.beginPath();
  for (let i = 0; i < petalos.length; i++) {
    let p = petalos[i];
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  updatePetalos();
}

function updatePetalos() {
  for (let i = 0; i < petalos.length; i++) {
    let p = petalos[i];
    p.y += p.d;
    p.x += Math.sin(p.y * 0.01); // Movimiento ondulado

    if (p.y > height) {
      p.y = 0;
      p.x = Math.random() * width;
    }
  }
}

setInterval(drawPetalos, 33); // 30 frames por segundo

// Adaptar si cambia el tamaño de pantalla
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
