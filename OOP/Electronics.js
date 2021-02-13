 function Electronics(name, mark, id, type,cost)
{
    this.name=name
    this.mark=mark
    this.id=id
    this.type=type
    this.cost=cost
}

Electronics.prototype.NameSurname=function () {
    console.log(this.id +" "+this.name+" "+this.mark+" "+this.type+" "+this.cost);
}





