import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const NOTIFICATION_DELAY = 1000;
let intervalId = null;
const refs = {
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
  body:document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.buttonStart.addEventListener('click', onButtonStartClick)
refs.buttonStop.addEventListener('click', onButtonStopClick)

function onButtonStartClick() {
  intervalId = setInterval(changeColor, NOTIFICATION_DELAY)
  refs.buttonStart.setAttribute('disabled', true)
  refs.buttonStop.removeAttribute('disabled')
}

function onButtonStopClick() {
  clearInterval(intervalId)
  refs.buttonStart.removeAttribute('disabled')
  refs.buttonStop.setAttribute('disabled', true)
}

function changeColor() {
  refs.body.setAttribute('style', `background-color: ${colors[randomIntegerFromInterval(0,5)]}`)
}

