const clock = document.querySelector("#time");
const mon = document.querySelector(".mon");
const tue = document.querySelector(".tue");
const wed = document.querySelector(".wed");
const thu = document.querySelector(".thu");
const fri = document.querySelector(".fri");
const sat = document.querySelector(".sat");
const sun = document.querySelector(".sun");
const date = document.querySelector(".dt");
var time = new Date();

function Dclock() {
  var hrs = time.getHours();
  var min = time.getMinutes();
  var txt = "AM";

  if (hrs >= 12) {
    hrs = hrs - 12;
    txt = "PM";
    if (hrs == 0) {
      hrs = 12;
      txt = "PM";
    }
  } else if (hrs == 0) {
    hrs = 12;
    txt = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  clock.innerHTML = `${hrs} : ${min} ${txt}`;
}
Dclock();
setInterval(Dclock, 1000);

function days() {
  var day = time.getDay();
  switch (day) {
    case 0:
      sun.style.border = "2px dashed cyan";
      break;

    case 1:
      mon.style.border = "2px dashed cyan";
      break;

    case 2:
      tue.style.border = "2px dashed cyan";
      break;

    case 3:
      wed.style.border = "2px dashed cyan";
      break;

    case 4:
      thu.style.border = "2px dashed cyan";
      break;

    case 5:
      fri.style.border = "2px dashed cyan";
      break;

    case 6:
      sat.style.border = "2px dashed cyan";
      break;
    default:
      break;
  }
}
days();

function cdate() {
  var mdate = time.getDate();
  var month = time.getMonth();
  mdate = mdate < 10 ? "0" + mdate : mdate;
  month = month < 10 ? "0" + (month + 1) : month + 1;

  date.innerHTML = `&nbsp;&nbsp;${mdate}&nbsp;&nbsp;&nbsp; \\&nbsp;&nbsp;&nbsp;&nbsp;  ${month} `;
}

cdate();
