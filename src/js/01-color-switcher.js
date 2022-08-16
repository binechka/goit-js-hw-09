
const startBtn = document.querySelector("button[data-start]")
const stopBtn = document.querySelector("button[data-stop]")



let setColorId = null;
startBtn.addEventListener("click", () => {
    setColorId = setInterval(getRandomHexColor, 1000);
    startBtn.disabled = true;
})

const getRandomHexColor = () =>
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

stopBtn.addEventListener("click", () => {
    clearInterval(setColorId);
    startBtn.disabled = false;
})