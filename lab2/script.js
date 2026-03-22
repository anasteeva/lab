// Запрещено использовать встроенные методы массивов:
// forEach, map, filter, find, some, every, reduce.
//
// Разрешено:
// цикл for;
// свойство length;
// обращение к элементам массива по индексу;
// метод push для формирования нового массива.



// Задание 1.1. Вывод массива в консоль -------------------
/**
 * первая функция
 * Выводит элементы массива в формате:
 * Element 0: value x
 *
 * @param {Array} array - исходный массив
 * @returns {undefined} ничего не возвращает
 */
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Element " + i + ": value " + array[i]);
    }
}

/**
 * вторая функция
 * Выводит элементы массива в формате:
 * 0:  x
 *
 * @param {Array} array - исходный массив
 * @returns {undefined} ничего не возвращает
 */
function printArray1(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i + ":  " + array[i]);
    }
}

let arr = ["x", "y", "z"]; // массив

printArray(arr); // вывод первой
printArray1(arr); // вывод второй
 

// 1.2. Функция forEach(array, callback)
/**
 * Выполняет callback для каждого элемента массива
 *
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция обратного вызова
 * (element, index, array)
 * @returns {undefined} ничего не возвращает
 */
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Пример использования
forEach([1, 2, 3], function (element, index, array) {
    console.log("Element: " + element + ", Index: " + index);
});



// 2. Функция map(array, callback)
/**
 * Создаёт новый массив, содержащий результаты вызова callback
 * для каждого элемента исходного массива
 *
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция преобразования элемента
 * (element, index, array)
 * @returns {Array} новый массив той же длины
 */
function map(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let transformed = callback(array[i], i, array);
        result.push(transformed);
    }

    return result;
}

// Пример использования map
let numbers = [1, 2, 3];

let squared = map(numbers, function (element, index, array) {
    return element * element;
});

console.log(squared);


// 3. Функция filter(array, callback)
/**
 * Формирует новый массив из элементов исходного массива,
 * для которых callback возвращает true
 * Обход - слева направо
 *
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки условия
 * (element, index, array) -> boolean
 * @returns {Array} новый массив с элементами,
 * удовлетворяющими условию
 */
function filter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {
            result.push(array[i]);
        }
    }

    return result;
}

// Пример использования 
let numbersFilter = [1, 2, 3, 4, 5];

let evenNumbers = filter(numbersFilter, function (element, index, array) {
    return element % 2 === 0;
});

console.log(evenNumbers);

// 4. Функция find(array, callback)
/**
 * Возвращает первый элемент массива, для которого callback вернул true
 * обход -  слева направо
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки условия
 * (element, index, array) -> boolean
 * @returns {*} первый подходящий элемент или undefined,
 * если ни один элемент не удовлетворяет условию
 */
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {
            return array[i];
        }
    }
    return undefined;
}

// Пример использования 
let numbersFind = [1, 2, 3, 4, 5];

let firstEven = find(numbersFind, function (element, index, array) {
    return element % 2 === 0;
});

console.log(firstEven); 

// 5. Функция some(array, callback)
/**
 * Проверяет, существует ли хотя бы один элемент массива,
 * для которого callback возвращает true
 * Обход - слева направо, прекращается при первом совпадении
 *
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки условия
 * (element, index, array) -> boolean
 * @returns {boolean} true, если найден хотя бы один элемент,
 * удовлетворяющий условию(иначе false) 
 */
function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {
            return true; // прекращает при первом совпадении
        }
    }
    return false;
}

// Пример использования 
let numbersSome = [1, 2, 3, 4, 5];

let hasEven = some(numbersSome, function (element, index, array) {
    return element % 2 === 0;
});

console.log(hasEven); 


// 6. Функция every(array, callback)
/**
 * Проверяет, удовлетворяют ли ВСЕ элементы массива условию, заданному в callback
 * Обход - слева направо и прекращается при первом несоответствии
 *
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки условия
 * (element, index, array) -> boolean
 * @returns {boolean} true, если все элементы удовлетворяют условию (иначе false)
 */
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) !== true) {
            return false; // прекращает при первом несоответствии
        }
    }
    return true;
}

// Пример использования 
let numbersEvery = [2, 4, 6];

let allEven = every(numbersEvery, function (element, index, array) {
    return element % 2 === 0;
});

console.log(allEven); 


// 7. Функция reduce(array, callback, initialValue)
/**
 * Последовательно обрабатывает элементы массива,
 * накапливая результат в аккумуляторе
 * Обход - слева направо
 *
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция обработки
 * (accumulator, element, index, array) -> новое значение аккумулятора
 * @param {*} [initialValue] - начальное значение аккумулятора 
 *
 * @returns {*} итоговое значение аккумулятора
 *  если массив пустой и initialValue не передан, возвращает undefined 
 */
function reduce(array, callback, initialValue) {
    if (array.length === 0 && initialValue === undefined) {
        return undefined;
    }

    let accumulator;
    let startIndex;

    // Если initialValue задан
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        // Берём первый элемент массива как начальное значение
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}


// Пример использования 

let numbersReduce = [1, 2, 3, 4, 5];

let sum = reduce(numbersReduce, function (accumulator, element) {
    return accumulator + element;
}, 0);

console.log(sum); 