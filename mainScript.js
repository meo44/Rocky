let color = 'black';
window.addEventListener('load', () =>{
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  let painting = false;
  canvas.addEventListener('mousedown', startPosition)
  canvas.addEventListener('mouseup', finishedPosition)
  canvas.addEventListener('mousemove', draw);
  function startPosition() {
    painting = true;
    ctx.beginPath();
  }
  function finishedPosition() {
    painting = false;
  }
  function draw(e) {
    if(!painting) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineWidth = 10;
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y)
  }
})
function paint (tool) {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  if (tool == 'draw') {
    color = 'black'
  }
  if (tool == "eraser") {
    color = 'white';
  }
  if (tool == "clear") {
    ctx.clearRect(0,0, canvas.width, canvas.height);
  }
}