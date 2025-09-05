/* ===== typing effect ===== */
const txt = "Aspiring Developer • Java • Python • Web Dev";
let pos = 0;
function typeLoop(){
  const el = document.getElementById('typing');
  if(!el) return;
  el.innerText = txt.slice(0,pos) + (pos % 2 ? '|' : '');
  pos++;
  if(pos > txt.length) pos = 0;
  setTimeout(typeLoop, 120);
}
typeLoop();

/* ===== particles.js init ===== */
if(window.particlesJS){
  particlesJS('particles-js',{
    "particles": {
      "number": {"value": 60},
      "color": {"value":"#00ffd8"},
      "shape": {"type":"circle"},
      "opacity": {"value":0.6},
      "size": {"value":2},
      "line_linked": {"enable":true,"distance":150,"color":"#00ffd8","opacity":0.05,"width":1},
      "move": {"enable":true,"speed":1.8}
    },
    "interactivity": {
      "events": {"onhover":{"enable":true,"mode":"grab"}}
    }
  });
}
