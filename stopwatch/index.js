const btnstart = document.querySelector(".start");
const btnstop = document.querySelector(".stop");
const btnreset = document.querySelector(".reset");
const clock = document.querySelector(".watch");

let hrs = (min = sec = ms = 0),
  startTimer;

btnstart.addEventListener("click", () => {
  btnstart.classList.add("start-active");
  btnstop.classList.remove("stop-active");
  clock.classList.add("start-animation");
  startTimer = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 100) {
      hrs++;
      min = 0;
    }
    updateDispaly();
  }, 10);
});

btnstop.addEventListener("click", () => {
  btnstart.classList.remove("start-active");
  btnstop.classList.add("stop-active");
  clock.classList.remove("start-animation");
  updateDispaly();
  clearInterval(startTimer);
});
btnreset.addEventListener("click", () => {
  hrs = min = sec = ms = 0;
  btnstart.classList.remove("start-active");
  btnstop.classList.remove("stop-active");
  clock.classList.remove("start-animation");
  updateDispaly();
  clearInterval(startTimer);
});
function updateDispaly() {
  let phrs = hrs < 10 ? "0" + hrs : hrs;
  let pmin = min < 10 ? "0" + min : min;
  let psec = sec < 10 ? "0" + sec : sec;
  let pms = ms < 10 ? "0" + ms : ms;

  phrs = phrs.toString();
  pmin = pmin.toString();
  psec = psec.toString();
  pms = pms.toString();

  document.querySelectorAll(".hrs")[0].innerText = phrs[0];
  document.querySelectorAll(".hrs")[1].innerText = phrs[1];
  document.querySelectorAll(".min")[0].innerText = pmin[0];
  document.querySelectorAll(".min")[1].innerText = pmin[1];
  document.querySelectorAll(".sec")[0].innerText = psec[0];
  document.querySelectorAll(".sec")[1].innerText = psec[1];
  document.querySelectorAll(".ms")[0].innerText = pms[0];
  document.querySelectorAll(".ms")[1].innerText = pms[1];
}
