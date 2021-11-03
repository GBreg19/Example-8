"use strict";

const regForm = document.querySelector(".reg");
const bg = document.querySelector(".bg");
const btnCloseWindow = document.querySelector(".close-window");
const btnOpenWindow = document.querySelectorAll(".open-window");
console.log(btnOpenWindow);

const openForm = function () {
  regForm.classList.remove("hidden");
  bg.classList.remove("hidden");
};

const closeForm = function () {
  regForm.classList.add("hidden");
  bg.classList.add("hidden");
};

for (let i = 0; i < btnOpenWindow.length; i++) {
  // opening reg form
  btnOpenWindow[i].addEventListener("click", openForm);

  // closing reg form

  btnCloseWindow.addEventListener("click", closeForm);

  bg.addEventListener("click", closeForm);

  document.addEventListener("keydown", function (e) {
    if ((e.key === "Escape") & !regForm.classList.contains("hidden")) {
      closeForm();
    }
  });
}
