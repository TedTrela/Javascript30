import './style.css';
console.log('Loaded index.js'); //eslint-disable-line no-console

const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
  const date = new Date();
  const secs = date.getSeconds();
  if (!secs) {
    secHand.style.transition == '';
  }
  secHand.style.transform = `rotate(${secs / 60 * 360 + 90}deg)`;
  delete secHand.style.transition;

  const min = date.getMinutes();
  minHand.style.transform = `rotate(${min / 60 * 360 + 90}deg)`;
  const hour = date.getHours();
  hourHand.style.transform = `rotate(${hour / 12 * 360 + 90}deg)`;
}

setInterval(setDate, 1000);
