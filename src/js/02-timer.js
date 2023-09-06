import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import '../css/common.css';

const refs = {
  selectData: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const currentDate = new Date();

flatpickr(refs.selectData, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  parseDate: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      refs.startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
      let ms = selectedDates[0].getTime() - currentDate.getTime();
      console.log(ms);

      setInterval(() => {
        function convertMs(ms) {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(ms / day);
          const hours = Math.floor((ms % day) / hour);
          const minutes = Math.floor(((ms % day) % hour) / minute);
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          return { days, hours, minutes, seconds };
        }
        refs.days.textContent = addLeadingZero(convertMs(ms).days);
        refs.hours.textContent = addLeadingZero(convertMs(ms).hours);
        refs.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
        refs.seconds.textContent = addLeadingZero(convertMs(ms).seconds);
        ms -= 1000;
        console.log(ms);
      }, 1000);
    }
  },
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
