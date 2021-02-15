class Map{
    constructor(Hero) {
        this.map=[]
        this.Hero=Hero
    }

    initMap(){
        for (let i = 0; i <10 ; i++) {
            let enemy=new Enemy.createEnemy("A"+i)
            this.map.push(enemy)
        }
    }

    start(){
        for (let i = 0; i <this.map.length ; i++) {
            Hero.fight(this.Hero,this.map[i])
        }
    }
}