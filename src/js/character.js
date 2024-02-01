const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

export default class Character {
    constructor (name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
        if (name.length < 2) {
            throw new Error("Ошибка! Слишком короткое имя!");
        }

        if (name.length > 10) {
            throw new Error("Ошибка! Слишком длинное имя!");
        }

        if (typeof name != "string") {
            throw new Error("Ошибка! Неправильно введенноё имя!");
        }
        if (!types.includes(type)) {
            throw new Error("Ошибка! Неправильный тип игрока!")
        }
    }

levelUp() {
    if(this.health > 0) {
        this.level+=1;
        this.defence += this.defence * 0.2;
        this.attack += this.attack * 0.2;
        this.health = 100;
    }
    if (this.health <= 0) {
        throw new Error("Герой умер, нельзя повысить его уровень!");
    }
}

damage(points) {
    if(this.health >=0) {
        this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
        this.health = 0;
    }
}
}