const transactions = [
  {
    transaction_id: "1",
    transaction_date: "2019-01-01",
    transaction_amount: 100.0,
    transaction_type: "debit",
    transaction_description: "Payment for groceries",
    merchant_name: "SuperMart",
    card_type: "Visa",
  },
  {
    transaction_id: "2",
    transaction_date: "2019-01-02",
    transaction_amount: 50.0,
    transaction_type: "credit",
    transaction_description: "Refund for returned item",
    merchant_name: "OnlineShop",
    card_type: "MasterCard",
  },
  {
    transaction_id: "3",
    transaction_date: "2019-01-03",
    transaction_amount: 75.0,
    transaction_type: "debit",
    transaction_description: "Dinner with friends",
    merchant_name: "RestaurantABC",
    card_type: "Amex",
  },
  {
    transaction_id: "4",
    transaction_date: "2019-01-04",
    transaction_amount: 120.0,
    transaction_type: "debit",
    transaction_description: "Shopping at Mall",
    merchant_name: "FashionStoreXYZ",
    card_type: "Discover",
  },
  {
    transaction_id: "5",
    transaction_date: "2019-01-05",
    transaction_amount: 25.0,
    transaction_type: "credit",
    transaction_description: "Returned defective product",
    merchant_name: "ElectronicsShop",
    card_type: "Visa",
  },
  {
    transaction_id: "6",
    transaction_date: "2019-01-06",
    transaction_amount: 60.0,
    transaction_type: "debit",
    transaction_description: "Gasoline refill",
    merchant_name: "GasStationXYZ",
    card_type: "MasterCard",
  },
  {
    transaction_id: "7",
    transaction_date: "2019-01-07",
    transaction_amount: 40.0,
    transaction_type: "debit",
    transaction_description: "Lunch with colleagues",
    merchant_name: "Cafe123",
    card_type: "Visa",
  },
  {
    transaction_id: "8",
    transaction_date: "2019-01-08",
    transaction_amount: 90.0,
    transaction_type: "debit",
    transaction_description: "Movie tickets",
    merchant_name: "CinemaXYZ",
    card_type: "Amex",
  },
  {
    transaction_id: "9",
    transaction_date: "2019-01-09",
    transaction_amount: 150.0,
    transaction_type: "debit",
    transaction_description: "Weekend getaway",
    merchant_name: "ResortABC",
    card_type: "Discover",
  },
  {
    transaction_id: "10",
    transaction_date: "2019-01-10",
    transaction_amount: 20.0,
    transaction_type: "credit",
    transaction_description: "Cashback reward",
    merchant_name: "BankXYZ",
    card_type: "Visa",
  },
  {
    transaction_id: "11",
    transaction_date: "2019-02-01",
    transaction_amount: 65.0,
    transaction_type: "debit",
    transaction_description: "Dinner with family",
    merchant_name: "FamilyRestaurant",
    card_type: "MasterCard",
  },
  {
    transaction_id: "12",
    transaction_date: "2019-02-02",
    transaction_amount: 30.0,
    transaction_type: "credit",
    transaction_description: "Returned books",
    merchant_name: "BookstoreABC",
    card_type: "Visa",
  },
  {
    transaction_id: "13",
    transaction_date: "2019-02-03",
    transaction_amount: 85.0,
    transaction_type: "debit",
    transaction_description: "Home appliances purchase",
    merchant_name: "ApplianceStoreXYZ",
    card_type: "Discover",
  },
  {
    transaction_id: "14",
    transaction_date: "2019-02-04",
    transaction_amount: 45.0,
    transaction_type: "debit",
    transaction_description: "Coffee and snacks",
    merchant_name: "CoffeeShop123",
    card_type: "Amex",
  },
  {
    transaction_id: "15",
    transaction_date: "2019-03-01",
    transaction_amount: 110.0,
    transaction_type: "debit",
    transaction_description: "Electronics purchase",
    merchant_name: "ElectronicsStoreXYZ",
    card_type: "MasterCard",
  },
];


