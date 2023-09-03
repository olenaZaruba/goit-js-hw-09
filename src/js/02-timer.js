import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  selectData: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
};

refs.selectData.flatpickr({
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});
