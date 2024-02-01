const d = document.querySelector(".days");
const h = document.querySelector(".hours");
const m = document.querySelector(".minutes");
const s = document.querySelector(".seconds");

const currentDate = new Date().getDate();
const currentdate = new Date();

const currentYear = new Date().getFullYear();

const newdate = new Date(`January ${currentDate + 5} ${currentYear} 00:00:00`);

const diff = newdate - currentdate;

var days = Math.floor(diff / 1000 / 60 / 60 / 24);
var hour = Math.floor(diff / 1000 / 60 / 60) % 24;
var min = Math.floor(diff / 1000 / 60) % 60;
var sec = Math.floor(diff / 1000) % 60;

/*
days=(diff/1000/60/60/24)
hour=((diff/1000/60/60)%24)
minute=((diff/1000/60)%60)
seconds=((diff/1000)%60)


*/
function timer() {
  const currentDate = new Date().getDate();
  const currentdate = new Date();

  const currentYear = new Date().getFullYear();

  const newdate = new Date(
    `January ${currentDate + 5} ${currentYear} 06:00:00`
  );

  const diff = newdate - currentdate;

  var days = Math.floor(diff / 1000 / 60 / 60 / 24);
  var hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  var min = Math.floor(diff / 1000 / 60) % 60;
  var sec = Math.floor(diff / 1000) % 60;
  days = days < 10 ? "0" + days : days;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  d.innerHTML = `&nbsp;${days}&nbsp;&nbsp;:`;
  h.innerHTML = `${hour}&nbsp;&nbsp;:`;
  m.innerHTML = `${min}&nbsp;&nbsp;:`;
  s.innerHTML = `${sec}&nbsp;&nbsp;`;
}
timer();
setInterval(timer, 1000);