// Задание 1.1. getUniqueTransactionTypes

/**
 * Возвращает массив уникальных типов транзакций
 * Использует Set для удаления дублей
 *
 * @param {Array} transactions - массив транзакций
 * @returns {Array} массив уникальных типов (например, ["debit", "credit"])
 */
function getUniqueTransactionTypes(transactions) {
  let types = new Set();
  for (let i = 0; i < transactions.length; i++) {
    types.add(transactions[i].transaction_type);
  }
  return Array.from(types);
}

// Задание 1.2. calculateTotalAmount

/**
 * Вычисляет сумму всех транзакций.
 *
 * @param {Array} transactions - массив транзакций
 * @returns {number} общая сумма всех транзакций
 */
function calculateTotalAmount(transactions) {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    total += transactions[i].transaction_amount;
  }
  return total;
}

// Задание 1.3. calculateTotalAmountByDate

/**
 * Вычисляет общую сумму транзакций за указанный год, месяц и/или день
 * Параметры year, month и day необязательны
 * Если параметр не передан, он не учитывается при фильтрации
 *
 * @param {Array} transactions - массив транзакций
 * @param {number} [year] - год (необязательно)
 * @param {number} [month] - месяц (1-12, необязательно)
 * @param {number} [day] - день (1-31, необязательно)
 * @returns {number} сумма транзакций за указанный период
 */
function calculateTotalAmountByDate(transactions, year, month, day) {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    let date = new Date(transactions[i].transaction_date);
    let transYear = date.getFullYear();
    let transMonth = date.getMonth() + 1; // getMonth() возвращает 0-11
    let transDay = date.getDate();

    let yearMatch = year === undefined || transYear === year;
    let monthMatch = month === undefined || transMonth === month;
    let dayMatch = day === undefined || transDay === day;

    if (yearMatch && monthMatch && dayMatch) {
      total += transactions[i].transaction_amount;
    }
  }
  return total;
}

// Задание 1.4. getTransactionByType


/**
 * Возвращает транзакции указанного типа
 *
 * @param {Array} transactions - массив транзакций
 * @param {string} type - тип транзакции (debit или credit)
 * @returns {Array} массив транзакций указанного типа
 */
function getTransactionByType(transactions, type) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].transaction_type === type) {
      result.push(transactions[i]);
    }
  }
  return result;
}


// Задание 1.5. getTransactionsInDateRange

/**
 * Возвращает транзакции, проведённые в указанном диапазоне дат
 *
 * @param {Array} transactions - массив транзакций
 * @param {string} startDate - начальная дата в формате YYYY-MM-DD
 * @param {string} endDate - конечная дата в формате YYYY-MM-DD
 * @returns {Array} массив транзакций в диапазоне дат
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    let date = new Date(transactions[i].transaction_date);
    if (date >= start && date <= end) {
      result.push(transactions[i]);
    }
  }
  return result;
}


// Задание 1.6. getTransactionsByMerchant

/**
 * Возвращает транзакции, совершённые с указанным продавцом
 *
 * @param {Array} transactions - массив транзакций
 * @param {string} merchantName - название магазина или сервиса
 * @returns {Array} массив транзакций указанного продавца
 */
function getTransactionsByMerchant(transactions, merchantName) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].merchant_name === merchantName) {
      result.push(transactions[i]);
    }
  }
  return result;
}

// Задание 1.7. calculateAverageTransactionAmount

/**
 * Возвращает среднее значение суммы транзакций
 *
 * @param {Array} transactions - массив транзакций
 * @returns {number} среднее значение суммы, или 0 если массив пуст
 */
function calculateAverageTransactionAmount(transactions) {
  if (transactions.length === 0) {
    return 0;
  }
  let total = calculateTotalAmount(transactions);
  return total / transactions.length;
}

// Задание 1.8. getTransactionsByAmountRange

