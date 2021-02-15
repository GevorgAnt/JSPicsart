class Hero{
    constructor(name,type,strength,lvl,range,experience) {
        this.name=name
        this.type=type
        this.strength=strength
        this.lvl=lvl
        this.range=range
        this.experience=experience
        this.died=false
    }

    lvlUp() {
        if (this.experience >= 100) {
            this.experience = 0;
            this.lvl++;
            this.strength += 10;

        }
    }

   static fight(Enemy,Hero){
            if(Enemy.damage<=Hero.strength) {
                Hero.experience += Enemy.experience;
                this.lvlUp()
            }
            else
                Hero.died=true
    }

    toString() {
        return `Hero Name: ${this.name} 
        Hero type: ${this.type}
        Hero strength: ${this.strength}
        Hero lvl: ${this.lvl}
        Hero range: ${this.range}
        Hero experience: ${this.experience}`;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }
    getStrength() {
        return this.strength;
    }
    getLvl() {
        return this.lvl;
    }
    getRange() {
        return this.range;
    }
    getExperience() {
        return this.experience;
    }
}

exports.Hero=Hero