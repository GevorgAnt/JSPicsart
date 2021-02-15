const {Assasin} = require("./Assasin");
const {Archer} = require("./Archer");
const {Guardian} = require("./Guardian");

class HeroService{
    constructor(name,type,strength,lvl,experience) {
        this.name=name
        this.type=type
        this.strength=strength
        this.lvl=lvl
        this.experience=experience
    }

    createArcher(){
        return new Archer(this.name,this.type,this.strength,this.lvl,this.experience)
    }
    createGuardian(){
        return new Guardian(this.name,this.type,this.strength,this.lvl,this.experience)
    }
    createAssasin(){
        return new Assasin(this.name,this.type,this.strength,this.lvl,this.experience)
    }
}