/**
 * Возвращает транзакции с суммой в заданном диапазоне.
 *
 * @param {Array} transactions - массив транзакций
 * @param {number} minAmount - минимальная сумма
 * @param {number} maxAmount - максимальная сумма
 * @returns {Array} массив транзакций с суммой в диапазоне [minAmount, maxAmount]
 */
function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    let amount = transactions[i].transaction_amount;
    if (amount >= minAmount && amount <= maxAmount) {
      result.push(transactions[i]);
    }
  }
  return result;
}

// Задание 1.9. calculateTotalDebitAmount

/**
 * Вычисляет общую сумму дебетовых транзакций.
 *
 * @param {Array} transactions - массив транзакций
 * @returns {number} сумма всех дебетовых транзакций
 */
function calculateTotalDebitAmount(transactions) {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].transaction_type === "debit") {
      total += transactions[i].transaction_amount;
    }
  }
  return total;
}


// Задание 1.10. findMostTransactionsMonth

/**
 * Возвращает номер месяца, в котором было больше всего транзакций
 *
 * @param {Array} transactions - массив транзакций
 * *@returns {number|null} номер месяца (1-12) или null (если массив пустой()
 */
function findMostTransactionsMonth(transactions) {
  let monthCount = {};
  for (let i = 0; i < transactions.length; i++) {
    let month = new Date(transactions[i].transaction_date).getMonth() + 1;
    if (monthCount[month] === undefined) {
      monthCount[month] = 0;
    }
    monthCount[month]++;
  }

  let maxMonth = null;
  let maxCount = 0;
  let months = Object.keys(monthCount);
  for (let i = 0; i < months.length; i++) {
    if (monthCount[months[i]] > maxCount) {
      maxCount = monthCount[months[i]];
      maxMonth = months[i];
    }
  }
  return maxMonth;
}


// Задание 1.11. findMostDebitTransactionMonth

/**
 * Возвращает номер месяца, в котором было больше всего дебетовых транзакций
 *
 * @param {Array} transactions - массив транзакций
 * @returns {number} номер месяца (1-12)
 */
function findMostDebitTransactionMonth(transactions) {
  let monthCount = {};
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].transaction_type === "debit") {
      let month = new Date(transactions[i].transaction_date).getMonth() + 1;
      if (monthCount[month] === undefined) {
        monthCount[month] = 0;
      }
      monthCount[month]++;
    }
  }

  let maxMonth = null;
  let maxCount = 0;
  let months = Object.keys(monthCount);
  for (let i = 0; i < months.length; i++) {
    if (monthCount[months[i]] > maxCount) {
      maxCount = monthCount[months[i]];
      maxMonth = months[i];
    }
  }
  return maxMonth;
}


// Задание 1.12. mostTransactionTypes

/**
 * Возвращает тип транзакций, которых больше
 * Возвращает debit если дебетовых больше
 * credit если кредитовых больше
 * equal если количество одинаковое
 *
 * @param {Array} transactions - массив транзакций
 * @returns {string} debit, redit или equal
 */
function mostTransactionTypes(transactions) {
  let debitCount = 0;
  let creditCount = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].transaction_type === "debit") {
      debitCount++;
    } else if (transactions[i].transaction_type === "credit") {
      creditCount++;
    }
  }

  if (debitCount > creditCount) {
    return "debit";
  } else if (creditCount > debitCount) {
    return "credit";
  } else {
    return "equal";
  }
}


// Задание 1.13. getTransactionsBeforeDate

/**
 * Возвращает транзакции, совершённые до указанной даты
 *
 * @param {Array} transactions - массив транзакций
 * @param {string} date - дата в формате YYYY-MM-DD
 * @returns {Array} массив транзакций до указанной даты
 */
function getTransactionsBeforeDate(transactions, date) {
  let targetDate = new Date(date);
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    let transDate = new Date(transactions[i].transaction_date);
    if (transDate < targetDate) {
      result.push(transactions[i]);
    }
  }
  return result;
}

// Задание 1.14. findTransactionById

