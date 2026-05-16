# Лабораторная работа №4. Продвинутые объекты в JavaScript

## Инструкции по запуску проекта

1. Скачать или открыть папку проекта
2. Открыть её в VS Code (или другом редакторе)
3. Открыть файл `index.html`
4. Запустить его в браузере
5. Открыть консоль разработчика: нажать `F12`

## Описание лабораторной работы

В этой лабораторной работе нужно было создать консольное приложение для системы инвентаря. В программе реализованы предметы и оружие с помощью классов, а также отдельно через функции-конструкторы

Цель работы:
 научиться работать с объектами, классами, конструкторами, наследованием, методами и опциональной цепочкой в JavaScript.

## Структура проекта

- `lab4/index.html` - HTML-страница
- `lab4/main.js` - JavaScript-код
- `lab4/README.md` - отчёт

## Краткая документация к проекту

### Item

Класс `Item` описывает обычный предмет инвентаря.

Поля класса:

- `name` - название предмета;
- `weight` - вес предмета;
- `rarity` - редкость предмета.

Методы:

- `getInfo()` - возвращает строку с информацией о предмете;
- `setWeight(newWeight)` - изменяет вес предмета.

---

### Weapon

Класс `Weapon` наследуется от `Item` и описывает оружие.

Дополнительные поля:

- `damage` - урон оружия;
- `durability` - прочность оружия от 0 до 100.

Методы:

- `use()` - уменьшает прочность оружия на 10;
- `repair()` - восстанавливает прочность до 100;
- `getInfo()` - возвращает информацию об оружии.

---

### Функции-конструкторы

В работе также реализованы `ItemConstructor` и `WeaponConstructor`. Они выполняют ту же задачу, что и классы, но написаны через функции-конструкторы и `prototype`.

## Примеры использования

### Создание обычного предмета

```javascript
const potion = new Item("Health Potion", 0.3, "common");
const helmet = new Item("Iron Helmet", 2.1, "uncommon");

console.log(potion.getInfo());
console.log(helmet.getInfo());

helmet.setWeight(2.5);
console.log(helmet.getInfo());
```
Пример результата в консоли:

```javascript
[COMMON] Health Potion | Вес: 0.3 кг
[UNCOMMON] Iron Helmet | Вес: 2.1 кг
Вес предмета "Iron Helmet" изменён на 2.5 кг
[UNCOMMON] Iron Helmet | Вес: 2.5 кг
```
---

### Создание оружия
```javascript
const sword = new Weapon("Steel Sword", 3.5, "rare", 45, 100);
const bow = new Weapon("Elven Longbow", 1.8, "legendary", 60, 100);

console.log(sword.getInfo());
console.log(bow.getInfo());

sword.use();
sword.use();
sword.use();

console.log(`Текущая прочность меча: ${sword.durability}`);

sword.repair();
console.log(sword.getInfo());
```
Пример результата в консоли:

```javascript
[RARE] Steel Sword | Вес: 3.5 кг | Урон: 45 | Прочность: 100/100
[LEGENDARY] Elven Longbow | Вес: 1.8 кг | Урон: 60 | Прочность: 100/100
"Steel Sword" использовано. Прочность: 90/100
"Steel Sword" использовано. Прочность: 80/100
"Steel Sword" использовано. Прочность: 70/100
Текущая прочность меча: 70
"Steel Sword" отремонтировано. Прочность: 100/100
[RARE] Steel Sword | Вес: 3.5 кг | Урон: 45 | Прочность: 100/100
```
---

### Использование опциональной цепочки

```javascript
let unknownItem = null;

console.log("Имя неизвестного предмета:", unknownItem?.name);
console.log("Информация:", unknownItem?.getInfo?.());

const realItem = new Item("Magic Ring", 0.1, "legendary");

console.log("Имя предмета:", realItem?.name);
console.log("Информация:", realItem?.getInfo?.());
```
Пример результата в консоли:

```javascript
Имя неизвестного предмета: undefined
Информация: undefined
Имя предмета: Magic Ring
Информация: [LEGENDARY] Magic Ring | Вес: 0.1 кг
```

---

### Использование функций-конструкторов

```javascript
const shield = new ItemConstructor("Wooden Shield", 4.0, "common");

console.log(shield.getInfo());

shield.setWeight(4.5);
console.log(shield.getInfo());

const axe = new WeaponConstructor("Battle Axe", 5.0, "rare", 70, 100);

console.log(axe.getInfo());

axe.use();
axe.use();

console.log(`Прочность топора: ${axe.durability}`);

axe.repair();
console.log(axe.getInfo());
```
Пример результата в консоли:

```javascript
[COMMON] Wooden Shield | Вес: 4 кг
Вес предмета "Wooden Shield" изменён на 4.5 кг
[COMMON] Wooden Shield | Вес: 4.5 кг
[RARE] Battle Axe | Вес: 5 кг | Урон: 70 | Прочность: 100/100
"Battle Axe" использовано. Прочность: 90/100
"Battle Axe" использовано. Прочность: 80/100
Прочность топора: 80
"Battle Axe" отремонтировано. Прочность: 100/100
[RARE] Battle Axe | Вес: 5 кг | Урон: 70 | Прочность: 100/100
```


---

### Проверка наследования

```javascript
console.log("axe instanceof WeaponConstructor:", axe instanceof WeaponConstructor);
console.log("axe instanceof ItemConstructor:", axe instanceof ItemConstructor);
```
Пример результата в консоли:

```javascript
axe instanceof WeaponConstructor: true
axe instanceof ItemConstructor: true
```

---

## Ответы на контрольные вопросы

### 1. Какое значение имеет `this` в методах класса?

`this` в методе класса указывает на конкретный объект, с которым сейчас работает метод

Например, если есть объект `sword` и мы вызываем:

```javascript
sword.getInfo();
```
то внутри метода `getInfo()` слово `this` будет означать именно объект `sword`.
Также с помощью this можно обращаться к свойствам объекта `(this.name)`

---

### 2. Как работает модификатор доступа `#` в JavaScript?

Символ `#` перед именем поля или метода делает его приватным. Это значит, что использовать его можно только внутри самого класса

Снаружи класса обратиться к такому полю нельзя, иначе будет ошибка

Например, если в классе есть поле `#secret`, то внутри класса можно писать `this.#secret`, а снаружи напрямую обратиться к нему уже не получится

Такой способ нужен для защиты внутренних данных объекта

---

### 3. В чём разница между классами и функциями-конструкторами?

Классы и функции-конструкторы нужны для похожей задачи: создавать много объектов одного типа

Класс - это более современная и понятная запись. В нём сразу видно конструктор, методы и наследование

Функция-конструктор - это более старый способ. Объект создаётся через обычную функцию и `new`, а методы добавляются отдельно через `prototype`

---

## Источники

- Лекция 07. Objects
- Лекция 08. Advanced Objects
- Лекция 09. Prototypes and Inheritance
- Материалы курса на Moodle
- MDN Web Docs