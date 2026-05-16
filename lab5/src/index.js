import {
  addTransaction,
  removeTransaction,
  calculateTotal,
  transactions,
} from "./transactions.js";

import {
  renderRow,
  removeRow,
  renderTotal,
  renderDetails,
  showError,
  clearError,
} from "./ui.js";

const form = document.querySelector("#transaction-form");
const table = document.querySelector("#transactions-table");

/**
 * Проверяет данные формы
 * @param {string} amount - сумма
 * @param {string} category - категория
 * @param {string} description - описание
 * @returns {boolean} результат проверки
 */
function validateForm(amount, category, description) {
  if (amount.trim() === "") {
    showError("Введите сумму транзакции");
    return false;
  }

  if (isNaN(amount)) {
    showError("Сумма должна быть числом");
    return false;
  }

  if (category === "") {
    showError("Выберите категорию");
    return false;
  }

  if (description.trim() === "") {
    showError("Введите описание транзакции");
    return false;
  }

  return true;
}

/**
 * Обрабатывает отправку формы
 * @param {Event} event - событие формы
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const amount = document.querySelector("#amount").value;
  const category = document.querySelector("#category").value;
  const description = document.querySelector("#description").value;

  if (!validateForm(amount, category, description)) {
    return;
  }

  clearError();

  const transaction = addTransaction(amount, category, description);

  renderRow(transaction);
  renderTotal(calculateTotal());

  form.reset();
}

/**
 * Обрабатывает клики по таблице
 * @param {Event} event - событие клика
 */
function handleTableClick(event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = event.target.getAttribute("data-id");

    removeTransaction(id);
    removeRow(id);
    renderTotal(calculateTotal());

    document.querySelector("#transaction-details").innerHTML = "";
    return;
  }

  const row = event.target.closest("tr");

  if (!row || !row.getAttribute("data-id")) {
    return;
  }

  const id = row.getAttribute("data-id");
  const transaction = transactions.find((item) => item.id === id);

  if (transaction) {
    renderDetails(transaction);
  }
}

form.addEventListener("submit", handleFormSubmit);
table.addEventListener("click", handleTableClick);