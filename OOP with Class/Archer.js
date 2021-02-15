const {Hero} = require("./Hero.js");

class Archer extends Hero{
    constructor(name,type,strength,lvl,experience) {
        super(name,type,strength,lvl,experience);

        this.range="Long distance"
        this.weapon="Bow"
        this.passive()
    }

    passive(){
        this.range+=100;
    }
    abbilityOne(){
        console.log("Strong shoot from long distance")
    }

    abbilitySecond(){
        console.log("Places trap")
    }

    getWeapon(){
        return this.weapon+" "+this.range
    }

}
exports.Archer=Archer
