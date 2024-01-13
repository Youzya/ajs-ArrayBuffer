class Character {
    constructor(name, type) {
        const typeHeroes = [
            'Bowman', 
            'Swordsman', 
            'Magician', 
            'Daemon', 
            'Undead', 
            'Zombie'
        ]

        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть не менее 2 символов и не более 10');
        }

        if (typeof type !== "string") {
            throw new Error('Тип героя должен быть "String"');
        }

        if (!typeHeroes.includes(type)) {
            throw new Error(`Тип героя ${type} отсутствует в списке ${typeHeroes.join(', ')}`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
        this.stoned = null;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        } else {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned
    }

    attackDistance(distance) {
        this.attackDistance = distance;

        let attackBase = this.attack * (1 - (this.attackDistance - 1) / 10);
        let attackStoned = this.attack - Math.log2(this.attackDistance) * 5;
        if (this.stoned) {
            this.attack = attackStoned;
        } else {
            this.attack = attackBase;
        }
        return this.attack
    }
}

module.exports = Character;
