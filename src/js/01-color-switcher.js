import '../css/common.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const random = getRandomHexColor();
    refs.body.style.backgroundColor = random;
  }, 1000);
  refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.body.style.backgroundColor = refs.body.style.backgroundColor;
  refs.startBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
