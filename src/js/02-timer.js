import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../css/common.css';

const refs = {
  selectData: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
};
const currentDate = Date.now();
refs.selectData.flatpickr({
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  parseDate: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < currentDate) {
      refs.startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      console.log(selectedDates[0]);
      refs.startBtn.disabled = false;
    }
  },
});
const startTime = refs.selectData.flatpickr.parseDate;
console.log(startTime);
// refs.startBtn.addEventListener('click', onStartClick);

function timer() {
  const startTime = refs.selectData.textContent;

  setInterval(() => {
    const currentTime = Date.now();
    console.log(startTime - currentTime);
  }, 1000);
}
// timer();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// addLeadingZero(value);
// padStart();
