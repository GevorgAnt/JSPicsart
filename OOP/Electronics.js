 export function Electronics(name, mark, id,cost)
{
    this.name=name
    this.mark=mark
    this.id=id
    this.cost=cost
}

Electronics.prototype.info= function () {
    console.log(this.id +" "+this.name+" "+this.mark+" "+this.type+" "+this.cost);
}





