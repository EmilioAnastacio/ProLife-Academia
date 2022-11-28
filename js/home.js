const diasemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const d = new Date();

var element = document.getElementById('welcome');
var dia = diasemana[d.getDay()] + ', ' + d.getDate() + ' de ' + meses[d.getMonth()];
element.style.display = 'block';
element.innerHTML += `<br>  <span class='dia'> ${dia} </span>`;


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


let progressBar_mini1 = document.querySelector("#b-mini1");
let valueContainer_mini1 = document.querySelector("#s-mini1");

let progressValue_mini1 = 0;
let progressEndValue_mini1 = 85;

let progress_mini1 = setInterval(() => {
    progressValue_mini1++;
    valueContainer_mini1.textContent = `${progressValue_mini1}%`;
    progressBar_mini1.style.background = `conic-gradient(
      #00AFB5 ${progressValue_mini1 * 3.6}deg,
      #cadcff ${progressValue_mini1 * 3.6}deg
  )`;
    if (progressValue_mini1 == progressEndValue_mini1) {
        clearInterval(progress_mini1);
    }
}, speed);

let progressBar_mini2 = document.querySelector("#b-mini2");
let valueContainer_mini2 = document.querySelector("#s-mini2");

let progressValue_mini2 = 0;
let progressEndValue_mini2 = 95;

let progress_mini2 = setInterval(() => {
    progressValue_mini2++;
    valueContainer_mini2.textContent = `${progressValue_mini2}%`;
    progressBar_mini2.style.background = `conic-gradient(
      #00AFB5 ${progressValue_mini2 * 3.6}deg,
      #cadcff ${progressValue_mini2 * 3.6}deg
  )`;
    if (progressValue_mini2 == progressEndValue_mini2) {
        clearInterval(progress_mini2);
    }
}, speed);


let progressBar_mini4 = document.querySelector("#b-mini4");
let valueContainer_mini4 = document.querySelector("#s-mini4");

let progressValue_mini4 = 0;
let progressEndValue_mini4 = 100;

let progress_mini4 = setInterval(() => {
    progressValue_mini4++;
    valueContainer_mini4.textContent = `${progressValue_mini4}%`;
    progressBar_mini4.style.background = `conic-gradient(
      #00AFB5 ${progressValue_mini4 * 3.6}deg,
      #cadcff ${progressValue_mini4 * 3.6}deg
  )`;
    if (progressValue_mini4 == progressEndValue_mini4) {
        clearInterval(progress_mini4);
    }
}, speed);

let progressBar_mini5 = document.querySelector("#b-mini5");
let valueContainer_mini5 = document.querySelector("#s-mini5");

let progressValue_mini5 = 0;
let progressEndValue_mini5 = 87;

let progress_mini5 = setInterval(() => {
    progressValue_mini5++;
    valueContainer_mini5.textContent = `${progressValue_mini5}%`;
    progressBar_mini5.style.background = `conic-gradient(
      #00AFB5 ${progressValue_mini5 * 3.6}deg,
      #cadcff ${progressValue_mini5 * 3.6}deg
  )`;
    if (progressValue_mini5 == progressEndValue_mini5) {
        clearInterval(progress_mini5);
    }
}, speed);



