let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 66;
let speed = 15;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #00AFB5 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);
