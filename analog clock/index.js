const hour = document.querySelector(".hrs");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");

const date = document.querySelector("#dt");
const mont = document.querySelector("#mon");

const dayy = document.querySelector(".day");

setInterval(runclock, 1000);

function runclock() {
  const time = new Date();
  var sec = time.getSeconds() / 60;
  var min = (sec + time.getMinutes()) / 60;
  var hrs = (min + time.getHours()) / 12;

  hour.style.setProperty("--rotation", hrs * 360);
  minute.style.setProperty("--rotation", min * 360);
  second.style.setProperty("--rotation", sec * 360);
}
runclock();

function cdate() {
  const ttime = new Date();
  var mdate = ttime.getDate();
  var month = ttime.getMonth();
  mdate = mdate < 10 ? "0" + mdate : mdate;
  month = month < 10 ? "0" + (month + 1) : month + 1;

  date.innerHTML = `${mdate}`;
  mont.innerHTML = `${month}`;
}

cdate();

function days() {
  const d = new Date();
  var day = d.getDay();
  var mon = "MON";
  var tue = "TUE";
  var wed = "WED";
  var thu = "THU";
  var fri = "FRI";
  var sat = "SAT";
  var sun = "SUN";
  switch (day) {
    case 0:
      dayy.innerHTML = `${sun}`;
      break;

    case 1:
      dayy.innerHTML = `${mon}`;
      break;

    case 2:
      dayy.innerHTML = `${tue}`;
      break;

    case 3:
      dayy.innerHTML = `${wed}`;
      break;

    case 4:
      dayy.innerHTML = `${thu}`;
      break;

    case 5:
      dayy.innerHTML = `${fri}`;
      break;

    case 6:
      dayy.innerHTML = `${sat}`;
      break;
    default:
      break;
  }
}
days();
