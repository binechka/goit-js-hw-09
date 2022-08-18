const submitBtn = document.querySelector('[type="submit"]');
const amountEl = document.querySelector('[name="amount"]');
const stepEl = document.querySelector('[name="step"]');
const delay = document.querySelector('[name="delay"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve)  resolve({ position, delay });
     else  reject({ position, delay });
  }, delay);
})
}

submitBtn.addEventListener("click", event => {
  event.preventDefault();
  for (let i = 0; i < amountEl.value; i++) {
    createPromise(i+1,  Number(delay.value) + Number(stepEl.value)*i)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  } 
})
