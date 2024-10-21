const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", function () {
  modal.classList.add("is-open");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("is-open");
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("is-open");
  }
});
