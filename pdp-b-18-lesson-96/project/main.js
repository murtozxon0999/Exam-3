const minut = document.querySelector(".minut");
const sekund = document.querySelector(".sekund");
const start = document.querySelector(".footer-btn-1");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".footer-btn-2");
const pomodoro = document.querySelector(".pomodoro-btn");
const shortBreak = document.querySelector(".shortBreak-btn");
const longBreak = document.querySelector(".longBreak-btn");
const btn = document.querySelectorAll(".btn");

let timer = 59;
let minutVal = 25;

pomodoro.addEventListener("click", () => {
  btnStyle();
  pomodoro.style.background = "#e93c3c";
  pomodoro.style.color = "#fff8ee";
  minutVal = 25;
  console.log(minutVal);
  goo();
});
// refreshBtn.addEventListener("click", () => {
//     clearInterval(timer);
//     sek.innerText = "00";
//     min.innerText = minut;
//     m = minut;
//     s = 0;
//   });

shortBreak.addEventListener("click", () => {
  btnStyle();
  shortBreak.style.background = "#e93c3c";
  shortBreak.style.color = "#fff8ee";
  minutVal = 10;
  console.log(minutVal);
  goo();
});

longBreak.addEventListener("click", () => {
  btnStyle();
  longBreak.style.background = "#e93c3c";
  longBreak.style.color = "#fff8ee";
  minutVal = 15;
  console.log(minutVal);
});

function goo() {
  start.addEventListener("click", () => {
    toggleBtn(start, pause);
    sekundCount();
  });

  pause.addEventListener("click", () => {
    toggleBtn(pause, start);
    clearInterval(timer);
  });
}

function sekundCount() {
  setInterval(() => {
    sekund.innerHTML = timer;
    minut.innerHTML = minutVal-1;
    timer--;
    if (timer == 0) {
      timer = 60;
      minutVal--;
    }
    if (minutVal == 0) {
      timer = 00;
      minutVal = 00;
    }
  }, 1000);
}

function toggleBtn(hideZone, showZone) {
  if (hideZone) hideZone.classList.add("hide");
  if (showZone) showZone.classList.remove("hide");
}

stop.onclick = () => {
  window.location.reload();
};

function btnStyle() {
  btn.forEach((item) => {
    item.style.color = "#e93c3c";
    item.style.background = "#fff8ee";
  });
}
// const mainButton = document.getElementById("pause");
// mainButton.addEventListener("click", () => {
//   const { action } = mainButton.dataset;
//   if (action === "start") {
//     startTimer();
//   } else {
//     stopTimer();
//   }
// function stopTimer() {
//     clearInterval(interval);
  
//     mainButton.dataset.action = "start";
//     mainButton.textContent = "start";
//     mainButton.classList.remove("active");
//   }