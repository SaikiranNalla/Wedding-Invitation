// -- FALLING SAKURA PETALS EFFECT (VANILLA JS REPLACEMENT) --
function spawnSakuraPetal() {
  const petal = document.createElement('div');
  petal.className = 'sakura';
  petal.style.left = (Math.random() * 100) + 'vw';
  petal.style.animationDuration = (7 + Math.random() * 3) + 's';
  // Optionally randomize shape
  petal.style.borderRadius = `${60+Math.random()*30}% ${60+Math.random()*30}% ${60+Math.random()*30}% ${60+Math.random()*30}%`;
  document.body.appendChild(petal);
  petal.addEventListener('animationend', () => petal.remove());
}
setInterval(spawnSakuraPetal, 300); // matches original 'newOn: 250' setting

// -- PLAY AUDIO WHEN USER CLICKS ANYWHERE --
document.addEventListener('click', () => {
  const audio = document.getElementById("my_audio");
  if (audio && audio.paused) audio.play();
});

// -- PAUSE AUDIO FUNCTION (IF NEEDED) --
function pauseAudio(event) {
  const audio = document.getElementById("my_audio");
  if (audio) audio.pause();
  if (event) event.stopPropagation();
}

// -- COUNTDOWN TIMER --
function updateCountdown() {
  const eventDate = new Date("August 8, 2025 00:00:00").getTime();
  const now = Date.now();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("time").innerHTML = `<span class="end-msg">Today is the day!</span>`;
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = `
    <div class="timer-row">
      <div class="timer-box"><span class="timer-number">${days}</span><span class="timer-label">Days</span></div>
      <div class="timer-box"><span class="timer-number">${hours.toString().padStart(2, "0")}</span><span class="timer-label">Hours</span></div>
      <div class="timer-box"><span class="timer-number">${minutes.toString().padStart(2, "0")}</span><span class="timer-label">Minutes</span></div>
      <div class="timer-box"><span class="timer-number">${seconds.toString().padStart(2, "0")}</span><span class="timer-label">Seconds</span></div>
    </div>
  `;
}
updateCountdown();
setInterval(updateCountdown, 1000);

