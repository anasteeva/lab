import { formatDate, getShortDescription } from "./utils.js";

/**
 * Добавляет строку транзакции в таблицу
 * @param {Object} transaction - транзакция
 */
export function renderRow(transaction) {
  const tbody = document.querySelector("#transactions-table tbody");
  const row = document.createElement("tr");

  if (transaction.amount > 0) {
    row.classList.add("positive");
  } else {
    row.classList.add("negative");
  }

  row.setAttribute("data-id", transaction.id);

  row.innerHTML = `
    <td>${formatDate(transaction.date)}</td>
    <td>${transaction.category}</td>
    <td>${getShortDescription(transaction.description)}</td>
    <td><button class="delete-btn" data-id="${transaction.id}">Удалить</button></td>
  `;

  tbody.appendChild(row);
}

/**
 * Удаляет строку из таблицы
 * @param {string} id - id транзакции
 */
export function removeRow(id) {
  const row = document.querySelector(`tr[data-id="${id}"]`);

  if (row) {
    row.remove();
  }
}

/**
 * Обновляет общий баланс
 * @param {number} total - общая сумма
 */
export function renderTotal(total) {
  const totalEl = document.querySelector("#total");

  totalEl.textContent = `Общий баланс: ${total.toFixed(2)}`;

  if (total > 0) {
    totalEl.style.color = "green";
  } else if (total < 0) {
    totalEl.style.color = "red";
  } else {
    totalEl.style.color = "black";
  }
}

/**
 * Показывает подробности транзакции
 * @param {Object} transaction - транзакция
 */
export function renderDetails(transaction) {
  const detailsEl = document.querySelector("#transaction-details");

  detailsEl.innerHTML = `
    <strong>Подробности транзакции:</strong><br>
    ID: ${transaction.id}<br>
    Дата: ${formatDate(transaction.date)}<br>
    Категория: ${transaction.category}<br>
    Сумма: ${transaction.amount}<br>
    Описание: ${transaction.description}
  `;
}

/**
 * Показывает ошибку формы
 * @param {string} message - текст ошибки
 */
export function showError(message) {
  const errorEl = document.querySelector("#form-error");
  errorEl.textContent = message;
}

/**
 * Очищает ошибку формы
 */
export function clearError() {
  const errorEl = document.querySelector("#form-error");
  errorEl.textContent = "";
}