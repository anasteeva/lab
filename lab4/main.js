
// Лабораторная работа №4
// Продвинутые объекты в JavaScript

// 1. Классы

/**
 * Класс обычного предмета
 */
class Item {
  /**
   * Создает предмет.
   * @param {string} name - название предмета
   * @param {number} weight - вес предмета
   * @param {string} rarity - редкость предмета
   */
  constructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
  }

  /**
   * Возвращает информацию о предмете
   * @returns {string} информация о предмете
   */
  getInfo() {
    return `[${this.rarity.toUpperCase()}] ${this.name} | Вес: ${this.weight} кг`;
  }

  /**
   * Меняет вес предмета
   * @param {number} newWeight - новый вес
   */
  setWeight(newWeight) {
    this.weight = newWeight;
    console.log(`Вес предмета "${this.name}" изменён на ${newWeight} кг`);
  }
}

/**
 * Класс оружия
 */
class Weapon extends Item {
  /**
   * Создает оружие
   * @param {string} name - название оружия
   * @param {number} weight - вес оружия
   * @param {string} rarity - редкость оружия
   * @param {number} damage - урон
   * @param {number} durability - прочность
   */
  constructor(name, weight, rarity, damage, durability) {
    super(name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
  }

  /**
   * Возвращает информацию об оружии
   * @returns {string} информация об оружии
   */
  getInfo() {
    return `${super.getInfo()} | Урон: ${this.damage} | Прочность: ${this.durability}/100`;
  }

  /**
   * Использует оружие и уменьшает прочность
   */
  use() {
    if (this.durability > 0) {
      this.durability -= 10;
      console.log(`"${this.name}" использовано. Прочность: ${this.durability}/100`);
    } else {
      console.log(`"${this.name}" сломано и не может быть использовано`);
    }
  }

  /**
   * Восстанавливает прочность оружия
   */
  repair() {
    this.durability = 100;
    console.log(`"${this.name}" отремонтировано. Прочность: ${this.durability}/100`);
  }
}

// Тестирование классов

console.log("Тест классов Item и Weapon");

const potion = new Item("Health Potion", 0.3, "common");
const helmet = new Item("Iron Helmet", 2.1, "uncommon");

console.log(potion.getInfo());
console.log(helmet.getInfo());

helmet.setWeight(2.5);
console.log(helmet.getInfo());

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

// 2. Опциональная цепочка

console.log("\nТест опциональной цепочки");

let unknownItem = null;

console.log("Имя неизвестного предмета:", unknownItem?.name);
console.log("Информация:", unknownItem?.getInfo?.());

const realItem = new Item("Magic Ring", 0.1, "legendary");

console.log("Имя предмета:", realItem?.name);
console.log("Информация:", realItem?.getInfo?.());

// 3. Функции-конструкторы

/**
 * Функция-конструктор предмета
 * @param {string} name - название предмета
 * @param {number} weight - вес предмета
 * @param {string} rarity - редкость предмета
 */
function ItemConstructor(name, weight, rarity) {
  this.name = name;
  this.weight = weight;
  this.rarity = rarity;
}

/**
 * Возвращает информацию о предмете
 * @returns {string} информация о предмете
 */
ItemConstructor.prototype.getInfo = function () {
  return `[${this.rarity.toUpperCase()}] ${this.name} | Вес: ${this.weight} кг`;
};

/**
 * Меняет вес предмета
 * @param {number} newWeight - новый вес
 */
ItemConstructor.prototype.setWeight = function (newWeight) {
  this.weight = newWeight;
  console.log(`Вес предмета "${this.name}" изменён на ${newWeight} кг`);
};

/**
 * Функция-конструктор оружия
 * @param {string} name - название оружия
 * @param {number} weight - вес оружия
 * @param {string} rarity - редкость оружия
 * @param {number} damage - урон
 * @param {number} durability - прочность
 */
function WeaponConstructor(name, weight, rarity, damage, durability) {
  ItemConstructor.call(this, name, weight, rarity);
  this.damage = damage;
  this.durability = durability;
}

// наследование от ItemConstructor
WeaponConstructor.prototype = Object.create(ItemConstructor.prototype);
WeaponConstructor.prototype.constructor = WeaponConstructor;

/**
 * Возвращает информацию об оружии
 * @returns {string} информация об оружии
 */
WeaponConstructor.prototype.getInfo = function () {
  let baseInfo = ItemConstructor.prototype.getInfo.call(this);
  return `${baseInfo} | Урон: ${this.damage} | Прочность: ${this.durability}/100`;
};

/**
 * Использует оружие и уменьшает прочность
 */
WeaponConstructor.prototype.use = function () {
  if (this.durability > 0) {
    this.durability -= 10;
    console.log(`"${this.name}" использовано. Прочность: ${this.durability}/100`);
  } else {
    console.log(`"${this.name}" сломано`);
  }
};

/**
 * Восстанавливает прочность оружия
 */
WeaponConstructor.prototype.repair = function () {
  this.durability = 100;
  console.log(`"${this.name}" отремонтировано. Прочность: ${this.durability}/100`);
};

// Тестирование функций-конструкторов

console.log("\nТест функций-конструкторов");

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

// Проверка наследования

console.log("\nПроверка наследования:");
console.log("axe instanceof WeaponConstructor:", axe instanceof WeaponConstructor);
console.log("axe instanceof ItemConstructor:", axe instanceof ItemConstructor);
