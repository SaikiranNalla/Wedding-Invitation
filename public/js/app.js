const end = new Date('2025-08-08T00:00:00+05:30').getTime();
const root = document.getElementById('countdown');

function pad(n){return n<10?'0'+n:n;}
function makeBox(cls,val,label){
  return `<div class="box ${cls}">
            ${pad(val)}<span class="label">${label}</span>
          </div>`;
}
function tick(){
  const now = Date.now(), d=end-now;
  if(d<=0){ root.innerHTML='<h3 class="text-danger">Today is the day!</h3>'; return;}
  const days=Math.floor(d/864e5),
        hrs=Math.floor(d/36e5)%24,
        min=Math.floor(d/6e4)%60,
        sec=Math.floor(d/1e3)%60;
  root.innerHTML =
    makeBox('days',days,'Days')+
    makeBox('hours',hrs,'Hours')+
    makeBox('minutes',min,'Minutes')+
    makeBox('seconds',sec,'Seconds');
}
tick(); setInterval(tick,1000);
