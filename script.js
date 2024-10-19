// Получаем элементы кнопок и модального окна
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// Открытие модального окна при клике на кнопку "Открыть"
openModal.addEventListener("click", function () {
  modal.classList.add("is-open");
});

// Закрытие модального окна при клике на кнопку "Закрыть"
closeModal.addEventListener("click", function () {
  modal.classList.remove("is-open");
});

// Закрытие модального окна при клике вне его содержимого
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("is-open");
  }
});
