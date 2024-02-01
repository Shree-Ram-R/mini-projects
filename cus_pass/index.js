const txt = document.querySelector(".in");
const show = document.querySelector(".fa");

show.addEventListener("click", function () {
  const type = txt.getAttribute("type") === "password" ? "text" : "password";
  txt.setAttribute("type", type);

  if (type === "password") {
    show.classList.remove("fa-eye");
    show.classList.add("fa-eye-slash");
  } else {
    show.classList.remove("fa-eye-slash");
    show.classList.add("fa-eye");
  }
});
