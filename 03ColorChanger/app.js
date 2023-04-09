let colorchanger = document.getElementById('canvas').style.backgroundColor;
let button = document.getElementById('button');
function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
  }
  
  const randomColor = generateRandomColor();

button.addEventListener('click', ()=>{
    colorchanger = randomColor;
});