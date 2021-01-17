const btnContainer = document.querySelector(".btn-container");
const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// btnShow.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//    });
// });
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
btnContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  if (!clicked.classList.contains("btn-show")) return;

  showModal();
});
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
