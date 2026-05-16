//  вспомогательные функции

/**
 * Генерирует уникальный идентификатор транзакции
 * Использует текущее время и случайное число
 * @returns {string} уникальный ID
 */
export function generateId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
}

/**
 * Форматирует дату и время в читаемый вид
 * @param {string} dateString - строка с датой (ISO формат)
 * @returns {string} дата и время в формате ДД.ММ.ГГГГ ЧЧ:ММ
 */
export function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

/**
 * Возвращает краткое описание транзакции - первые 4 слова
 * @param {string} description - полное описание транзакции
 * @returns {string} краткое описание
 */
export function getShortDescription(description) {
  const words = description.trim().split(" ");
  return words.slice(0, 4).join(" ");
}
