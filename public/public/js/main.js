// Falling petals
class SakuraPetal {
  constructor(container) {
    this.petal = document.createElement('div');
    this.petal.className = 'sakura';
    this.petal.style.left = Math.random()*100 + 'vw';
    this.petal.style.animationDuration = (7 + Math.random()*4) + 's';
    container.appendChild(this.petal);
    this.petal.addEventListener('animationend', ()=> {
      container.removeChild(this.petal);
    });
  }
}
setInterval(() => new SakuraPetal(document.body), 300);

// Countdown Timer
const eventTime = new Date("2022-04-15T00:00:00+05:30").getTime();
const countdown = document.getElementById('countdown');
function pad(n) { return String(n).padStart(2, '0'); }
function updateCountdown() {
  const now = Date.now(), t = eventTime - now;
  if(t <= 0) return countdown.innerHTML = `<h3>Today is the day!</h3>`;
  const d = Math.floor(t/864e5);
  const h = Math.floor(t/36e5)%24;
  const m = Math.floor(t/6e4)%60;
  const s = Math.floor(t/1e3)%60;
  countdown.innerHTML = `
    <div class="block days">${pad(d)}<div>Days</div></div>
    <div class="block hours">${pad(h)}<div>Hours</div></div>
    <div class="block minutes">${pad(m)}<div>Minutes</div></div>
    <div class="block seconds">${pad(s)}<div>Seconds</div></div>
  `;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Audio Controls
document.addEventListener('click', () => {
  document.getElementById("my_audio").play();
});
function pauseAudio() {
  document.getElementById("my_audio").pause();
  event.stopPropagation();
}

// Venue Link
document.getElementById("venue-btn").onclick = () => {
  window.open("https://www.google.com/maps?q=Burhanpur,+Madhya+Pradesh", "_blank");
};
