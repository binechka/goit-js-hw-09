import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const startBtn = document.querySelector("button[data-start]")
const timer = document.querySelector(".timer")
 startBtn.disabled = true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
      if ((selectedDates[0].getTime() - options.defaultDate.getTime())<0) {
          window.alert("Please choose a date in the future")    
      }
      else {
          startBtn.disabled = false
      }

      startBtn.addEventListener("click", () => {
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectedDates[0] - currentTime;
        const { days, hours, minutes, seconds } = convertMs(deltaTime)
        console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000)
})
    },
  
  
};


flatpickr(input, options) 

function updateClockFace({ days, hours, minutes, seconds }) {
    timer.textContent = `${days}:${hours}:${minutes}:${seconds}`
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



  





