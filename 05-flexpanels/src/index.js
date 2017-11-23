import './styles.css';

const panels = document.querySelectorAll('.panel');
panels.forEach(p => p.addEventListener('click', toggleOpen));
panels.forEach(p => p.addEventListener('transitionend', toggleOpenActive));

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleOpenActive(e) {
  console.log(e);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
