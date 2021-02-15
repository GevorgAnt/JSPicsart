class Enemy {
    constructor(name,damage,experience) {
        this.name=name
        this.damage=damage
        this.experiance=experience
    }

    static createEnemy(name)
    {
        let damage=Math.random()*10
        let experience=Math.random()*25
        return new Enemy(name,damage,experience)
    }

}