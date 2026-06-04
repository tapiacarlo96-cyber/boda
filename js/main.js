const weddingDate = new Date('2026-10-14T18:00:00');
function updateCountdown() {
      const diff = weddingDate - new Date();
      if (diff <= 0) return;
      document.getElementById('days').textContent    = String(Math.floor(diff / 86400000)).padStart(2,'0');
      document.getElementById('hours').textContent   = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
      document.getElementById('minutes').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
      document.getElementById('seconds').textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.volume = 0.4;
    music.play();
    btn.textContent = '♪ Silenciar';
    btn.classList.add('playing');
  } else {
    music.pause();
    btn.textContent = '♪ Reproducir música';
    btn.classList.remove('playing');
  }
});