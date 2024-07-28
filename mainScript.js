let color = 'black';
let change = 0;
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
  if (tool == "eraser") {
    color = 'white';
  }
  if (tool == "clear") {
    ctx.clearRect(0,0, canvas.width, canvas.height);
  }
  if (tool == 'black') {
    color = 'black';
  }
  if (tool == "red") {
    color = 'red';
  }
  if (tool == "orange") {
    color = '	#ff4d01';
  }
  if (tool == "yellow") {
    color = 'yellow';
  }
  if (tool == "green") {
    color = 'green';
  }
  if (tool == "blue") {
    color = 'blue';
  }
  if (tool == "purple") {
    color = 'purple';
  }
}
function party(){
  if (change == 0){
  let kill = document.getElementById('child');
  let dad = document.getElementById('dad');
  dad.removeChild(kill);
  change = 1;
  makeSquare()
  }
  else {
  makeSquare()
  }
}
function makeSquare(){
  numSqu = 20
  if (change == 1){
    const container = document.getElementById('letsGo');
    const squares = container.querySelectorAll('div');
    squares.forEach((square) => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      square.style.backgroundColor = "#" + randomColor;
    });
    for (let i = 1; i <= numSqu; i++) {
      const square = document.createElement('div');
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      square.style.height = '50px';
      square.style.width = '50px';
      square.style.backgroundColor = "#" + randomColor;
      container.appendChild(square);
      var squ = element.getBoundingClientRect();
      document.body.scrollTop + squ.top
  } 
  }
}
while (true) {
  let party = getElementById('party');
  let random = Math.floor(Math.random()*16777215).toString(16);
  party.style = "#" + random
}

