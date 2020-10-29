const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
let color;
let intervalId;
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.disabled = true;
 intervalId = setInterval(changeBodyBgColor, 1000, 1000);
  console.log(intervalId);
}


function changeBodyBgColor() {
  const randomColor = findRandomColor(colors);
  body.style.backgroundColor = randomColor;
}

function findRandomColor(colors) {
  let i = randomIntegerFromInterval(0, colors.length - 1);

  color = colors[i].toString();
  return color;
}

const randomIntegerFromInterval = (min, max)=>{
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStopBtnClick() {
    startBtn.disabled = false;
  clearInterval(intervalId);
}


