import { generateId } from "./utils.js";

// массив транзакций
export let transactions = [];

/**
 * Добавляет новую транзакцию
 * @param {number|string} amount - сумма
 * @param {string} category - категория
 * @param {string} description - описание
 * @returns {Object} новая транзакция
 */
export function addTransaction(amount, category, description) {
  const transaction = {
    id: generateId(),
    date: new Date().toISOString(),
    amount: parseFloat(amount),
    category: category,
    description: description,
  };

  transactions.push(transaction);
  return transaction;
}

/**
 * Удаляет транзакцию по id
 * @param {string} id - id транзакции
 */
export function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
}

/**
 * Считает общую сумму транзакций
 * @returns {number} общая сумма
 */
export function calculateTotal() {
  let total = 0;

  for (const transaction of transactions) {
    total += transaction.amount;
  }

  return total;
}