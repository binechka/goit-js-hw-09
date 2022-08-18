import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const startBtn = document.querySelector("button[data-start]")
const timer = document.querySelector(".timer")
const dataDays = document.querySelector("span[data-days]")
const dataHours = document.querySelector("span[data-hours]")
const dataMinutes = document.querySelector("span[data-minutes]")
const dataSeconds = document.querySelector("span[data-seconds]")



 startBtn.disabled = true
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
      if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
          window.alert("Please choose a date in the future")    
      }
      else {
          startBtn.disabled = false
      }
      startBtn.addEventListener("click", () => {
    const timerId = setInterval(() => {
        const currentTime = new Date; 
        const deltaTime = selectedDates[0] - currentTime;
        const clocks = convertMs(deltaTime);
         dataDays.textContent =  addLeadingZero(clocks.days);
         dataHours.textContent =  addLeadingZero(clocks.hours);
         dataMinutes.textContent =  addLeadingZero(clocks.minutes);
        dataSeconds.textContent = addLeadingZero(clocks.seconds);
         if ( deltaTime < 1000) {
              clearInterval(timerId)
          }
    }, 1000)       
})
    }, 
};

function addLeadingZero (value) {
return String(value).padStart(2, '0');    
}

flatpickr(input, options) 

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





  





