import './style.css';
console.log('Loaded index.js'); //eslint-disable-line no-console

const keys = document.querySelectorAll('div[data-key');
keys.forEach(key => {
  key.addEventListener('transitionend', function() {
    key.classList.remove('playing');
  });
});

window.addEventListener('keydown', function(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
  if (audio) {
    key.classList.add('playing');
  }
});