/**
 * Возвращает транзакцию по её уникальному идентификатору
 *
 * @param {Array} transactions - массив транзакций
 * @param {string} id - уникальный идентификатор транзакции
 * @returns {Object|null} найденная транзакция или null
 */
function findTransactionById(transactions, id) {
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].transaction_id === id) {
      return transactions[i];
    }
  }
  return null;
}


// Задание 1.15. mapTransactionDescriptions

/**
 * Возвращает новый массив, содержащий только описания транзакций
 *
 * @param {Array} transactions - массив транзакций
 * @returns {Array} массив строк с описаниями транзакций
 */
function mapTransactionDescriptions(transactions) {
  let descriptions = [];
  for (let i = 0; i < transactions.length; i++) {
    descriptions.push(transactions[i].transaction_description);
  }
  return descriptions;
}


// Тестирование функций

console.log("Тестирование на основном массиве");

console.log("\n1. Уникальные типы транзакций:");
console.log(getUniqueTransactionTypes(transactions));

console.log("\n2. Общая сумма всех транзакций:");
console.log(calculateTotalAmount(transactions));

console.log("\n3. Сумма транзакций за январь 2019:");
console.log(calculateTotalAmountByDate(transactions, 2019, 1));

console.log("\n4. Транзакции типа 'debit':");
console.log(getTransactionByType(transactions, "debit"));

console.log("\n5. Транзакции с 1 по 5 января 2019:");
console.log(getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-05"));

console.log("\n6. Транзакции магазина 'BankXYZ':");
console.log(getTransactionsByMerchant(transactions, "BankXYZ"));

console.log("\n7. Среднее значение транзакций:");
console.log(calculateAverageTransactionAmount(transactions));

console.log("\n8. Транзакции с суммой от 50 до 100:");
console.log(getTransactionsByAmountRange(transactions, 50, 100));

console.log("\n9. Общая сумма дебетовых транзакций:");
console.log(calculateTotalDebitAmount(transactions));

console.log("\n10. Месяц с наибольшим количеством транзакций:");
console.log(findMostTransactionsMonth(transactions));

console.log("\n11. Месяц с наибольшим количеством дебетовых транзакций:");
console.log(findMostDebitTransactionMonth(transactions));

console.log("\n12. Каких транзакций больше:");
console.log(mostTransactionTypes(transactions));

console.log("\n13. Транзакции до 2019-01-05:");
console.log(getTransactionsBeforeDate(transactions, "2019-01-05"));

console.log("\n14. Транзакция с id '3':");
console.log(findTransactionById(transactions, "3"));

console.log("\n15. Описания всех транзакций:");
console.log(mapTransactionDescriptions(transactions));


console.log("\n Тестирование на пустом массиве");

const emptyTransactions = [];

console.log("Уникальные типы:", getUniqueTransactionTypes(emptyTransactions));
console.log("Общая сумма:", calculateTotalAmount(emptyTransactions));
console.log("Среднее значение:", calculateAverageTransactionAmount(emptyTransactions));
console.log("Транзакция по id:", findTransactionById(emptyTransactions, "1"));
console.log("Описания:", mapTransactionDescriptions(emptyTransactions));


console.log("\n Тестирование на массиве с одной транзакцией");

const singleTransaction = [
  {
    transaction_id: "99",
    transaction_date: "2019-06-15",
    transaction_amount: 200.0,
    transaction_type: "debit",
    transaction_description: "Single test transaction",
    merchant_name: "TestShop",
    card_type: "Visa",
  },
];

console.log("Уникальные типы:", getUniqueTransactionTypes(singleTransaction));
console.log("Общая сумма:", calculateTotalAmount(singleTransaction));
console.log("Среднее значение:", calculateAverageTransactionAmount(singleTransaction));
console.log("Транзакция по id '99':", findTransactionById(singleTransaction, "99"));
console.log("Каких транзакций больше:", mostTransactionTypes(singleTransaction));
