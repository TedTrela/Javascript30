import './style.css';
console.log('Loaded index.js'); //eslint-disable-line no-console

function handleUpdate() {
  var sizing = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + sizing
  );
}

document.querySelectorAll('.controls input').forEach(input => {
  input.addEventListener('change', handleUpdate);
});
