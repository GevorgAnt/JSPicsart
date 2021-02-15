const {Hero} = require("./Hero.js");

class Guardian extends Hero{
    constructor(name,type,strength,lvl,experience) {
        super(name,type,strength,lvl,experience);

        this.armor=150
        this.range="short range"
        this.weapon="sword and shield"
        this.passive()

    }

    passive(){
        this.armor+=50;
    }
    abbilityOne(){
        console.log("absolute defence for 1 sec")
    }

    abbilitySecond(){
        console.log("Absorb enemy attack")
    }

    getWeapon(){
        return this.weapon+" "+this.range
    }
    getArmor(){
        return this.armor
    }

}
exports.Guardian=Guardian