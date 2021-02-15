const {Hero} = require("./Hero.js");

class Assasin extends Hero{
    constructor(name,type,strength,lvl,experience) {
        super(name,type,strength,lvl,experience);

        this.stealth=150
        this.range="short range"
        this.weapon="Dagger"
        this.passive()

    }

    passive(){
        this.stealth+=50;
    }
    abbilityOne(){
        console.log("invincible for 1 sec ")
    }

    abbilitySecond(){
        console.log("teleports to enemies back")
    }

    getWeapon(){
        return this.weapon+" "+this.range
    }
    getStealth(){
        return this.stealth
    }

}
exports.Assasin=Assasin